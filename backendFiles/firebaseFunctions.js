import { db } from "../config/firebase";
import { getFirestore, doc, addDoc, collection, deleteDoc, setDoc, query, getDocs, getDoc, orderBy, limit, get, where, updateDoc } from 'firebase/firestore';
import { getUsers } from '../AppData'
const transactionCollection = collection(db, 'transaction');
const groupCollection = collection(db, 'group');
const debtCollection = collection(db, 'debt');
const userCollection = collection(db, 'user');

const passcodeLength = 5;
//How to add extra fields to a map: Example
//debtList.push({...doc.data(), lenderName: lenderName,owerName:owerName});


// I get all the debts associated with the groupId, and order the documents by the total in descending order.
export async function GetGroupDebts(groupId) {
  var debtList = [];
  const q = query(debtCollection, where("groupId", "==", groupId), orderBy("total", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
    //have the users data stored, can find their name based on the id retrieved
    var owerName = getUsers().find(user => user.id === doc.data()['owerId']).name;
    var lenderName = getUsers().find(user => user.id === doc.data()['lenderId']).name;

    debtList.push({ ...doc.data(), id: doc.id, owerName: owerName, lenderName: lenderName });
    console.log(debtList)
  });
  return debtList;
}
export async function GetGroupDebts1(groupId) {
  var debtList = [];
  const q = query(debtCollection, where("groupId", "==", groupId), orderBy("total", "desc"));
  const querySnapshot = await getDocs(q);
  const userMap = new Map(); // create a map to store user details to avoid multiple lookups
  const userDocs = await getDocs(collection(db, "user")); // fetch user documents
  userDocs.forEach(doc => userMap.set(doc.id, doc.data())); // store user documents in map

  querySnapshot.forEach(doc => {
    const data = doc.data();
    if (data.groupId === groupId) {
      const ower = userMap.get(data.owerId); // get the owner document from userMap
      const lender = userMap.get(data.lenderId); // get the lender document from userMap
      if (ower && lender) { // add check for undefined objects
        debtList.push({
          ...data,
          id: doc.id,
          owerName: ower.name,
          ownerPicture: ower.picture,
          lenderName: lender.name,
          lenderPicture: lender.picture
        });
      }
    }
  });

  console.log(debtList);
  return debtList;
}


//I get the document that is associated with the groupId
export async function GetGroupData(groupId) {
  const docRef = doc(groupCollection, groupId);
  var groupData;
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      groupData = docSnap.data();
      console.log(groupData);
    } else {
      console.log("Group does not exist")
    }
  } catch (error) {
    console.log(error)
  }
  return groupData;
}
export async function GetGroupTransactions(groupId) {
  var transactionList = [];
  // console.log("Firebase:" + groupId);
  const q = query(transactionCollection, where("groupId", "==", groupId));
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    transactionList.push(doc.data());
  });
  return transactionList;
}
export async function GetGroupTransactions1(groupId) {
  const transactionList = [];
  const q = query(transactionCollection, where("groupId", "==", groupId));
  const querySnapshot = await getDocs(q);
  for (const doc of querySnapshot.docs) {
    const transaction = doc.data();
    const userQuery = query(userCollection, where("uid", "==", transaction.highestPayer));
    const userSnapshot = await getDocs(userQuery);

    const users = userSnapshot.docs.map(doc => doc.data());
    const highestPayerUsers = users.filter(user => user.payerAmount === transaction.payerAmount);

    highestPayerUsers.forEach(user => {
      const transactionWithUser = { transaction, user };
      transactionList.push(transactionWithUser);
    });
  }

  return transactionList;
}

export async function createTransaction(transactionName, transactionTotal, groupId, debts, currentGroupTotal) {
  //Update the total expense in the group document
  const groupRef = doc(groupCollection, groupId);
  var newTotal = (parseFloat(currentGroupTotal) + parseFloat(transactionTotal)).toFixed(2);
  var updatedGroupData = {
    total: parseFloat(newTotal)
  }

  await updateDoc(groupRef, updatedGroupData);

  var data = {
    name: transactionName,
    total: transactionTotal,
    groupId: groupId,
  }

  const transaction = await addDoc(transactionCollection, data);
  //accessing the list of debts
  console.log(debts);
  //Debts are added
  const q = query(debtCollection, where("groupId", "==", groupId));
  const allDebts = await getDocs(q);


  await Promise.all(debts.map(async (element) => {
    //no debts yet, just add the debt
    var found = false;
    if (allDebts.size <= 0) {
      console.log('Added debt');
      const debt = await addDoc(debtCollection, element);
      found = true;
    }
    for (var x = 0; x < allDebts.size; x++) {
      //matches current so the ower will need to owe more
      //take the current debt and add the extra debt
      console.log(allDebts.docs[x].data());
      if (allDebts.docs[x].data()['lenderId'] == element['lenderId'] && allDebts.docs[x].data()['owerId'] == element['owerId']) {
        found = true;
        var newDebt = parseFloat(allDebts.docs[x].data()['total']) + parseFloat(element['total']);
        var newData = {
          total: newDebt,
        }
        const debtRef = doc(debtCollection, allDebts.docs[x].id);
        updateDoc(debtRef, newData);
        break;
      }
      //reversed so the ower will owe less, may pay off or need to be owed now
      else if (allDebts.docs[x].data()['owerId'] == element['lenderId'] && allDebts.docs[x].data()['lenderId'] == element['owerId']) {
        found = true;
        var newDebt = (parseFloat(allDebts.docs[x].data()['total']) + (parseFloat(element['total']) * -1)).toFixed(2);
        //delete the debt
        if (newDebt == 0.0) {
          const debtRef = await doc(debtCollection, allDebts.docs[x].id);
          await deleteDoc(debtRef);
        }
        //reverse the debt
        else if (newDebt < 0.0) {
          //change debt to positive
          newDebt *= -1;
          //swith lender and owerId
          var newData = {
            owerId: allDebts.docs[x].data()['lenderId'],
            lenderId: allDebts.docs[x].data()['owerId'],
            total: newDebt,
          }
          //update the doc with the new data
          const debtRef = await doc(debtCollection, allDebts.docs[x].id);
          await updateDoc(debtRef, newData);
        }
        else {
          var newData = {
            total: newDebt,
          }
          //only update the total
          const debtRef = await doc(debtCollection, allDebts.docs[x].id);
          await updateDoc(debtRef, newData);
        }
        break;
      }
    }
    if (!found) {
      //no doc matching add debt
      console.log('Added debt');
      const debt = await addDoc(debtCollection, element);
    }
  }));
}

export async function getUserId(authId) {
  console.log(authId);
  const q = query(userCollection, where("uid", "==", authId));
  const user = await getDocs(q);
  return user.docs[0].id;
}


export async function getGroups(userId) {
  var groupData = [];
  const userRef = doc(userCollection, userId);
  const userDoc = await getDoc(userRef);
  //get the users groups
  var groups = userDoc.data()['groups'];
  //putting the ids into a list
  var groupIds = Object.keys(groups);
  //push the data from each group document
  for (var x = 0; x < groupIds.length; x++) {
    const groupRef = doc(groupCollection, groupIds.at(x));
    const groupDoc = await getDoc(groupRef);
    //id is added to the data so that it can be used as a key
    //so transactions can be accessed
    groupData.push({ ...groupDoc.data(), id: groupDoc.id });
  }
  return groupData;
}
export async function getGroupUsers(groupId) {
  var userData = [];
  const groupRef = doc(groupCollection, groupId);
  //get the document
  const groupDoc = await getDoc(groupRef);
  var users = groupDoc.data()['users'];
  let userIds = Object.keys(users);
  //check if the id passed matches something already in
  for (var x = 0; x < userIds.length; x++) {
    console.log(userIds.at(x));
    const userRef = doc(userCollection, userIds.at(x));
    const userDoc = await getDoc(userRef);
    //id also added to data
    userData.push({ ...userDoc.data(), id: userDoc.id });
  }
  return userData;
}
export async function createGroup(addedUsers, userId, groupName) {
  var users = {};
  var groupId;
  //adding self to group as well
  addedUsers.push(userId);
  const startingData = {
    name: groupName,
    total: 0.00,
    passcode: generateRandomPasscode(),
  }
  const r = await addDoc(groupCollection, startingData)
    .then(docRef => {
      groupId = docRef.id;
      // console.log(groupId);
    })
    .catch(error => {
      console.log(error);
    })
  console.log(groupId);
  for (var i = 0; i < addedUsers.length; i++) {
    var id = addedUsers[i];
    users[id] = true;
    //reference to the user
    const userRef = doc(userCollection, id);
    //get the document
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists) {
      console.log('Not a user!');
    } else {
      var groups = userDoc.data()['groups'];
      groups[groupId] = true;
      //updating the users document
      updateDoc(userRef, { groups });
    }
  }
  const data = {
    users
  }
  //group updated
  var groupRef = doc(groupCollection, groupId);
  const res = await updateDoc(groupRef, data);
}
//This function may not be needed depending on if you can add members
//after creating a group or if the only way they can join is through the code
export async function updateGroupMembers(newUsers) {
  var gId = "qRj9iF0OMLCTpvSbD9Ep";
  var users;
  const groupRef = doc(groupCollection, gId);
  const docSnap = await getDoc(groupRef);
  if (!docSnap.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', docSnap.data());
    users = docSnap.data()['users'];
  }
  //adding multiple new users
  for (var i = 0; i < newUsers.length; i++) {
    users[newUsers[i]] = true;
  }
  updateDoc(groupRef, {
    users
  })
}
//can have a alert
//check for return value if 1, write joined group
//if 0, write you are already in the group
export async function joinGroup(passcode, userId) {
  //query to find the group with the passcode
  const group = query(groupCollection, where('passcode', '==', passcode));
  const querySnapshot = await getDocs(group);
  var groups;
  //group was found
  if (querySnapshot.size > 0) {
    //getting the groups users
    var users = querySnapshot.docs[0].data()['users'];
    console.log(users);
    if (isInGroup(users, userId)) {
      console.log("You are already in the group!");
      return 0;
    }
    //Adding the group to the user's list
    //the groups id
    const groupId = querySnapshot.docs[0].id;
    //reference to the user
    const userRef = doc(userCollection, userId);
    //get the document
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists) {
      console.log('No group');
    } else {
      //this is the users group list
      console.log(userDoc.data());
      groups = userDoc.data()['groups'];
      //adding the group
      groups[groupId] = true;
      //updating the users document
      updateDoc(userRef, {
        groups
      })
    }
    //Adding the user to the group's list
    //getting a reference to the group
    const groupRef = doc(groupCollection, groupId);
    //adding the user to the group
    users[userId] = true;
    //updating the document
    const response = await updateDoc(groupRef, {
      users
    })
    console.log("Added to the group!");
    return 1;
    //no documents
  } else {
    console.log("No group found!");
  }
}
//finds all users in the database
export async function getAllUsers() {
  //gets every thing in the user collection
  const users = await getDocs(userCollection);
  const userData = [];
  users.forEach(doc => {
    //pushes data including id to the list
    userData.push({ ...doc.data(), id: doc.id });
  })
  console.log(userData);
  return userData;
}
//finds one user in data base if found returns data otherwise returns 0
export async function getUser(queryData) {
  const queryChoice = 'name'
  //tries to find the document based on a query in this case the name
  const userRef = query(userCollection, where(queryChoice, '==', queryData));
  const userDoc = await getDocs(userRef);
  if (userDoc.size > 0) {
    const data = { ...userDoc.docs[0].data(), id: userDoc.docs[0].id };
    console.log(data);
    return data;
  } else {
    console.log("User doesn't exist");
    return 0;
  }
}
function isInGroup(users, userId) {
  //gives only the ids
  let userIds = Object.keys(users);
  console.log(userIds);
  //check if the id passed matches something already in
  for (var x = 0; x < userIds.length; x++) {
    if (userIds[x] == userId) {
      console.log(userIds[x]);
      return true;
    }
  }
  return false;
}
//Resource:https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/
export function generateRandomPasscode() {
  var passcode = '';
  var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  for (let i = 1; i <= passcodeLength; i++) {
    var char = Math.floor(Math.random()
      * string.length + 1);
    passcode += string.charAt(char)
  }
  return passcode;
}

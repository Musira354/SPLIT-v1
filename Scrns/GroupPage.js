import { SafeAreaView, StyleSheet, View, Dimensions, Text, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Logo, BottomLayer, LeftArrow, ProfileImage, User, OrderLight, CameraIcon, HomeIcon, AddButton, BottomBar, BottomIcons } from '../components/Svgs';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { GetGroupDebts1, GetGroupTransactions1 } from "../backendFiles/firebaseFunctions";

const GroupDetail = ({ navigation, route }) => {

  const [isShow, setisShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [items, setitem] = useState(undefined);
  const [member, setmember] = useState([]);
  const [TextReaded, setTextReaded] = useState("");
  const [total, setTotal] = useState("");
  const [debts, setDebts] = useState("");
  const [transactions, setTransactions] = useState("");
  const { groupId , name} = route.params;
  console.log("group 777777 id", groupId)
  //hte max number of transactions and debts that will be shown
  const itemCount = 3;
  // const db = getFirestore(app);
  const dummyDebts = [
    { owerName: "Joseph", lenderName: "Bob", amount: 5.99, owerURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg", lenderURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg" },
    { owerName: "John", lenderName: "Jack", amount: 1.99, owerURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg", lenderURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg" },
    { owerName: "Alex", lenderName: "Rick", amount: 7.99, owerURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg", lenderURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-8.jpg" }
  ]

  const dummyTransactions = [
    { highestPayerName: "Joseph", amount: 65.33, highestPayerURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg", name: "Dinner at 5 star restaurant" },
    { highestPayerName: "Jake", amount: 21.67, highestPayerURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg", name: "Lunch at bad restaurant" },
    { highestPayerName: "Frank", amount: 33.97, highestPayerURI: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-8.jpg", name: "Coffee at Starbucks" }
  ]

  const getDebts = async () => {
    const debtData = await GetGroupDebts1(groupId);
    console.log('debtdata,',debtData);
    setDebts(debtData);
  };

  const getTransactions = async () => {
    const transactionData = await GetGroupTransactions1(groupId);
    //console.log(transactionData);
    setTransactions(transactionData);
  };
  function getData() {
    getDebts();
    getTransactions();
  }

  // const getItem = async () => {
  //   const docRef = doc(db, "Item", route?.params?.GrouName);
  //   const docSnap = await getDoc(docRef);
  //   return docSnap.data();
  // };

  // const getMember = async () => {
  //   const docRef = doc(db, "Permission", route?.params?.GrouName);
  //   const docSnap = await getDoc(docRef);
  //   return docSnap.data();
  // };

  useEffect(() => {
    getData();
    // getItem().then((res) => {
    //   setitem(res);
    // });
    // getMember().then((res) => {
    //   setmember(res?.users);
    // });
  }, []);


  const Transaction = ({ transaction }) => (
    //transaction = {transaction, user}
    <View style={styles.flexContainer}>
      <Image source={{ uri: transaction.user.picture }} style={styles.image}></Image>
      <Text style={{ color: '#4F555A' }}>{transaction.transaction.name}</Text>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'right', right: 30, color: '#4F555A' }}>${transaction.transaction.total}</Text>
      </View>
    </View>
  );

  const Debt = ({ debt }) => (
    <View style={styles.flexContainer}>
      <Image source={{ uri: debt.ownerPicture }} style={styles.image}></Image>
      <Text>{debt.owerName}</Text>
      <Text>{"----->"}</Text>
      <Image source={{ uri: debt.lenderPicture }} style={styles.image}></Image>
      <Text style={{ color: '#4F555A' }}>{debt.lenderName}</Text>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'right', right: 30, color: '#4F555A' }}>${debt.total}</Text>
      </View>
    </View>
  );

  function calculateTotal(transactions) {
    let total = 0;
    for (let transaction of transactions) {
      total += parseFloat(transaction.transaction.total);
    }
    return `$${total.toFixed(2)}`;
  }
  return (
    <SafeAreaView>


      <View style={styles.bottomLayerConaner}>
        <BottomLayer />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("TransactionOption", route?.params)}>
        <AddButton />
      </TouchableOpacity>
      <BottomIcons/>
      <Logo />

      <Text style={styles.heading}>{name}</Text>
      <View style={styles.MyGroupSpace}>
        <Text style={{ ...styles.myGroup, fontSize: 20, left: 0 }}>Transactions</Text>
        <View
          style={{
            height: 120,
            backgroundColor: "#EAF0F7",
            elevation: 1,
            borderRadius: 10,
            top: 20,
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <FlatList
            style={styles.list}
            data={transactions.slice(0, itemCount)}
            renderItem={({ item }) => <Transaction transaction={item} />}
            ListEmptyComponent={() => (
              <Text style={styles.emptyText}>There are no transactions.</Text>
            )}
          />
        </View>

        <Text style={{ ...styles.myGroup, fontSize: 20, left: 0, marginTop: 0 }}>
          Settle Debts
        </Text>
        <View
          style={{
            height: 120,
            backgroundColor: "#EAF0F7",
            elevation: 1,
            borderRadius: 10,
            top: 20,
            justifyContent: "center",
            marginBottom: 10,
          }}
        >

          <FlatList
            style={styles.list}
            data={debts.slice(0, itemCount)}
            renderItem={({ item }) => <Debt debt={item} />}
            ListEmptyComponent={() => (
              <Text style={styles.emptyText}>There are no debts.</Text>
            )}
          />

        </View>

        <Text style={{ ...styles.myGroup, fontSize: 20, left: 0, marginTop: 5 }}>
          Total Expense
        </Text>
        <View
          style={{
            height: 50,
            backgroundColor: "#EAF0F7",
            elevation: 1,
            borderRadius: 10,
            top: 25,
            justifyContent: "center",
          }}
        >
          <Text style={{ left: 20 }}>
            {calculateTotal(transactions)}
          </Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default GroupDetail;

const styles = StyleSheet.create({
  Logo: {
    height: "10%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    left: 0,
    flexDirection: "row",
  },
  heading: { color: "black", fontWeight: "bold", left: 20, fontSize: 26, top: 75 },
  myGroup: { color: "black", fontWeight: "bold", left: 15, fontSize: 22, marginBottom: 25, top: 40, },
  emptyText: {left: 10, fontSize: 15, marginTop:10},
  MyGroupSpace: {
    top: 40,
    height: 340,
    // backgroundColor: "#b0c4de",
    width: "90%",
    borderRadius: 20,
    alignSelf: "center",
  },
  image: {
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  flexContainer: {
    left: 10,
    alignItems: "center",
    flex: 1,
    marginVertical: 0,
    flexDirection: "row",
  }, Logo: {
    position: 'absolute',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  PlusButton: {
    height: 60,
    width: 60,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4461F2",
    alignSelf: "center",
    top: 10,
    shadowColor: "#4461F2",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },

  bottomLayerConaner: {
    height: "0%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 65,
  },
});

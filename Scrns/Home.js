import { SafeAreaView, StyleSheet, View, Dimensions, Text, TouchableOpacity, ScrollView, Image, FlatList, Alert, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { SvgXml } from "react-native-svg";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { getGroups } from "../backendFiles/firebaseFunctions";
import { HomeIcon, ProfileImage, Logo, BottomIcons, BottomLayer, AddButton } from "../components/Svgs";
import app from '../Firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';

import {
  getFirestore,
  collection,
  listCollections,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,

} from "firebase/firestore";



const db = getFirestore(app);

const listAllCollections = async () => {

  const collections = await listCollections(db);
  return collections.map((collection) => collection.id);
};


const Home = () => {
  const navigation = useNavigation();
  const [isShow, setisShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [allGroups, setallGroups] = useState([]);
  const [image, setimage] = useState(null);
  const [TextReaded, setTextReaded] = useState("");
  const Auth = getAuth(app);
  const userUid = getAuth(app).currentUser.uid
  const [groupid, setgroupid]= useState("")
  const colors = [
    { bg: "red", textColor: "white" },
    { bg: "green", textColor: "white" },
    { bg: "blue", textColor: "white" },
    { bg: "yellow", textColor: "black" },
    { bg: "orange", textColor: "black" },
    { bg: "purple", textColor: "black" },
  ];
  const images = [
    "https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.eb6bc833d264d2e9f695d736836bb564?rik=g0KjEGcDgo30Hw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fgeneric-avatar-icon-51.png&ehk=i3OIOsf6xtx%2bqaCLmwGi7hN4eDntLu%2f%2b9WxFbSVRYRo%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.de2135625ce46525e09320ba02e86032?rik=03qOiI9B0N9KfA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.8ecb8e1845f04b543161e388bef36334?rik=tXj9313wlJX5Tw&pid=ImgRaw&r=0",
  ];

  const groups = [
    { "GrouName": "Split4991" },
    { "GrouName": "Work " },
    { "GrouName": "Golf" },
    { "GrouName": "Split499" }
  ]

  async function getGroupData() {
    const groups = await getGroups("8Z02wZ8mVHnoCFIFbQm4");
    setallGroups(groups);
    //console.log(groups)

  }


  //No3n3K6b7EhzHhQIxU81I2Mibvg1
  useEffect(() => {
    const q = query(collection(db, "group"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const groups = [];
      querySnapshot.forEach((doc) => {
        if (doc.data()) {


          const group = doc.data();
          const users = group.users;
          //passes user id to find the groups of that usedr
          if ((users && users[userUid])  || (group.authorID === userUid) ) {
            groups.push(group);
          }
        }
        console.log(doc.data(), '  \n\n');
        console.log(doc.id);
        //let userIds = Object.keys(users);
        //console.log(userIds);
      });
      setallGroups(groups);


    });


  }, [])


  const onGroupPress = (item) => {
    navigation.navigate("GroupPage", { groupId: item.groupid , name: item.name});
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.bottomLayerConaner}>
        <BottomLayer />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateGroup")}>
        <AddButton />
      </TouchableOpacity>
      <BottomIcons/>
      <Logo />

      <View>
        <Text style={styles.myGroup}>My Groups</Text>
        <View style={styles.MyGroupSpace}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={allGroups}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            ListEmptyComponent={() => (
              <Text style={styles.emptyText}>There are no groups made yet.</Text>
            )}
            renderItem={({ item }) => {
              const randomIndex = Math.floor(Math.random() * colors.length);
              const randomColor = colors[randomIndex];
              const randomImage = images[randomIndex];
              return (
                <TouchableOpacity

                  onPress={() => {
                    setgroupid(item?.groupid)

                    onGroupPress(item)
                  }}
                  style={{
                    height: 160,
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    backgroundColor: randomColor.bg,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 60,
                      alignSelf: "center",
                      bottom: 10,
                      backgroundColor: "white",
                      padding: 5,
                    }}
                    source={{ uri: randomImage }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "bold",
                      color: randomColor.textColor,
                    }}
                  >
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

      </View>


    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Logo: {
    position: 'absolute',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {left: 10, fontSize: 15, marginTop:10},

  myGroup: { color: "black", fontWeight: "bold", left: 40, fontSize: 25, top: 70 },
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
  MyGroupSpace: {
    height: "72%",
    // backgroundColor: "#b0c4de",
    width: "90%",
    marginTop: 80,
    borderRadius: 20,
    alignSelf: "center",
  },
  emptyContainer: {
    height: "36%",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  bottomLayerConaner: {
    height: "0%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 65,
  },
});

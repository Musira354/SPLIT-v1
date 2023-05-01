import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import Clipboard from "@react-native-clipboard/clipboard";
import * as Clipboard from 'expo-clipboard';
import app from "..//Firebase";
import { Input } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import { Logo, BottomLayer, BottomBar, AddButton, BottomIcons } from "../components/Svgs";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import PermissionPop from "../components/AlertModal";
import * as ImagePicker from "expo-image-picker";
import { BallIndicator } from "react-native-indicators";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,

} from "firebase/firestore";
import { Alert } from "react-native";
const CreateGroup = ({ navigation }) => {
  const [isShow, setisShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [image, setimage] = useState(null);
  const [group, setgroup] = useState("");
  const [Pascode, setPascode] = useState("");
  const [Name, setName] = useState("");
  const [Friend, setFriend] = useState("");
  const [FriendsList, setFriendsList] = useState(new Map());
  const [GroupName, setGroupName] = useState("");
  // const Auth = getAuth(app);
  const db = getFirestore(app);

  const auth = getAuth(); // get the auth instance
  
  // Convert the Map to a plain object before saving to Firestore
  const usersObj = {};
  FriendsList.forEach((value, key) => {
    usersObj[key] = value;
  });

  const handleAddFriend = (friendName) => {
    const newFriendList = new Map(FriendsList);
    newFriendList.set(friendName, true);
    setFriendsList(newFriendList);
    setFriend(friendName);
  };

  useEffect(() => {
    const randomId = Math.floor(10000000 + Math.random() * 90000000).toString();
    setPascode(randomId);
  }, []);
  // console.log(Auth?.currentUser?.uid);
  const onCreatGroup = async () => {
    if (GroupName == "") {
      Alert.alert("Alert!", "Enter Group name");
    } else if (Pascode == "") {
      Alert.alert("Alert!", "Enter Group Passcode");
    } else {
      
      const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36)
      setDoc(doc(db, "group", uniqueId), {
        groupid: uniqueId,
        name: GroupName,
        pascode: Pascode,
        authorID: auth.currentUser.uid,
        users: usersObj,
        total: 0,
      })
        .then((docRef) => {
          setFriend("")
          setFriendsList(new Map())
          setGroupName("")
          setName()
          navigation.replace("Home");
        })
        .catch((error) => {
          console.error("Error adding group document: ", error);
          Alert.alert("Sorry!", "Something went wrong while creating the group");
        });
    }
  };


  function copyToClipboard() {
    Clipboard.setStringAsync(Pascode);
    console.log("Copied!");
  }


  return (
    <SafeAreaView>
      <BottomLayer />
      <BottomIcons />
      <Logo />
      <TouchableOpacity onPress={() => onCreatGroup()}>
        <AddButton />
      </TouchableOpacity>
      <View>


        <Text style={styles.myGroup}>Name your group</Text>
        <View style={styles.MyGroupSpace}>
          <Input
            onChangeText={(e) => setGroupName(e)}
            placeholder="Group name"
            inputContainerStyle={{
              borderBottomWidth: 0,
              alignSelf: "center",
              height: 20,
              borderRadius: 10,
              marginTop: 15,
            }}
            containerStyle={{
              backgroundColor: "#dfe9e9",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            rightIcon={
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderWidth: 1,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>X</Text>
              </TouchableOpacity>
            }
          />

          <Input
            //For now just keep at passcode
            editable={false}
            onChangeText={(e) => setPascode(e.replace("Passcode", ""))}
            placeholder="Passcode"
            color="#000"
            value={`Pascode:${Pascode}`}
            inputContainerStyle={{
              borderBottomWidth: 0,
              alignSelf: "center",
              height: 20,
              borderRadius: 10,
              marginTop: 15,
            }}
            containerStyle={{
              backgroundColor: "#dfe9e9",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            rightIcon={
              <TouchableOpacity onPress={() => copyToClipboard()}>
                <FontAwesome5 name={"copy"} color={"#9E9E9E"} size={18} />
              </TouchableOpacity>
            }
          />

          <Input
            onChangeText={(e) => setName(e)}
            placeholder="Name"
            inputContainerStyle={{
              borderBottomWidth: 0,
              alignSelf: "center",
              height: 20,
              borderRadius: 10,
              marginTop: 15,
            }}
            containerStyle={{
              backgroundColor: "#dfe9e9",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            rightIcon={
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderWidth: 1,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>X</Text>
              </TouchableOpacity>
            }
          />

          <View
            style={{
              height: 55,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Input
              onChangeText={(e) => handleAddFriend(e)}
              placeholder="Add a Friend with user ID"
              inputContainerStyle={{
                borderBottomWidth: 0,
                alignSelf: "center",
                height: 30,
                borderRadius: 10,
                marginTop: 20,
              }}
              containerStyle={{
                backgroundColor: "#dfe9e9",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
              }}
              value={Friend}
              rightIcon={
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderWidth: 1,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>X</Text>
                </TouchableOpacity>
              }
            />
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                left: 10,
                top: 10,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#dfe9e9",
              }}
              onPress={() => {
                setFriendsList(prevFriendsList => new Map(prevFriendsList).set(Friend, true));
                setFriend("");
              }}
            >
              <FontAwesome5 name="plus" />
            </TouchableOpacity>

          </View>
        </View>


        <View style={styles.bottomLayerConaner}>
        </View>
      </View>


    </SafeAreaView>

  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  Logo: {
    height: "10%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  myGroup: { color: "black", fontWeight: "bold", left: 25, fontSize: 25, top: 60, },
  PlusButton: {
    height: 60,
    width: 60,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4461F2",
    alignSelf: "center",
    top: 20,
    shadowColor: "#4461F2",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  MyGroupSpace: {
    top: 80,
    height: "65%",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  emptyContainer: {
    height: "36%",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  bottomLayerConaner: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
});

import {SafeAreaView,StyleSheet,View,Dimensions,Text,TouchableOpacity,ScrollView,Image} from "react-native";
import Svg, { Path } from "react-native-svg"
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {Logo,BottomLayer,LeftArrow,BottomBar} from "../components/Svgs";
import PermissionPop from '../components/AlertModal';
const AddExpense = ({ navigation, route }) => {
  const [isShow,setIsShow] = useState(false);
  const { groupId , name} = route.params;

  function onCamera(){
    setIsShow(false);
    navigation.navigate("Camera", route?.params);
  }

  function onGallary(){
    setIsShow(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
        }}
        
      >
        <Logo/>
        <Text style={styles.myGroup}>Add Expense</Text>
        <View style={styles.MyGroupSpace}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateTransaction", route?.params);
            }}
            style={{
              height: 50,
              width: "90%",
              backgroundColor: "#4461F2",
              alignSelf: "center",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Add manually
            </Text>
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}
          >
            OR
          </Text>
          <TouchableOpacity
            onPress={() => {setIsShow(true);}}
            style={{
              height: 50,
              width: "90%",
              backgroundColor: "#4461F2",
              alignSelf: "center",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Scan a Receipt
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLayerConaner}>
          <BottomLayer />
        </View>
      </View>
      <View
        style={{
          height: 80,
          width: "100%",
          position: "absolute",
          bottom: -1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: "80%",
            width: "25%",
            left: 5,
            top: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "80%",
            width: "25%",
            left: -5,
            top: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </TouchableOpacity>
      </View>
      <PermissionPop
        isOpen={isShow}
        onCamera={() => onCamera()}
        onGallary={() => onGallary()}
        onClose={() => {
          setIsShow(false);
        }}
      />
    </SafeAreaView>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  Logo: {
    height: "10%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  myGroup: { color: "black", fontWeight: "bold", left: 25, fontSize: 25, top:60,},
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
    height: "68%",
    backgroundColor: "#EAF0F7",
    width: "90%",
    top:70,
    borderRadius: 20,
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
    height: "9%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
});
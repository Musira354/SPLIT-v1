import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Logo, BottomIcons, BottomLayer, ContinueButton, LeftArrow } from '../components/Svgs';
import { useNavigation } from '@react-navigation/native';


export default function App({ navigation, route }) {
  // const navigation = useNavigation();
  const { item, userData, userSpending, totall } = route?.params;

  const payment = totall;
  //the list that will contain each user's input
  const [inputs, setInputs] = useState([]);
  const [total, setTotal] = useState(0.00);
  const [refresh, setRefresh] = useState("");

  // var userData = [
  //   { uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg', name: 'Jane', id: 20055 },
  //   { uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg', name: 'Chloe', id: 20056 },
  //   { uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-8.jpg', name: 'Bob', id: 20057 },
  // ];
  var defaultPaying = Array(userData.length).fill(undefined);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setInputs(defaultPaying);
  }, [])


  function submitPayments() {
    for (var x = 0; x < inputs.length; x++) {
      if (inputs[x] == undefined || inputs[x] == null) {
        inputs[x] = 0.0;
      }
      else {
        inputs[x] = parseFloat(inputs[x]);
      }
    }
    if (valid) {
      Alert.alert("Finish");
      console.log("Finish!");
    }
    else {
      Alert.alert("Finish");
      console.log("Payment must equal total!");
    }
    console.log(inputs);
  }

  //reseting to the original values
  function resetPayments() {
    for (var x = 0; x < inputs.length; x++) {
      inputs[x] = 0.00;
    }
    setTotal(0);
    setInputs(defaultPaying);
    setRefresh(!refresh);
  }

  //called anytime an input box is changed sums to get the total and changes state to display
  function changeTotal(newInput) {
    var sum = 0;
    for (var x = 0; x < inputs.length; x++) {
      let pay = newInput[x];
      if (isNaN(parseFloat(pay))) {
        sum += 0;
      }
      else {
        sum += parseFloat(newInput[x]);
      }
    }
    if (sum.toFixed(2) == payment.toFixed(2)) {
      setValid(true);
    }
    else {
      setValid(false);
    }
    setTotal(sum);
  }


  return (
    <SafeAreaView style={styles.bg}>
      <Logo />
      <View style={styles.bottomLayerConaner}>
        <BottomLayer />
      </View>
      <BottomIcons />


      <TouchableOpacity onPress={() => navigation.navigate("GroupPage", { item })}>
        <ContinueButton />
      </TouchableOpacity>
      <Text style={styles.title}>Payments</Text>

      <View style={styles.inputsContainer}>
        <FlatList
          data={defaultPaying}
          extraData={refresh}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  flexDirection: 'row',
                }}
              >
                <View>
                  <Image style={styles.smallImage} source={{ uri: userData[index].uri }}></Image>
                </View>
                <View style={styles.textView}>
                  <TextInput
                    placeholderTextColor="#4F555A"
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="0.00"
                    onChangeText={text => {
                      if (text.length > 0) {
                        text = text.replace(/[^0-9.]/g, '');
                        if (isNaN(text)) {
                          return;
                        }
                      }
                      const newInputs = [...inputs];
                      newInputs[index] = text;
                      setInputs(newInputs);
                      changeTotal(newInputs);
                    }}
                    value={userSpending[index].toString()}
                  />
                </View>
                <View
                  style={{
                    height: 60
                  }}
                ></View>
              </View>

            );
          }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.total}>Total ${payment}</Text>
        <Text style={[styles.invalid, (valid ? styles.valid : null)]}>${total.toFixed(2)}</Text>

        <TouchableOpacity onPress={() => submitPayments()}>

        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 80,
    resizeMode: 'center'
  },
  inputsContainer: {
    top: 0,
    height: 230,
  },
  title: {
    left: 70,
    marginTop: 80,
    paddingVertical: 8,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  total: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    top: 110,
    bottom: 0,
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  container: {
    top: 20,
    alignItems: 'center',
  },
  bottomContainer: {
    top: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  invalid: {
    //other styles
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  valid: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6BEBFF'
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    padding: 10,
    fontSize: 16,
    color: '#4F555A',
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },
  textView: {
    left: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#EAF0F7',
    height: 40,
    width: 200,
    padding: 0,
  },
  bg: {

  }, bottomLayerConaner: {
    height: "0%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 65,
  },
});
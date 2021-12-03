import React, { useEffect,useState} from "react";
import {SafeAreaView} from 'react-native'
import {Button, TextInputField} from 'react-native'

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

//icons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import MyImage from "../assets/images/Login";

const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!username) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    fetch('http://192.168.0.212/ehiremo/test.php', {
      method: 'POST',
      body: JSON.stringify({
        'username': username,
        'password': password
      }),
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.text())
    .then((responseJson) => {
      //Hide Loader
      setLoading(false);
      navigation.navigate('Home');
      if(responseJson){

      }
    })
    .catch((error) => {
      //Hide Loader
      setLoading(false);
    });
  };
  return (

    <KeyboardAvoidingView behavior={"height"} style={styles.container}>
    <ScrollView style={styles.screen}>
    <Image
    style={{ width: "100%", height: 230, marginTop: 100 }}
    source={MyImage.img_1}
    resizeMode="contain"
    />

    <Text
    style={{
      paddingHorizontal: 20,
      textAlign: "center",
      fontSize: 22,
      color: "#555",
      fontFamily: "sans-serif-light",
      marginTop: 30,
    }}
    >
    Login to your account.
    </Text>

    <View style={{ alignItems: "center", marginTop: 20 }}>
    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    }}
    >
    <FontAwesome
    name="user-o"
    size={24}
    color="#c3c3c3"
    style={{
      position: "absolute",
      left: 10,
      top: 10,
    }}
    />
    <TextInput style={styles.input} placeholder="Username or Email" onChangeText={(username) => setUsername(username)}/>
    </View>

    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    }}
    >
    <AntDesign
    name="lock"
    size={30}
    color="#c3c3c3"
    style={{
      position: "absolute",
      left: 5,
      top: 8,
    }}
    />
    <TextInput
    secureTextEntry={true}
    style={styles.input}
    placeholder="Password"
    onChangeText={(password) => setPassword(password)}
    />
    </View>
    </View>

    <View
    style={{
      marginTop: 20,
      width: "100%",
      alignItems: "center",
    }}
    >
    <TouchableOpacity onPress={handleSubmitPress}
    activeOpacity={0.5}
    style={{
      textAlign: "center",
      backgroundColor: "#14a800",
      width: 300,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
    }}
    >
    <Text
    style={{
      fontSize: 18,
      color: "#fff",
    }}
    >
    Login
    </Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#c3c3c3",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    paddingLeft: 38,
    fontSize: 16,
  },

  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default Login;

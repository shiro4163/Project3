import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import MyImage from "../../assets/images/Client";

const MyHires = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#1d4354",
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather
            name="menu"
            size={30}
            color="#fff"
            style={{
              marginTop: 5,
              marginRight: 5,
            }}
          />
        </TouchableOpacity>
        <View
          style={{ alignItems: "flex-start", marginLeft: 90, marginTop: 5 }}
        >
          <Text style={{ ...styles.title, color: "#fff", fontWeight: "400",
        fontSize: 22 }}>
            My Hires
          </Text>
        </View>
      </View>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: 10,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <TextInput style={styles.input} placeholder="Search" />
            <Text
              style={{ ...styles.caption, justifyContent: "flex-end" }}
            ></Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#c3c3c3",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 30,
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 75, height: 75, marginTop: 10 }}
              source={MyImage.hired}
              resizeMode="contain"
            />
            <Text
              style={{ ...styles.caption,  marginTop: 10}}
            >You havent hired anyone yet.</Text>

            <Text
              style={{ ...styles.title,  marginTop: 10, textAlign: "center"}}
            ><Text style={{color: "#14a800",
            textDecorationStyle: "solid",
                     textDecorationLine: "underline",
                     }}>Search for freelancers</Text> who can get your work done.</Text>


          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  screen: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },

  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#c3c3c3",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    marginTop: 3,
  },
  caption: {
    fontSize: 16,
    lineHeight: 18,
  },
  title2: {
    fontSize: 18,
    marginTop: 3,
  },
  caption2: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default MyHires;

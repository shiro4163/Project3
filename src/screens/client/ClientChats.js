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
  Alert,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import MyImage from "../../assets/images/Talent";
//import { back } from "react-native/Libraries/Animated/src/Easing";

const ClientChats = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [myColor, setMyColor] = React.useState("#fff");


  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
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
          <Text style={{ ...styles.title2, color: "#fff", fontWeight: "400" }}>
            Chats
          </Text>
        </View>
      </View>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{ marginTop: 25, alignItems: "flex-end", marginRight: 10 }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                textAlign: "center",
                backgroundColor: "#14a800",
                width: 170,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                marginBottom: 7,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Set Appointment
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 5,
              marginBottom: 15,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#c3c3c3",
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                borderColor: "#c3c3c3",
                borderBottomWidth: 1,
                borderRadius: 5,
                paddingVertical: 6,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    marginBottom: 7,
                    marginRight: 10,
                    marginLeft: 15,
                  }}
                  source={MyImage.img_1}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={{ ...styles.title, fontSize: 20, marginTop: 10 }}>
                  Norma Generation
                </Text>
              </View>
            </View>

            <View style={{ height: 510 }}></View>

            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 60,
                paddingHorizontal: 15,
                borderColor: "#c3c3c3",
                borderTopWidth: 1,
                paddingTop: 10,
                flexDirection: "row",
              }}
            >
              <TextInput style={styles.input} placeholder="" />

              <View
                style={{
                  alignItems: "flex-end",
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    textAlign: "center",
                    backgroundColor: "#14a800",
                    width: 70,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginBottom: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Send
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{ ...styles.title, marginBottom: 17, textAlign: "center" }}>
                  Set appointment between you and Norma G.
                </Text>

                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{
                      paddingLeft: 5,
                      marginBottom: 5,
                      fontSize: 16,
                      color: "#555",
                      fontFamily: "sans-serif-light",
                    }}
                  >
                    Project cost :
                  </Text>
                  <TextInput
                    style={{ ...styles.input, width: 270 }}
                  />

                  <Text
                    style={{
                      paddingLeft: 5,
                      marginBottom: 5,
                      fontSize: 16,
                      color: "#555",
                      fontFamily: "sans-serif-light",
                    }}
                  >
                    Start Date :
                  </Text>
                  <TextInput
                    style={{ ...styles.input, width: 270 }}
                  />

                  <Text
                    style={{
                      paddingLeft: 5,
                      marginBottom: 5,
                      fontSize: 16,
                      color: "#555",
                      fontFamily: "sans-serif-light",
                    }}
                  >
                    End Date :
                  </Text>
                  <TextInput
                    style={{ ...styles.input, width: 270 }}
                  />

                  <Text
                    style={{
                      paddingLeft: 5,
                      marginBottom: 5,
                      fontSize: 16,
                      color: "#555",
                      fontFamily: "sans-serif-light",
                    }}
                  >
                    Service :
                  </Text>
                  <TextInput
                    style={{ ...styles.input, width: 270 }}
                  />

                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    position: "absolute",
                    right: 20,
                    bottom: 20,
                  }}
                >
                  <Pressable
                    activeOpacity={0.5}
                    style={{
                      textAlign: "center",
                      backgroundColor: "#14a800",
                      width: 70,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 30,
                      marginBottom: 7,
                      marginRight: 8,
                    }}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                      }}
                    >
                      Close
                    </Text>
                  </Pressable>

                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      textAlign: "center",
                      backgroundColor: "#14a800",
                      width: 70,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 30,
                      marginBottom: 7,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                      }}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
       
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
    backgroundColor: "#fff",
  },

  input: {
    width: 240,
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
    color: "#555",
  },
  caption: {
    fontSize: 16,
    lineHeight: 18,
  },
  title2: {
    fontSize: 22,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption2: {
    fontSize: 16,
    lineHeight: 22,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    height: 470,
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ClientChats;

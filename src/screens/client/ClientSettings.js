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
  ScrollView
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import MyImage from "../../assets/images/Talent";

const ClientSettings = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
        {/* header */}
      <View
          style={{
            flexDirection: "row",
            backgroundColor: "#1d4354",
            paddingHorizontal: 15,
            paddingVertical: 5
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
          /></TouchableOpacity>
          <View style={{alignItems: "flex-start", marginLeft: 90, marginTop: 5}}>
            <Text style={{...styles.title, color: "#fff",fontWeight: "400"}}>Settings </Text>
          </View>
        </View>
      <View style={styles.screen}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{ marginTop: 25, marginBottom: 15, alignItems: "center",
        borderRadius: 20, borderWidth: 1, borderColor: "#c3c3c3",
        paddingVertical: 10,}}>
          <Image
            style={{ width: 80, height: 80, marginBottom: 7 }}
            source={MyImage.img_1}
            resizeMode="contain"
          />
            <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    textAlign: "center",
                    backgroundColor: "#14a800",
                    width: 120,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Change profile
                  </Text>
                </TouchableOpacity>

            <Text style={styles.caption}>This is a client account</Text>
            <Text style={{...styles.caption,
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
            textDecorationColor: "#14a800",
            color: "#14a800" }}>
                Switch to freelancer account.
            </Text>
            
            <View style={{flexDirection: "column"}}>
                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Name :</Text>
                <TextInput style={styles.input} placeholder="Joshua" />
                <TextInput style={styles.input} placeholder="Aguirre" />
                <TextInput style={styles.input} placeholder="D." />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Address :</Text>
                <TextInput style={styles.input} placeholder="Baliuag Bulacan" />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Contact no :</Text>
                <TextInput style={styles.input} placeholder="09123456789" />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Birthday :</Text>
                <TextInput style={styles.input} placeholder="01/01/2000" />

                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        textAlign: "center",
                        backgroundColor: "#14a800",
                        width: 140,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                        marginBottom: 7
                    }}
                    onPress={() => setModalVisible(true)}
                    >
                    <Text
                        style={{
                        fontSize: 16,
                        color: "#fff",
                        }}
                    >
                        Change password
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        textAlign: "center",
                        backgroundColor: "#14a800",
                        width: 120,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                        marginBottom: 7
                    }}
                    >
                    <Text
                        style={{
                        fontSize: 16,
                        color: "#fff",
                        }}
                    >
                        Save Changes
                    </Text>
                    </TouchableOpacity>
                
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
                            <Text style={{...styles.title, marginBottom: 17,}}>Change password</Text>
                            
                            <View style={{flexDirection: "column",}}>
                                <Text style={{
                                    paddingLeft: 5,
                                    marginBottom: 5,
                                    fontSize: 16,
                                    color: "#555",
                                    fontFamily: "sans-serif-light",
                                }}>Old password:</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    style={{...styles.input, width: 270}}
                                />

                                <Text style={{
                                    paddingLeft: 5,
                                    marginBottom: 5,
                                    fontSize: 16,
                                    color: "#555",
                                    fontFamily: "sans-serif-light",
                                }}>New password:</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    style={{...styles.input, width: 270}}
                                />

                                <Text style={{
                                    paddingLeft: 5,
                                    marginBottom: 5,
                                    fontSize: 16,
                                    color: "#555",
                                    fontFamily: "sans-serif-light",
                                }}>Confirm password:</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    style={{...styles.input, width: 270}}
                                />

                            </View>
                            
                            <View style={{flexDirection: "row",
                             alignItems: "flex-end", position: "absolute", right: 20, bottom: 50}}>
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
                                    marginBottom: 7
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

            </View>


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
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  input: {
    width: 300,
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
    fontSize: 22,
    marginTop: 3,
    fontWeight: "bold",
    color: "#555"
  },
  caption: {
    fontSize: 16,
    lineHeight: 18,
  },
  title2: {
    fontSize: 18,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalView: {
    height: 400,
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ClientSettings;

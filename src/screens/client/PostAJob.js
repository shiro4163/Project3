import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Picker,
  CheckBox
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import MyImage from "../../assets/images/Talent";

const PostAJob = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [state, setState] = React.useState({
    searches: "",
    choosenIndex: 0
  });
  const [isSelected, setSelection] = React.useState(false);
  const [isSelected2, setSelection2] = React.useState(false);

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
          <View style={{alignItems: "flex-start", marginLeft: 78, marginTop: 5}}>
            <Text style={{...styles.title, color: "#fff",fontWeight: "400"}}>Post a Job </Text>
          </View>
        </View>
      <View style={styles.screen}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{ marginTop: 30, marginBottom: 15, alignItems: "center",
        borderRadius: 20, borderWidth: 1, borderColor: "#c3c3c3",
        paddingVertical: 20,}}>
          
            
            <View style={{flexDirection: "column"}}>
                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Headline :</Text>
                <TextInput style={styles.input} placeholder="" />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Location :</Text>
                <TextInput style={styles.input} placeholder="" />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Services :</Text>
                <TextInput style={styles.input} placeholder="" />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Age range :</Text>
                <TextInput style={styles.input} placeholder="" />

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Project Scope :</Text>
                <View 
                style={{
                    borderColor: "#c3c3c3",
                    borderWidth: 1,
                    borderRadius: 10
                }}>
                    <Picker
                    selectedValue={state.searches}
                    onValueChange={(
                        itemValue, itemPosition
                    ) => setState({
                        searches: itemValue,
                        choosenIndex: itemPosition
                    })}
                    style={{height: 40, width: "100%",
                color: "#555"}}
                    >
                    <Picker.Item label="Small" value="Small" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="Large" value="Large" />
                    </Picker>
                </View>

                <View style={{
                marginTop: 15, flexDirection: "row",}}>
                    <View style={{flexDirection: "row"}}>
                    <CheckBox
                        style={{ borderColor: "#555" }}
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text style={{
                        paddingLeft: 5,
                        marginTop: 7,
                        fontSize: 16,
                        color: "#555",
                        fontFamily: "sans-serif-light",
                    }}>Hourly Rate
                    </Text>
                    </View>

                    <View style={{flexDirection: "row",
                alignItems: "flex-start", marginLeft: 40}}>
                    <CheckBox
                        style={{ borderColor: "#555" }}
                        value={isSelected2}
                        onValueChange={setSelection2}
                    />
                    <Text style={{
                        paddingLeft: 5,
                        marginTop: 7,
                        fontSize: 16,
                        color: "#555",
                        fontFamily: "sans-serif-light",
                    }}>Fixed Rate
                    </Text>
                    </View>
                </View> 

                <View style={{flexDirection: "row"}}>
                    <TextInput style={{...styles.input, width: 140,
                    marginRight: 10}} placeholder="" />
                    <TextInput style={{...styles.input, width: 150}} placeholder="" />
                </View>  

                <Text style={{
                    paddingLeft: 5,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "#555",
                    fontFamily: "sans-serif-light",
                }}>Describe your job :</Text>  
                <TextInput multiline={true}
                numberOfLines={15}
                style={{...styles.input, height: 150,
                 textAlignVertical: "top"}} placeholder="" />     

               <View style={{alignItems: "flex-end"}}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        textAlign: "center",
                        backgroundColor: "#14a800",
                        width: 100,
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
                        Post job
                    </Text>
                    </TouchableOpacity>
               </View>

                
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

export default PostAJob;

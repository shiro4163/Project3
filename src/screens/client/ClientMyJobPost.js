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
  Picker
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import MyImage from "../../assets/images/Talent";

const ClientMyJobPost = ({ navigation }) => {
  const [state, setState] = React.useState({
    searches: "Services",
    choosenIndex: 0
  });


  return (
    <SafeAreaView style={styles.container}>
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
            />
          </TouchableOpacity>
          <View style={{alignItems: "flex-start", marginLeft: 58, marginTop: 5}}>
            <Text style={{...styles.title, color: "#fff", fontWeight: "400"}}>
                My Job Postings </Text>
          </View>
        </View>
      <View style={styles.screen}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{
            paddingHorizontal: 10,
            marginBottom: 20,
            marginTop: 20,
        }}>  
        <TextInput style={styles.input} placeholder="Search" />
        </View>  

        <View style={{borderRadius: 5, borderWidth: 1, borderColor: "#c3c3c3",
    paddingHorizontal: 10, paddingVertical: 10, marginTop: 10, marginBottom: 10}}>
            
            <View style={{flexDirection: "column"}}>
                <View style={{ flexDirection: "row",
              justifyContent: "space-between", marginBottom: 15}}>
                <View style={{width: 150}}>
                  <Text style={{...styles.title2 , color: "#14a800"}}>
                  Delivery Rider for my business</Text>
                  <Text style={{...styles.title2 , color: "#555"}}>
                  Pulilan Bulacan</Text>
                </View>
                  <View style={{flexDirection: "row", alignItems: "flex-end"}}>
                    <View>
                        <Text
                        style={{...styles.caption2, color: "#555", }}>
                        2 proposals</Text>
                    </View>

                    <View>
                    <Entypo name="dots-three-horizontal" size={24} color="#555" 
                    style={{marginLeft: 20}}/>
                    </View>
                    
                  
                  </View>
                </View>    

                <Text style={{...styles.caption2, color:"#000"}}>
                Deliver products of my food business around baliuag, candidate 
                    must be a hardworking person and always on time. 
                </Text>
               

                <View style={{flexDirection: "row", marginBottom: 5, marginTop: 5}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    width: 100,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: "#555",
                    marginRight: 10,
                    }}
                >
                    <Text
                    style={{
                        fontSize: 14,
                        color: "#555",
                    }}
                    >
                   Delivery Rider
                    </Text>
                </TouchableOpacity>
    
            </View> 
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Age Range - 20 to 30 years old
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Project Scope - Small
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Fixed Budget - posted 1 hour ago
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Budget Php 5,000
                </Text>

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
    fontSize: 22,
    marginTop: 3,
    fontWeight: "bold",
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

export default ClientMyJobPost;

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
  ScrollView
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import MyImage from "../../assets/images/Talent";

const CurrentJobs = ({ navigation }) => {
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
          <View style={{alignItems: "flex-start", marginLeft: 60, marginTop: 5}}>
            <Text style={{...styles.title, color: "#fff",fontWeight: "400"}}>My Current Jobs</Text>
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
        <Text style={{...styles.caption, justifyContent: "flex-end"}}>1 Current Jobs.</Text>
        </View>  


        <View style={{borderRadius: 20, borderWidth: 1, borderColor: "#c3c3c3",
    paddingHorizontal: 10, paddingVertical: 10, marginBottom: 10}}>
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
                <Image
                    style={{ width: 55, height: 55, marginTop: 10 }}
                    source={MyImage.img_1}
                    resizeMode="contain"
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                    
                    <Text style={styles.title2}>Client: 
                    <Text style={{fontWeight: "normal"}}>Bernadette Tabuloc</Text></Text>
                    <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>Service: </Text>Hair and Make up</Text>
                    <Text style={styles.caption2}>Pulilan Bulacan</Text>
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                        <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                        <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                        <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                        <FontAwesome5 name="star-half-alt" size={12} color="#14a800" />
                    </View>

                </View>

            </View>

            <View style={{flexDirection: "column", marginBottom: 15 }}>
                    
                <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>Project budget: </Text>Php 5000</Text>
                <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>Project address: </Text>Baliuag Bulacan</Text>
                <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>Start date: </Text>05-02-2021</Text>
                <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>End date: </Text>05-02-2021</Text>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                    <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                    <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                    <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                    <FontAwesome5 name="star-half-alt" size={12} color="#14a800" />
                </View>

            </View>

            <View style={{flexDirection: "column"}}>
                    
                <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>
                  Job Headline: </Text>Hair and Make Up for my wedding</Text>
                <Text style={styles.caption2}><Text style={{fontWeight: "bold"}}>Job Description: </Text>
                Ability to perform various types of hair and makeup services 
                and treatments. Experience as a stylist in a professional setting.
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
    paddingHorizontal: 10,
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
    fontWeight: "bold",
  },
  caption2: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default CurrentJobs;

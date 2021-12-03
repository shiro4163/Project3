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

const TalentMyProfile = ({ navigation }) => {
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
          <View style={{alignItems: "flex-start", marginLeft: 90, marginTop: 5}}>
            <Text style={{...styles.title, color: "#fff",fontWeight: "400"}}>My Profile</Text>
          </View>
        </View>
      <View style={styles.screen}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{ flexDirection: "row", marginTop: 25, marginBottom: 15 }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={MyImage.img_1}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <View style={{flexDirection: "row"}}>
                <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                <FontAwesome5 name="star-half-alt" size={16} color="#14a800" />
            </View>
            <Text style={styles.title}>Ranielle Registrado</Text>
            <Text style={styles.caption}>Pulilan Bulacan</Text>
            <Text style={styles.caption}>Freelancer</Text>
          </View>
        </View>

        <Text style={{
            paddingLeft: 5,
            marginBottom: 5,
            marginTop: 30,
            fontSize: 16,
            color: "#555",
            fontFamily: "sans-serif",
        }}>Previous appointments :</Text>    
        <TextInput style={styles.input} placeholder="Search" />


        <View style={{borderRadius: 20, borderWidth: 1, borderColor: "#c3c3c3",
    paddingHorizontal: 10, paddingVertical: 10, marginBottom: 30}}>
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
                <Image
                    style={{ width: 55, height: 55, marginTop: 10 }}
                    source={MyImage.img_1}
                    resizeMode="contain"
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                    
                    <Text style={styles.title2}>Client: <Text style={{fontWeight: "normal"}}>Bernadette Tabuloc</Text></Text>
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

            <View style={{flexDirection: "row", marginTop: 10}}>
                <View style={{width: "50%", height: 200}}>
                    <Image
                        style={{ width: "100%", height: "100%",
                    }}
                        source={MyImage.img_3}
                        resizeMode="cover"
                    />
                </View>
                <View style={{width: "50%", height: 200}}>
                    <Image
                        style={{ width: "100%", height: "100%"}}
                        source={MyImage.img_3}
                        resizeMode="cover"
                    />
                </View>
                
            </View>

            <Text style={{
                paddingLeft: 5,
                marginBottom: 5,
                marginTop: 20,
                fontSize: 16,
                color: "#555",
                fontFamily: "sans-serif",
            }}>Feedbacks :</Text>    

            <View style={{borderWidth: 1, borderColor: "#c3c3c3", padding: 10}}>
                
                    <Text style={{textDecorationStyle: "solid",
                     textDecorationLine: "underline",
                     textDecorationColor: "#c3c3c3"}}>
                         Feedback from Bernadette Tabuloc:</Text> 
                    <Text style={{...styles.caption2, color: "#555", lineHeight: 18, marginTop: 3}}>    
                     {" "} Ms. Ranielle Registrado is a nice person and good to work with. Very talented
                     and beautiful. </Text>
                    <View style={{flexDirection: "row", marginBottom: 10}}>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome5 name="star-half-alt" size={12} color="#14a800" />
                    </View>   

                    <Text style={{textDecorationStyle: "solid",
                     textDecorationLine: "underline",
                     textDecorationColor: "#c3c3c3"}}>
                         Feedback from Ranielle Registrado:</Text> 
                    <Text style={{...styles.caption2, color: "#555", lineHeight: 18, marginTop: 3}}>    
                     {" "} Ms. Bernadette Tabuloc is a nice person and good
                      to work with. Very talented
                     and also beautiful. </Text>
                    <View style={{flexDirection: "row"}}>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome name="star" size={14} color="#14a800" style={{marginRight: 5}}/>
                            <FontAwesome5 name="star-half-alt" size={12} color="#14a800" />
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

export default TalentMyProfile;


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
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import MyImage from "../../assets/images/Talent";

const ClientAllJobPost = ({ navigation }) => {
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
                All Job Postings</Text>
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
        <Text style={{...styles.caption, justifyContent: "flex-end"}}>10,000 Jobs found.</Text>
        </View>  

        <View style={{
            paddingHorizontal: 10,
            marginBottom: 5,
            flexDirection: "column",
        }}>  

          <View style={{justifyContent: "center"}}>
            <Text style={{...styles.caption, marginBottom: 3}}>Filter by :
            </Text>
            <View 
          style={{
            width: 160,
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
              style={{height: 40}}
            >
              <Picker.Item label="Services" value="Services" />
              <Picker.Item label="Project Scope" value="Project Scope" />
              <Picker.Item label="Budget" value="Budget" />
              <Picker.Item label="Location" value="Location" />
              <Picker.Item label="Age Range" value="Age Range" />
            </Picker>
          </View>
          
          </View>
          
          
        </View>
        
        <View style={{borderRadius: 5, borderWidth: 1, borderColor: "#c3c3c3",
    paddingHorizontal: 10, paddingVertical: 10, marginTop: 10}}>
            
            <View style={{flexDirection: "column"}}>
                <View style={{ width: 300, marginBottom: 7}}>
                  <Text style={{...styles.title2 , color: "#14a800"}}>Hair and Make Up for my wedding</Text>
                  <Text style={{...styles.title2 , color: "#555"}}>
                  Pulilan Bulacan</Text>
                </View>    

                <Text style={{...styles.caption2, color:"#000"}}>
                Ability to perform various types of hair and makeup services 
                and treatments. Experience as a stylist in a professional setting.
                </Text>
               

                <View style={{flexDirection: "row", marginBottom: 5, marginTop: 5}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    width: 140,
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
                    Hair and MakeUp
                    </Text>
                </TouchableOpacity>

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
                    Stylist
                    </Text>
                </TouchableOpacity>   
                
            </View> 
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Age Range - 20 to 27 years old
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Project Scope - Small
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Fixed Budget - posted 24 hour ago
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Budget Php 5,000
                </Text>

                <View style={{alignItems: "flex-end", marginTop: -30,
              paddingBottom: 20}}>
                  <Image
                      style={{ width: 55, height: 55, marginTop: 10,
                        marginRight: 30, }}
                      source={MyImage.img_1}
                      resizeMode="contain"
                  />
                  <Text style={{...styles.caption2, color: "#555",
              marginRight: 20,
              marginTop: 5,
              textDecorationStyle: "solid",
                     textDecorationLine: "underline",
                     textDecorationColor: "#c3c3c3"}}>
                    by: Bernadette Tabuloc
                  </Text>
                </View>

            </View>

        </View>
          
        <View style={{borderRadius: 5, borderWidth: 1, borderColor: "#c3c3c3",
    paddingHorizontal: 10, paddingVertical: 10, marginTop: 20}}>
            
            <View style={{flexDirection: "column"}}>
                <View style={{ width: 300, marginBottom: 7}}>
                  <Text style={{...styles.title2 , color: "#14a800"}}>Extra Mobile Dev for a project</Text>
                  <Text style={{...styles.title2 , color: "#555"}}>
                  Pulilan Bulacan</Text>
                </View>    

                <Text style={{...styles.caption2, color:"#000"}}>
                Im currently need 3 people who can work with me as a mobile developer.
                    This is a medium project, were going to make the apps user interface
                    only.
                </Text>
               
                <View style={{flexDirection: "row", marginBottom: 5, marginTop: 5}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    width: 140,
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
                    Mobile Developing
                    </Text>
                </TouchableOpacity>
    
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
                    Photographer
                    </Text>
                </TouchableOpacity>
    
                
            </View> 
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Age Range - 22 to 35 years old
                </Text>       
                
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Project Scope - Medium
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                   Fixed Budget - posted 6 hour ago
                </Text>
                <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Budget Php 10,000
                </Text>

                <View style={{alignItems: "flex-end", marginTop: -30,
              paddingBottom: 20}}>
                  <Image
                      style={{ width: 55, height: 55, marginTop: 10,
                        marginRight: 30, }}
                      source={MyImage.img_1}
                      resizeMode="contain"
                  />
                  <Text style={{...styles.caption2, color: "#555",
              marginRight: 20,
              marginTop: 5,
              textDecorationStyle: "solid",
                     textDecorationLine: "underline",
                     textDecorationColor: "#c3c3c3"}}>
                    by: Christian Obis
                  </Text>
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

export default ClientAllJobPost;

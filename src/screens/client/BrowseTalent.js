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

import MyImage from "../../assets/images/Talent";

const BrowseTalent = ({ navigation }) => {
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
          style={{ alignItems: "flex-start", marginLeft: 50, marginTop: 5 }}
        >
          <Text style={{ ...styles.title, color: "#fff", fontWeight: "400" }}>
            Browse Freelancers
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
            <Text style={{ ...styles.caption, justifyContent: "flex-end" }}>
              2,000 Freelancers found.
            </Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#c3c3c3",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
              <Image
                style={{ width: 55, height: 55, marginTop: 10 }}
                source={MyImage.img_1}
                resizeMode="contain"
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Text style={{ ...styles.title2, color: "#14a800" }}>
                Dylan Nate
                </Text>
                <Text style={styles.caption2}>Baliuag Bulacan</Text>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome5
                    name="star-half-alt"
                    size={12}
                    color="#14a800"
                  />
                </View>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "45%",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 40,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 8,
                  }}
                >
                  <FontAwesome name="heart-o" size={16} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 60,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Invite
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.caption2}>
              Im 25 years old and a hardworking person who can fully
                    handle your service needs.
              </Text>
              <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Age - 25 years old
                </Text>
              <Text style={{ ...styles.caption2, color: "#555", marginTop: 5 }}>
                Php70.00 /hr
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
                    Deliveries
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    width: 90,
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
                    Painter
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
                    Sabong Agent
                    </Text>
                </TouchableOpacity>
            </View> 
            
            </View>
          
          </View>

          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#c3c3c3",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
              <Image
                style={{ width: 55, height: 55, marginTop: 10 }}
                source={MyImage.img_1}
                resizeMode="contain"
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Text style={{ ...styles.title2, color: "#14a800" }}>
                Nora Tapsin
                </Text>
                <Text style={styles.caption2}>Baliuag Bulacan</Text>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome5
                    name="star-half-alt"
                    size={12}
                    color="#14a800"
                  />
                </View>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "45%",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 40,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 8,
                  }}
                >
                  <FontAwesome name="heart-o" size={16} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 60,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Invite
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.caption2}>
              Highly motivated individual with proven leadership
                 skills and 5 years of sales management experience,
                  looking for the position of Manager.
                   Bringing exceptional coaching and interpersonal
                    skills to inspire, and technical and business
                     skills to provide superior customer service.
              </Text>
              <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Age - 28 years old
                </Text>
              <Text style={{ ...styles.caption2, color: "#555", marginTop: 5 }}>
              Php380.00 /hr
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
                    Sales Management 
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    width: 120,
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
                    Manager
                    </Text>
                </TouchableOpacity>
    
            </View> 
            
            </View>
          </View>

          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#c3c3c3",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
              <Image
                style={{ width: 55, height: 55, marginTop: 10 }}
                source={MyImage.img_1}
                resizeMode="contain"
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Text style={{ ...styles.title2, color: "#14a800" }}>
                Jen Rafer
                </Text>
                <Text style={styles.caption2}>Baliuag Bulacan</Text>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome5
                    name="star-half-alt"
                    size={12}
                    color="#14a800"
                  />
                </View>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "45%",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 40,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 8,
                  }}
                >
                  <FontAwesome name="heart-o" size={16} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 60,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Invite
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.caption2}>
              Seeking an Events Manager position in Trace3 to utilize
                 5 years of experience creating a series of events 
                 and trade shows. Coming with a creative mind
                  and highly developed managerial and organizational
                   skills honed from practice to promote brand image of clients.
              </Text>
              <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Age - 22 years old
                </Text>
              <Text style={{ ...styles.caption2, color: "#555", marginTop: 5 }}>
              Php180.00 /hr
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
                    Event Manager
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    textAlign: "center",
                    backgroundColor: "#fff",
                    width: 130,
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
                    Interior Designer
                    </Text>
                </TouchableOpacity>
    
            </View> 
                  

            </View>
          </View>

          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#c3c3c3",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
              <Image
                style={{ width: 55, height: 55, marginTop: 10 }}
                source={MyImage.img_1}
                resizeMode="contain"
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Text style={{ ...styles.title2, color: "#14a800" }}>
                Xian Santos
                </Text>
                <Text style={styles.caption2}>Baliuag Bulacan</Text>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome
                    name="star"
                    size={14}
                    color="#14a800"
                    style={{ marginRight: 5 }}
                  />
                  <FontAwesome5
                    name="star-half-alt"
                    size={12}
                    color="#14a800"
                  />
                </View>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "45%",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 40,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 8,
                  }}
                >
                  <FontAwesome name="heart-o" size={16} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    backgroundColor: "#14a800",
                    width: 60,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    marginBottom: 7,
                    marginRight: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Invite
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.caption2}>
              Experienced tractor-trailer driver with clean driving
                 record and valid Class A CDL License,
                  seeking the position of a Fedex Truck Driver.
                   Coming with Current DOT Medical Card and
                    willingness to work a flexible schedule.
              </Text>
              <Text style={{...styles.caption2, color: "#555", marginTop: 5}}>
                    Age - 35 years old
                </Text>
              <Text style={{ ...styles.caption2, color: "#555", marginTop: 5 }}>
                Php130.00 /hr
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
                    Pro Trailer Driver
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

export default BrowseTalent;

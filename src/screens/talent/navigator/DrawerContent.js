import React from "react";
import {View, StyleSheet} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import MyImage from "../../../assets/images/Talent"


export function DrawerContent({navigation, props}){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                            <View style={{flexDirection: "row", marginTop: 5, marginBottom: 15}}>
                                <Avatar.Image
                                    source={MyImage.img_1}
                                    size={50}
                                />
                                <View style={{marginLeft: 15, flexDirection: "column"}}>
                                    <Title style={styles.title}>Ranielle Registrado</Title>
                                    <Caption style={styles.caption}>Freelancer</Caption>
                                </View>
                            </View>
                            
                            <View style={{height: 40, justifyContent: "center"}}>
                                <View style={{flexDirection: "row"}}>
                                    <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                                    <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                                    <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                                    <FontAwesome name="star" size={18} color="#14a800" style={{marginRight: 5}}/>
                                    <FontAwesome5 name="star-half-alt" size={16} color="#14a800" />
                                </View>
                                  
                                <Caption style={{...styles.caption, marginTop: 5}}>Rating</Caption>
                            </View>

                    </View>
                
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (
                                <MaterialCommunityIcons name="account-circle-outline" size={24} color="#555" />
                            )}
                            label="My Profile"
                            onPress={() => {navigation.navigate("TalentMyProfile")}}
                        />
                        
                        <DrawerItem 
                            icon={() => (
                                <Ionicons name="briefcase-outline" size={24} color="#555" />
                            )}
                            label="Jobs"
                            onPress={() => {navigation.navigate("Home")}}
                        />

                        <DrawerItem 
                            icon={() => (
                                <Ionicons name="md-people-circle-outline" size={24} color="#555" />
                            )}
                            label="Freelancers"
                            onPress={() => {navigation.navigate("BrowseTalent")}}
                        />

                        <DrawerItem 
                            icon={() => (
                                <AntDesign name="message1" size={24} color="#555" />
                            )}
                            label="Messages"
                            onPress={() => {navigation.navigate("TalentMessage")}}
                        />

                        <DrawerItem 
                            icon={() => (
                                <Ionicons name="notifications-outline" size={24} color="black" />
                            )}
                            label="Notifications"
                            onPress={() => {}}
                        />   

                        <DrawerItem 
                            icon={() => (
                                <Ionicons name="help" size={24} color="black" />
                            )}
                            label="Help"
                            onPress={() => {}}
                        />     

                        <DrawerItem 
                            icon={() => (
                                <Ionicons name="settings-outline" size={24} color="#555" />
                            )}
                            label="Settings"
                            onPress={() => {navigation.navigate("TalentSettings")}}
                        />      

                    </Drawer.Section>  

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={() => (
                        <SimpleLineIcons name="logout" size={24} color="#555" />
                    )}
                    label="Logout"
                    onPress={() => {navigation.navigate("LoadingScreen")}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection : {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})
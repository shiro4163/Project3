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
  CheckBox,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

import MyImage from "../assets/images/SignUp";

const SignUp = ({ navigation }) => {
  const [isSelected, setSelection] = React.useState(false);
  
  const options = {
    year: "4-digit",
    month:"2-digit",
    day:"2-digit"
  }

  // new Date().toLocaleDateString("en-US",options);

  const [date, setDate] = React.useState(new Date().toLocaleDateString("en-US",options)); 
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <KeyboardAvoidingView
      behavior={"height"}
     style={styles.container}>
      <ScrollView  style={styles.screen}>

        <View style={{marginTop: 50}}>

        <Text
          style={{
            paddingHorizontal: 20,
            textAlign: "center",
            fontSize: 24,
            color: "#555",
            fontFamily: "sans-serif-light",
          }}
        >
          Complete your account set up.
        </Text>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TextInput style={styles.input} placeholder="Work Email" />

          <TextInput style={styles.input} placeholder="First Name" />

          <TextInput style={styles.input} placeholder="Last Name" />

          <TextInput style={styles.input} placeholder="M.I" />

          <View style={{marginTop: 5, marginBottom: 5}}>


          <TextInput
            // value={date.toString()}
            style={styles.input}
            placeholder="Birthday"
          />

          {/* <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          {show && (
            <DateTimePicker
              value={date}
              mode={'default'}
              display="default"
              onChange={onChange}
            />
          )} */}

          {/* <DatePicker
            style={styles.datePickerStyle}
            value={date} 
            mode="date" 
            placeholder="Birthday"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            style={{ marginTop: 5, marginBottom: 5, width: 300, height: 40 }}
            customStyles={{
              dateIcon: {
                display: "none",
              },
              dateInput: {
                alignItems: "flex-start",
                ...styles.input,
              },
              placeholderText: {
                color: "#b7b7b7",
              },
            }}
            onDateChange={setDate}
          /> */}
          
          </View>

          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
          />

          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Confirm Password"
          />

          <View style={{ flexDirection: "row", paddingHorizontal: 45 }}>
            <CheckBox
              style={{ borderColor: "#555" }}
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={{ fontSize: 15 }}>
              Yes, I understand and agree to the
              <Text style={{ color: "#14a800" }}>Terms of Service</Text>,
              including the{" "}
              <Text style={{ color: "#14a800" }}>User Agreement </Text>
              and <Text style={{ color: "#14a800" }}>Privacy Policy.</Text>
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                textAlign: "center",
                backgroundColor: "#14a800",
                width: 300,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
              }}
              onPress={() => navigation.navigate("Verification")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{marginTop: 10, alignItems: "center"}}>
            <Text>or continue with</Text>
            <View style={{flexDirection: "row",marginTop: 10,}}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  textAlign: "center",
                  backgroundColor: "#fff",
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  borderColor: "#1d4354",
                  borderWidth: 1,
                  marginRight: 10
                }}
              >
                <Image
                  style={{height: 35, width: 35, borderRadius: 500}}
                  source={MyImage.google}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  textAlign: "center",
                  backgroundColor: "#fff",
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  borderColor: "#1d4354",
                  borderWidth: 1
                }}
              >
                <Image
                  style={{height: 38, width: 38, borderRadius: 500}}
                  source={MyImage.facebook}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              </View>
          
          </View>

        </View>


        </View>
      </ScrollView >
    </KeyboardAvoidingView>
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
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#c3c3c3",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16
  },

  datePickerStyle: {
    width: 200,
    marginTop: 30,
  },
});

export default SignUp;

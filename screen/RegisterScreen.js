import {
  Button,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Zocial } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 60 }}>
        <Image
          style={{ width: 150, height: 60 }}
          source={{
            uri: "https://laginza.com/uploads/originals/2022/11/3344-amazon-logo-rgb.jpg",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.TextStyle}>Sign Up account</Text>
        </View>

        <View
          style={{
            marginTop: 70,
            gap: 5,
            backgroundColor: "#D0D0D0",
            borderRadius: 5,
            paddingVertical: 5,
            width: 350,
            height: 70,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Zocial
              style={{ marginRight: 20 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput placeholder="Enter your Email" />
          </View>
        </View>

        <View
          style={{
            width: 350,
            height: 70,
            marginTop: 70,
            gap: 5,
            backgroundColor: "#D0D0D0",
            borderRadius: 5,
            paddingVertical: 5,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="onepassword"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
            <TextInput placeholder="Enter your Password" />
          </View>
        </View>

        <View
          style={{
            width: 350,
            height: 70,
            marginTop: 70,
            gap: 5,
            backgroundColor: "#D0D0D0",
            borderRadius: 5,
            paddingVertical: 5,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Octicons
              name="number"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
            <TextInput placeholder="enter your phone Number" />
          </View>
        </View>

        <View style={styles.ButtonStyle}>
          <Text>Sign Up</Text>
        </View>
        <Pressable onPress={() => navigator.navigate("Login")}>
          <Text style={{marginLeft:60, marginTop:30}}>Have an Account? Log in now</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },
  ButtonStyle: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "yellow",
    width: 150,
    height: 60,
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 100,
    fontSize: 30,
  },
  TextRow: {
    fontSize: 20,
    flexDirection: "row",
  },
});

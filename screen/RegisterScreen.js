import {
  Alert,
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
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleregister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8081/register", user)
      .then(
        (res) => (
          console.log(res),
          Alert.alert("register success"),
          setName(""),
          setEmail(""),
          setPassword("")
        )
      )
      .catch((error) => {
        Alert.alert("false", "try again late");
        console.log(error);
      });
  };

  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 60 }}>
        <Image
          style={{ width: 250, height: 100, resizeMode: 'contain' }}
          source={{
            uri: "https://www.logolynx.com/images/logolynx/a6/a671ef222a6e136f8fe7fd9cfc97e57b.png",
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
            <Ionicons name="person" size={24} color="black" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter your Username"
            />
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
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password"
            />
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
            <Entypo name="mail" size={24} color="black" />
            <TextInput
              value={email}
              placeholder="enter your  mail"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <Pressable style={styles.ButtonStyle} onPress={handleregister}>
          <Text>Register</Text>
        </Pressable>
        <Pressable onPress={() => navigator.navigate("Login")}>
          <Text style={{ marginLeft: 60, marginTop: 30 }}>
            Have an Account? Log in now
          </Text>
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
    backgroundColor: "#FF6633",
    //width: 150,
    height: 60,
    justifyContent: "center",
    borderRadius: 4,
    //marginLeft: 100,
    fontSize: 30,
  },
  TextRow: {
    fontSize: 20,
    flexDirection: "row",
  },
});

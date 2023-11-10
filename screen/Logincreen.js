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
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Logincreen = () => {
  const navigator = useNavigation();
  const datas = [
    { username: 'admin', password: '12345' },
    { username: 'admin1', password: '12345' },
    { username: 'admin2', password: '12345' },
    { username: 'admin3', password: '12345' }
  ]
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('12345')
  var error = ''
  const checkUserNamePassWord = (d, u, p) => {
    d.some((item, index) => {
      if (item.username === u && item.password === p) {
        navigator.navigate("main")
        error = ''
      } else {
        error = 'user not exist'
      }
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 60 }}>
        <Image
          style={{
            width: 100, height: 100, alignItems: 'center'
            , justifyContent: 'center'
          }}
          source={{
            uri: "https://www.logolynx.com/images/logolynx/a6/a671ef222a6e136f8fe7fd9cfc97e57b.png",
          }}
        />

        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            borderRadius: 100,
            alignItems: 'center'
            , justifyContent: 'center'
          }}
          source={{
            uri: "https://staticfvvn.s3-ap-southeast-1.amazonaws.com/fv4uploads/uploads/users/le/9ro/i3r/avatar/thumb_356987957833475.jpg",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.TextStyle}>Login to Your Account</Text>
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
            <TextInput placeholder="Enter your Email" value={username} onChangeText={setUsername
            } />
            <Text style={{ color: 'red', fontWeight: 'bold' }}>{error != null ? error : ''}</Text>
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
            <TextInput placeholder="Enter your Password" value={password} onChangeText={setPassword} />
          </View>
        </View>

        <View style={styles.TextRow}>
          <Text>Remember Me</Text>
          <Text
            style={{
              color: "blue",
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <Pressable onPress={() => checkUserNamePassWord(datas, username, password)}>
          <View style={styles.ButtonStyle}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Log In</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigator.navigate("RegisterScreen")}>
          <Text style={{ textAlign: 'center' }}>Don't have an account? sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Logincreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center'
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
    height: 60,
    justifyContent: "center",
    borderRadius: 4,
    marginVertical: 10,
  },
  TextRow: {
    fontSize: 20,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10
  },
});

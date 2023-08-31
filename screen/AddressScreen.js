import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AddressScreen = () => {
  const [landmark, setLandmark] = useState();
  const [name, setName] = useState();
  const [mobileNo, setmobileNo] = useState();
  const [stress, setStress] = useState();
  const [postalCode, setPostalCode] = useState();
  const navigate = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderTopWidth: 1,
          borderColor: "#aaa",
          marginTop: 40,
        }}
      >
        <Text>Name: </Text>
        <TextInput
          value={name}
          onChangeText={(e) => setName(e)}
          placeholder="Enter your Name"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderTopWidth: 1,
          borderColor: "#aaa",
          marginTop: 10,
        }}
      >
        <Text>LandMark: </Text>
        <TextInput
          value={landmark}
          onChangeText={(e) => setLandmark(e)}
          placeholder="Enter your landMark"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderTopWidth: 1,
          borderColor: "#aaa",
          marginTop: 10,
        }}
      >
        <Text>Phone: </Text>
        <TextInput
          value={mobileNo}
          onChangeText={(e) => setmobileNo(e)}
          placeholder="Enter your Phone Number"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderTopWidth: 1,
          borderColor: "#aaa",
          marginTop: 10,
        }}
      >
        <Text>Stress: </Text>
        <TextInput
          value={stress}
          onChangeText={(e) => setStress(e)}
          placeholder="Enter your stress"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderTopWidth: 1,
          borderColor: "#aaa",
          marginTop: 10,
        }}
      >
        <Text>PostalCode: </Text>
        <TextInput
          value={postalCode}
          onChangeText={(e) => setPostalCode(e)}
          placeholder="Enter your postalCode"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 20,
            backgroundColor: "#aaa",
            width: 140,
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>Đồng ý</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 20,
            backgroundColor: "#aaa",
            width: 140,
          }}
          onPress={() => navigate.goBack()}
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>Hủy</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});

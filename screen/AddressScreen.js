import {
  Dimensions,
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
      <View style={{ alignItems: 'center' }}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Thay Đổi Địa Chỉ Giao Hàng</Text></View>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderTopWidth: 1,
          borderColor: "#aaa",
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'

        }}
      >
        <Text style={{ fontSize: 15 }}>Name: </Text>
        <TextInput style={{
          width: Dimensions.get('window').width,
          height: 30,
          marginHorizontal: 5
        }}
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
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 15 }}>LandMark: </Text>
        <TextInput style={{
          width: Dimensions.get('window').width,
          height: 30,
          marginHorizontal: 5
        }}
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
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 15 }}>Phone: </Text>
        <TextInput style={{
          width: Dimensions.get('window').width,
          height: 30,
          marginHorizontal: 5
        }}
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
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 15 }}>Stress: </Text>
        <TextInput style={{
          width: Dimensions.get('window').width,
          height: 30,
          marginHorizontal: 5
        }}
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
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 15 }}>PostalCode: </Text>
        <TextInput style={{
          width: Dimensions.get('window').width,
          height: 30,
          marginHorizontal: 5
        }}
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
            borderRadius: 10,
            height: 50,
            justifyContent: 'center'
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", fontWeight: 'bold' }}>Đồng ý</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 20,
            backgroundColor: "#aaa",
            width: 140,
            height: 50,
            justifyContent: 'center'
          }}
          onPress={() => navigate.goBack()}
        >
          <Text style={{ fontSize: 20, textAlign: "center", fontWeight: 'bold' }}>Hủy</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});

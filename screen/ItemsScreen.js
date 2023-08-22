import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const ItemsScreen = () => {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const [num, setNum] = useState(0);
  const router = useRoute();
  const increaseNum = () => {
    setNum(num + 1);
  };
  const preNum = () => {
    setNum(num <= 0 ? num : num - 1);
  };
  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 33 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: "#00CED01",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#33FFFF",
          }}
        >
          <Pressable
            style={{
              flex: 1,
              height: 38,
              marginHorizontal: 7,
              backgroundColor: "#fff",
              gap: 10,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
            <TextInput
              // style={{ backgroundColor: "#fff" }}
              placeholder="Enter product you want"
            />
          </Pressable>
          <Ionicons name="ios-mic" size={24} color="black" />
        </View>

        <Pressable
          style={{
            backgroundColor: "#99FFFF",
            flexDirection: "row",
          }}
        >
          <Entypo style={styles.ml2} name="location" size={24} color="black" />
          <Text style={styles.ml2}>Nguyễn Văn Bảo - Phường 4 - Gò Vấp</Text>
          <MaterialIcons
            style={styles.ml2}
            name="keyboard-arrow-down"
            size={24}
            color="black"
          />
        </Pressable>
        <View>
          <Image
            style={{ height: 300, resizeMode: "contain" }}
            source={{ uri: router.params?.image }}
          />
          {/* Tên Sản Phẩm */}
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              Tên Sản Phẩm:
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 10 }}>
              {router.params?.namesp}
            </Text>
            <View style={{ flexDirection: "row" , marginLeft:25,borderWidth:1,padding:9,left:50}}>
              <Pressable onPress={preNum}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </Pressable>
              <Text style={{marginLeft:5,marginRight:5}}>{num}</Text>
              <Pressable onPress={increaseNum}>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>
            </View>
          </View>
          {/* Giá bản lẻ */}
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15, marginBottom: 1 }}>Giá bán Lẻ:</Text>
            {/* Gia ban  le */}
            <Text>{currencyFormat(router.params.price)}</Text>
          </View>
          <Text style={{ fontWeight: "bold", marginBottom: 1 }}>
            Thông Số Cơ Bản
          </Text>
          <View
            style={{
              borderTopWidth: 1,
            }}
          >
            <Text>Pin: {router.params.pin} </Text>
            <Text>Camera: {router.params.camera} </Text>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
          }}
        >
          <Text style={{ fontSize: 19 }}>{router.params.ItemsScreen} </Text>
          <Text>{router.params.manhinh} </Text>
        </View>

        <View
          style={{
            borderTopWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              backgroundColor: "#CD853F",
              fontWeight: "bold",
              color: "white",
              height: 60,
              textAlign: "center",
              borderRadius: 40,
              padding: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Buy It
          </Text>
          <Text
            style={{
              fontSize: 20,
              backgroundColor: "#CD853F",
              fontWeight: "bold",
              color: "white",
              height: 60,
              textAlign: "center",
              borderRadius: 40,
              padding: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Add To Cart{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({});

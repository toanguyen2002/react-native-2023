import {
  Dimensions,
  Image,
  ImageBackground,
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
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReduce";
const ItemsScreen = () => {
  const [num, setNum] = useState(0);
  const router = useRoute();
  const dispacth = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = (item) => {
    dispacth(addToCart(item));
    // console.log(item);
    console.log(router?.params.stock);
  };
  const { width } = Dimensions.get("window");
  return (
    <ScrollView style={{ marginTop: 33 }} showsVerticalScrollIndicator={false}>
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

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {router.params?.carouselImages?.map((item, index) => (
          <ImageBackground
            style={{ width, height: width }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                justifyContent: "space-between",
                padding: 20,
                flexDirection: "row",
              }}
            >
              {router.params?.offer ? (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {router.params?.offer}
                  </Text>
                </View>
              ) : null}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="share-social-outline" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 230,
                marginLeft: 20,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{ padding: 8 }}>
        {router.params.title ? <Text>{router.params?.title}</Text> : null}
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>price: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.price}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>Color: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.color}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>Size: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.size}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <AntDesign name="enviroment" size={24} color="black" />
        <Text style={{ fontWeight: "bold", color: "#33CCFF" }}>
          Nguyễn Văn Bảo - Phường 4 - Gò Vấp
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>Total: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.price}$</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        {router.params?.stock > 0 ? (
          <Text style={{ color: "#33FF33", fontWeight: "bold" }}>Còn Hàng</Text>
        ) : (
          <Text style={{ color: "#FF0000", fontWeight: "bold" }}>Hết Hàng</Text>
        )}
      </View>
      <Pressable
        style={{
          height: 50,
          backgroundColor: "#FFCC00",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
          marginVertical: 10,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>Buy Now</Text>
      </Pressable>
      <Pressable
        style={{
          height: 50,
          backgroundColor: "#FFCC00",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
          marginVertical: 10,
          padding: 10,
          borderRadius: 20,
        }}
        onPress={() => addItemToCart(router?.params)}
      >
        <Text style={{ color: "#fff" }}>Add To Cart</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({});

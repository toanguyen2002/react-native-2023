import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { downItem, upItem } from "../redux/CartReduce";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispath = useDispatch();
  const deCripItem = (item) => {
    dispath(downItem(item));
  };
  const upCountItem = (item) => {
    dispath(upItem(item));
  };
  const navigate = useNavigation();
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((value, preValue) => value + preValue, 0);
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView>
      {cart.map((item, index) => (
        <Pressable
          style={{ marginTop: 30, borderTopWidth: 1, borderColor: "#aaa" }}
          key={index}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 130, height: 130, resizeMode: "contain" }}
              source={{ uri: item?.thumbnail }}
            />
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 5,
              }}
            >
              <Text style={{ fontSize: 13 }}>Sản Phẩm: {item?.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Pressable
                  style={{ marginLeft: 20, marginRight: 20 }}
                  onPress={() => deCripItem(item)}
                >
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </Pressable>
                <Text>Số Lượng: {item?.quantity}</Text>
                <Pressable
                  style={{ marginLeft: 20, marginRight: 20 }}
                  onPress={() => upCountItem(item)}
                >
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
      <View style={{ marginTop: 40 }}>
        {cart.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 90,
            }}
          >
            <MaterialCommunityIcons
              name="cart-remove"
              size={240}
              color="black"
            />
            <Text style={{ fontSize: 11, fontWeight: "bold" }}>
              Giỏ Hàng Hiện Chưa Có Sản Phẩm Vui Lòng Mua Sản Phẩm.....
            </Text>
            <View
              style={{
                padding: 10,
                backgroundColor: "#0033FF",
                borderRadius: 30,
                marginVertical: 30,
              }}
            >
              <Pressable onPress={() => navigate.goBack()}>
                <Text style={{ color: "white" }}>Quay Lại Trang Chủ </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View>
            <Text>Tổng số tiền phải trả là: {total}$</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 10 }}>Địa Chỉ Giao Hàng: </Text>
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                  color: "#770000",
                  fontSize: 10,
                }}
              >
                Nguyễn Văn Bảo - Phường 4 - Gò Vấp
              </Text>
            </View>
            <View>
              <Pressable
                style={{
                  height: "70",
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 20,
                  padding: 20,
                  borderRadius: 30,
                  borderColor: "#770000",
                  borderWidth: 1,
                }}
              >
                <Text style={{ color: "#770000" }}>Thanh Toán Ngay</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPressIn={fadeIn}
                onPressOut={fadeOut}
                style={{
                  height: "5r0",
                  backgroundColor: "#20BCFA",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 0,
                  padding: 20,
                  borderRadius: 30,
                }}
              >
                {/* <Animated.View
              style={{
                opacity: animated,
                backgroundColor: "red",
                padding: 50,
                borderRadius: 20,
              }}
            ></Animated.View> */}
                <Text style={{ color: "white" }}>
                  Thay Đổi Địa Chỉ Giao Hàng
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

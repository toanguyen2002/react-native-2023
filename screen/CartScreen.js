import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  return cart.map((item, index) => (
    <View>
      <Text>{item.category}</Text>
      <Text>{item.category}</Text>
    </View>
  ));
};

export default CartScreen;

const styles = StyleSheet.create({});

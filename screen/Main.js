import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSCreen from "./HomeSCreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import CartScreen from "./CartScreen";
const Main = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const optionstabBar = (label, colorcpn, icon1, icon2) => {
    tabBarLabel: label;
    tabBarStyle: ({ color: "colorcpn" });
    tabBarIcon: ({ focused }) => (focused ? icon1 : icon2);
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarStyle: { color: "#0087E9" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color="black" />
            ) : (
              <Entypo name="home" size={24} color="black" />
            ),
        }}
        component={HomeSCreen}
        name="Home"
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-cart-outline" size={24} color="black" />
            ) : (
              <Ionicons name="ios-cart" size={24} color="black" />
            ),
        }}
        component={CartScreen}
        name="Cart"
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="search1" size={24} color="black" />
            ) : (
              <FontAwesome5 name="search" size={24} color="black" />
            ),
        }}
        component={SearchScreen}
        name="Search"
      />
      <Tab.Screen
        options={{
          tabBarLabel: "User",
          tabBarStyle: { color: "#334433" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-outline" size={24} color="black" />
            ) : (
              <Ionicons name="person" size={24} color="black" />
            ),
        }}
        component={ProfileScreen}
        name="User"
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});

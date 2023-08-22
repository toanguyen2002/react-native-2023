import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSCreen from "./HomeSCreen";
import ProfileScreen from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewsScreen from "./NewsScreen";
const Main = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
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
          tabBarLabel: "News",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={24}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                name="newspaper-variant"
                size={24}
                color="black"
              />
            ),
        }}
        component={NewsScreen}
        name="News"
      />
      {/* <Tab.Screen
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
      /> */}
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

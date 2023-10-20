import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logincreen from "../screen/Logincreen";
import RegisterScreen from "../screen/RegisterScreen";
import Main from "../screen/Main";
import ItemsScreen from "../screen/ItemsScreen";
import ItemNewScreen from "../screen/ItemNewScreen";
import CartScreen from "../screen/CartScreen";
import AddressScreen from "../screen/AddressScreen";

import StartScreen from "../screen/StartScreen";
import PayScreen from "../screen/PayScreen";
import Done from "../screen/Done";



const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "flip" }} >
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ animation: 'slide_from_bottom', gestureEnabled: false }}

        />
        <Stack.Screen
          name="Login"
          component={Logincreen}
          options={{ animation: 'slide_from_bottom', headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ animation: 'slide_from_bottom', headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="ItemsScreen"
          component={ItemsScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="ItemNewScreen"
          component={ItemNewScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="AddressScreen"
          component={AddressScreen}
          options={{ animation: 'flip', presentation: "modal", headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="payScreen"
          component={PayScreen}
          options={{ animation: 'flip', presentation: "modal", headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="done"
          component={Done}
          options={{ animation: 'flip', presentation: "modal", headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logincreen from "../screen/Logincreen";
import RegisterScreen from "../screen/RegisterScreen";
import Main from "../screen/Main";
import ItemsScreen from "../screen/ItemsScreen";
import ItemNewScreen from "../screen/ItemNewScreen";
import CartScreen from "../screen/CartScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Logincreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemsScreen"
          component={ItemsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemNewScreen"
          component={ItemNewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

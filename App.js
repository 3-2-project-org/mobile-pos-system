import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from "./src/navigations/TabNavigator";

import SalesHomeScreen from "./src/screens/HomeScreen";
import SalesScreen from "./src/screens/Sales/SalesScreen";
import StackNavigator from "./src/navigations/StackNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   
     <StackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

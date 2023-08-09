import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QrScanner from "./src/screens/QrScanner";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/SettingsScreen";
import ProductList from "./src/screens/ProductList";
import React, { useState } from 'react';

const Tab = createBottomTabNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      
        <Tab.Screen
          name="Home"
          options={{
            title: "HOME",
            unmountOnBlur: true,
            headerShown: false,
          }}
          component={HomeScreen}
        />
       
        <Tab.Screen
          name="SettingsScreen"
          options={{
            title: "SettingsScreen",
            unmountOnBlur: true,
            headerShown: false,
          }}
          component={SettingsScreen}
        />

        <Tab.Screen
          name="ProductList"
          options={{
            title: "PRODUCT LIST",
            unmountOnBlur: true,
            headerShown: false,
          }}
          component={ProductList}
        />

         <Tab.Screen
          name="QrScanner"
          options={{
            headerShown: false,
            title: "QrScanner",
          }}
          component={QrScanner}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
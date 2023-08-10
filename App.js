import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/SettingsScreen";
import ProductList from "./src/screens/ProductList";
import QrScanner from "./src/screens/QrScanner";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QRScanner" component={QrScanner} />
          <Stack.Screen name="ProductList" component={ProductList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

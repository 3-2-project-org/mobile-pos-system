import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../navigations/TabNavigator";
import SalesHomeScreen from "../screens/HomeScreen";
import SalesScreen from "../screens/Sales/SalesScreen";
import SalesQrScanScreen from "../screens/Sales/SalesQrScanScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }} // Hide header for TabNavigator screen
      />
      <Stack.Screen
        name="SalesHomeScreen"
        component={SalesHomeScreen}
        options={{ headerShown: false }} // Hide header for SalesHomeScreen screen
      />
      <Stack.Screen
        name="SalesScreen"
        component={SalesScreen}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />

      <Stack.Screen
        name="SalesQrScanScreen"
        component={SalesQrScanScreen}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

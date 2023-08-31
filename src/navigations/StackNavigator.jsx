import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../navigations/TabNavigator";
import SalesHomeScreen from "../screens/HomeScreen";
import SalesScreen from "../screens/Sales/SalesScreen";
import SalesQrScanScreen from "../screens/Sales/SalesQrScanScreen";
import SalesSummaryScreen from "../screens/Sales/SalesSummaryScreen";
import SalesThankScreen from "../screens/Sales/SalesThankScreen";
import SuperAdminInventoryOverview from "../screens/SuperAdminInventoryOverview/SuperAdminInventoryOverview";
import SuperAdminAnalyticsOverview from "../screens/SuperAdminAnalyticsOverview/SuperAdminAnalyticsOverview";
import AnalyticsScreen from "../screens/AnalyticsScreen";

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

      <Stack.Screen
        name="SalesSummaryScreen"
        component={SalesSummaryScreen}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />

      <Stack.Screen
        name="SalesThankScreen"
        component={SalesThankScreen}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />

      <Stack.Screen
        name="SuperAdminInventoryOverview"
        component={SuperAdminInventoryOverview}
        options={{ headerShown: false }} // Hide header for SalesHomeScreen screen
      />

      <Stack.Screen
        name="SuperAdminAnalyticsOverview"
        component={SuperAdminAnalyticsOverview}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AnalyticsScreen"
        component={AnalyticsScreen}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../navigations/TabNavigator";
import SalesHomeScreen from "../screens/HomeScreen";
import SalesScreen from "../screens/Sales/SalesScreen";
import SalesQrScanScreen from "../screens/Sales/SalesQrScanScreen";
import SalesSummaryScreen from "../screens/Sales/SalesSummaryScreen";
import SalesThankScreen from "../screens/Sales/SalesThankScreen";
import WelcomeScreen from "../screens/welcomeScreen/WelcomeScreen";
import Signup from "../screens/signup/Signup";
import Signin from "../screens/signin/Signin";
import FirstTImeLogin from "../screens/FirstTimeLogin/FirstTImeLogin";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={WelcomeScreen}
        options={{ headerShown: false }} // Hide header for SalesHomeScreen screen
      />
      <Stack.Screen
        name="SignUpPage"
        component={Signup}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />
      <Stack.Screen
        name="SigninPage"
        component={Signin}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />
      <Stack.Screen
        name="OTPPage"
        component={SalesSummaryScreen}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />
      <Stack.Screen
        name="FirstTimeSignInPage"
        component={FirstTImeLogin}
        options={{ headerShown: false }} // Hide header for SalesScreen screen
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;

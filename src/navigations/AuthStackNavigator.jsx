import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SalesSummaryScreen from "../screens/Sales/SalesSummaryScreen";
import WelcomeScreen from "../screens/welcomeScreen/WelcomeScreen";
import Signup from "../screens/signup/Signup";
import Signin from "../screens/signin/Signin";
import FirstTImeLogin from "../screens/FirstTimeLogin/FirstTImeLogin";
import StackNavigator from "./StackNavigator";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);
  return (
    <Stack.Navigator>
      {!isUserLoggedIn ? (
        <>
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
          <Stack.Screen
            name="HomeScreen"
            component={StackNavigator}
            options={{ headerShown: false }} // Hide header for SalesScreen screen
          />
        </>
      ) : (
        <Stack.Screen
          name="HomeScreen"
          component={StackNavigator}
          options={{ headerShown: false }} // Hide header for SalesScreen screen
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;

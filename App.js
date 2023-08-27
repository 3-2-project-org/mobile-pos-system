import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./src/navigations/StackNavigator";
import Layout from "./src/components/molecules/Layout";
import AuthStackNavigator from "./src/navigations/AuthStackNavigator";

const Stack = createStackNavigator();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true);
  return (
    <>
      {!isUserLoggedIn ? (
        <>
          <NavigationContainer>
            <AuthStackNavigator />
          </NavigationContainer>
        </>
      ) : (
        <NavigationContainer>
          <Layout>
            <StackNavigator />
          </Layout>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

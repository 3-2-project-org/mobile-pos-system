import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./src/navigations/StackNavigator";
import Layout from "./src/components/molecules/Layout";
import AuthStackNavigator from "./src/navigations/AuthStackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const Stack = createStackNavigator();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false); // Set to false by default

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isUserLoggedIn ? (
          <Layout>
            <StackNavigator />
          </Layout>
        ) : (
          <AuthStackNavigator />
        )}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

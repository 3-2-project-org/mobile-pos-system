import { View, Text } from "react-native";
import Layout from "../components/molecules/Layout";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <View
        style={{
          paddingHorizontal: 31,
        }}
      >
        <Text>UserProfileScreen</Text>
      </View>
    </>
  );
};

export default UserProfileScreen;

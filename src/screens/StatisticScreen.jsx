import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/molecules/Layout";

const StatisticScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <View style={{
        paddingHorizontal: 31,
      }}>
        <Text>StatisticScreen</Text>
      </View>
    </>
  );
};

export default StatisticScreen;

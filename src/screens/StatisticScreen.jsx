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
    <Layout>
      <View>
        <Text>StatisticScreen</Text>
      </View>
    </Layout>
  );
};

export default StatisticScreen;

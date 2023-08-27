import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MPSGreetings from "../components/molecules/MPSGreetings/MPSGreetings";
import SuperAdminAnalyticsView from "./SuperAdminAnalyticsView/SuperAdminAnalyticsView";

const StatisticScreen = () => {
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
          marginTop: 27,
        }}
      >
        <MPSGreetings />
        <SuperAdminAnalyticsView />
      </View>
    </>
  );
};

export default StatisticScreen;

import { View, Text } from "react-native";
import React from "react";
import SuperAdminAnalyticsOverviewFMI from "../../components/organisms/SuperAdminAnalyticsOverviewFMI/SuperAdminAnalyticsOverviewFMI";

const SuperAdminAnalyticsOverview = () => {
  return (
    <View
      style={{
        paddingHorizontal: 31,
        marginTop: 27,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        Analytics
      </Text>
      <SuperAdminAnalyticsOverviewFMI />
    </View>
  );
};

export default SuperAdminAnalyticsOverview;

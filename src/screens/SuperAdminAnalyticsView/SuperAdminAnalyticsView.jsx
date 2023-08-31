import { View, Text, ScrollView } from "react-native";
import React from "react";
import MPSGreetings from "../../components/molecules/MPSGreetings/MPSGreetings";
import MPSTodosContainer from "../../components/molecules/MPSTodosContainer/MPSTodosContainer";
import TouchableCard from "../../components/atoms/Card/Card";
import AnalyticsIcon from "../../assets/AnalyticsIcon";
import { useNavigation } from "@react-navigation/native";

const SuperAdminAnalyticsView = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            marginTop: 20,
          }}
        >
          Todos
        </Text>
        <MPSTodosContainer />
      </View>
      <TouchableCard
        cardTitle={"Analytics"}
        cardDescription={"Detailed analytics on your sales and stocks"}
        onPress={() => navigation.navigate("SuperAdminAnalyticsOverview")}
        icon={<AnalyticsIcon />}
      />
      <TouchableCard
        cardTitle={"Manage Employees"}
        cardDescription={"Manage employee records in your organization"}
        onPress={() => navigation.navigate("SalesScreen")}
        icon={<AnalyticsIcon />}
      />
      <TouchableCard
        cardTitle={"Inventory Overview"}
        cardDescription={"Manage inventory records in your organization"}
        onPress={() => navigation.navigate("SuperAdminInventoryOverview")}
        icon={<AnalyticsIcon />}
      />
    </ScrollView>
  );
};

export default SuperAdminAnalyticsView;

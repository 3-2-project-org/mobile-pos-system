import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TouchableCard from "../components/atoms/Card/Card";
import AnalyticsIcon from "../assets/Vector.svg";
import UsersIcon from "../assets/ic_baseline-people.svg";
import { BASIC_COLORS } from "../utils/constants/styles";
const StatisticScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 32,
            fontSize: 25,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Hey Fazid
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Good Morning!
        </Text>

        <Text
          style={{
            marginTop: 27,

            fontSize: 20,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Todos
        </Text>
        <TouchableCard
          cardTitle={"Analytics"}
          cardDescription={
            "Record all incoming stocks details in a efficient way here"
          }
          onPress={() => navigation.navigate("SalesScreen")}
          icon={<AnalyticsIcon />}
        />
        <TouchableCard
          cardTitle={"Inventory Overview"}
          cardDescription={"Manage employee records in your organization"}
          onPress={() => navigation.navigate("SalesScreen")}
          icon={<UsersIcon />}
        />
        <TouchableCard
          cardTitle={"Manage Employees"}
          cardDescription={"Manage employee records in your organization"}
          onPress={() => navigation.navigate("AnalyticsScreen")}
          icon={<UsersIcon />}
        />
        <Text
          style={{
            marginTop: 48,
            fontSize: 20,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Quick Analysis On Your Works
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            color: BASIC_COLORS.FONT_SECONDARY,
          }}
        >
          This section show how you performed during the last 7 days
        </Text>
      </View>
    </>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,

    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

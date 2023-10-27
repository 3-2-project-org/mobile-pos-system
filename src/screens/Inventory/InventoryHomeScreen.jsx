import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
const InventoryHomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
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
      <TouchableCard
        cardTitle={"View Inventory Status"}
        cardDescription={
          "View the status of all inventory available"
        }
        onPress={() => navigation.navigate("SuperAdminInventoryOverview")}
        icon={<CardIcon />}
      />

      <TouchableCard
        cardTitle={"Record New Item"}
        cardDescription={
          "Just arrived!!! Record the item here to keep track of it"
        }
        onPress={() => navigation.navigate("InventoryAddNewItem")}
        icon={<CardIcon />}
      />
      <TouchableCard
        cardTitle={"Manage Available Items"}
        cardDescription={
          "Get an detailed idea and manage all the available items in the stocks"
        }
        onPress={() => navigation.navigate("InventorySummaryScreen")}
        icon={<CardIcon />}
      />
    </View>
  );
};

export default InventoryHomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
});

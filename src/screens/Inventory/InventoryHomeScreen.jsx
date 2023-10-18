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
        cardTitle={"Manage incoming Stocks"}
        cardDescription={
          "Record all incoming stocks details in a efficient way here"
        }
        onPress={() => navigation.navigate("InventoryScreen")}
        icon={<CardIcon />}
      />

      <TouchableCard
        cardTitle={"Record new incoming item"}
        cardDescription={
          "Just arrived!!! Record the item here to keep track of it"
        }
        onPress={() => navigation.navigate("InventorySummaryScreen")}
        icon={<CardIcon />}
      />
      <TouchableCard
        cardTitle={"View all available items"}
        cardDescription={
          "Get an detailed idea about all the available items in the stocks"
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
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

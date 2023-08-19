import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/molecules/Layout";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
const SalesHomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Layout>
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
          cardTitle={"Make A Sale"}
          cardDescription={
            "Record all incoming stocks details in a efficient way here"
          }
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<CardIcon />}
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
    </Layout>
  );
};

export default SalesHomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

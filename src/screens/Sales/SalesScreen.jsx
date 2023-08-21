import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/molecules/Layout";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import ForwardArrow from "../../assets/ForwardArrow";
import MPSDoubleButton from "../../components/atoms/Button/DoubleButton";
import MPSButton from "../../components/atoms/Button/Button";

const SalesScreen = () => {
  const [value, setValue] = useState("");
  const onValueChange = (value) => {
    setValue(value);
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <MPSButton
            buttonType={"primary"}
            onPress={() => navigation.navigate("SalesQrScanScreen")}
            icon={<ForwardArrow />}
          />

          <Text
            style={{
              marginTop: 32,
              alignContent: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            OR
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Find By Item Code
          </Text>

          <Search
            placeholder={"Item code"}
            //  onChangeText={(text) => console.log(text)}
            onChangeText={onValueChange}
            value={value}
            icon={
              <Pressable onPress={() => alert("Search icon pressed")}>
                <Feather
                  name="search"
                  size={24}
                  color="#625D5D"
                  style={{ marginRight: 10 }}
                />
              </Pressable>
            }
          />

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
          <View style={styles.buttonContainer}>
            <MPSDoubleButton
              buttonType={"primary"}
              onPress={() => navigation.navigate("SalesSummaryScreen")}
              icon={<ForwardArrow />}
              style={styles.button}
            />
          </View>
        </View>
      </Layout>
    </>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

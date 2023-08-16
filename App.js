import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MPSButton from "./src/components/atoms/Button/Button";
import React, { useEffect, useState } from "react";
import ArrowForward from "./src/assets/arrow-forward.svg";
import Eye from "./src/assets/eye.svg";
import MPSInputField from "./src/components/atoms/MPSInputField/MPSInputField";
import ForwardArrow from "./src/assets/ForwardArrow";
import CardIcon from "./src/assets/material-symbols_inventory.svg";
import Layout from "./src/components/molecules/Layout";
import Search from "./src/components/atoms/Search/Search";
import TouchableCard from "./src/components/atoms/Card/Card";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [value, setValue] = useState("");
  const onValueChange = (value) => {
    setValue(value);
  };
  return (
    <Layout>
      <View style={styles.container}>
        <ArrowForward fill="red" />
        <MPSButton
          buttonType={"primary"}
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<ForwardArrow />}
        />

        <MPSInputField
          error={true}
          onChangeText={onValueChange}
          value={value}
          secureTextEntry={false}
          icon={
            <Pressable onPress={() => alert("Ss")}>
              <Eye />
            </Pressable>
          }
        />

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
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

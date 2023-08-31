import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import MPSButton from "../../components/atoms/Button/Button";

const InventoryScreen = () => {
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
      <View style={styles.container}>
        <MPSButton
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesQrScanScreen")}
          buttonStyle={{ marginTop: 30 }}
          buttonTitle={"Scan QR Code"}
        />

        <Text
          style={{
            marginTop: 32,
            paddingHorizontal: 150,
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
          cardTitle={"add tables here "}
          cardDescription={
            "Record all incoming stocks details in a efficient way here"
          }
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<CardIcon />}
        />

        <TouchableCard
          cardTitle={"add tables here "}
          cardDescription={
            "Record all incoming stocks details in a efficient way here"
          }
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<CardIcon />}
        />
        <View style={styles.buttonContainer}>
          <MPSButton
            buttonTitle={"View QR Code"}
            onPress={() => navigation.navigate("InventoryQrPrint")}
          />
          <MPSButton buttonTitle={"Add Item"} />
        </View>
      </View>
    </>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

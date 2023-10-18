import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";

const InventoryAddNewItem = () => {
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
          Add New Item
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Item Name{" "}
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
                Maliban Chocalate buiscuit
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Unit Price
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
                Rs 200.00 per gram/ unit
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>Discount</Text>
            </View>
            <View style={styles.column}>
              <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>N/A</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>Quantity</Text>
            </View>
            <View style={styles.column}>
              <Text
                style={{
                  backgroundColor: "#D8EFDD",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  width: 60,
                  borderRadius: 8,
                  color: BASIC_COLORS.FONT_SECONDARY,
                }}
              >
                100
              </Text>
            </View>
          </View>
        </View>

        <MPSButton
          icon={<QrIcon />}
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesQrScanScreen")}
          buttonTitle={"Scan QR Code"}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          OR
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

        <View style={{ marginTop: 30 }}>
          <MPSButton
            buttonTitle={"Ok"}
            onPress={() => navigation.navigate("InventoryAddNewItem")}
          />
        </View>
      </View>
    </>
  );
};

export default InventoryAddNewItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },

  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginTop: 13,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  column: {
    flex: 1,
  },
});

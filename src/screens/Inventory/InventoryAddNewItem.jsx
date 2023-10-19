import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
            fontSize: 24,
            marginTop: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Add New Item
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Item Name</Text>
            </View>
            <View style={styles.valueColumn}>
              <TextInput
                style={{
                  backgroundColor: "#D8EFDD",
                  paddingVertical: 2,
                  paddingHorizontal: 9,
                  width: 160,
                  borderRadius: 8,
                  color: BASIC_COLORS.FONT_SECONDARY,
                }}
                placeholder="Name"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Unit Price</Text>
            </View>
            <View style={styles.valueColumn}>
              <TextInput
                style={{
                  backgroundColor: "#D8EFDD",
                  paddingVertical: 2,
                  paddingHorizontal: 9,
                  width: 160,
                  borderRadius: 8,
                  color: BASIC_COLORS.FONT_SECONDARY,
                }}
                placeholder="Price"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Discount</Text>
            </View>
            <View style={styles.valueColumn}>
              <TextInput
                style={{
                  backgroundColor: "#D8EFDD",
                  paddingVertical: 2,
                  paddingHorizontal: 9,
                  width: 160,
                  borderRadius: 8,
                  color: BASIC_COLORS.FONT_SECONDARY,
                }}
                placeholder="N/A"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Quantity</Text>
            </View>
            <View style={styles.valueColumn}>
              <TextInput
                style={{
                  backgroundColor: "#D8EFDD",
                  paddingVertical: 2,
                  paddingHorizontal: 9,
                  width: 160,
                  borderRadius: 8,
                  color: BASIC_COLORS.FONT_SECONDARY,
                }}
                placeholder="Qty"
              />
            </View>
          </View>
        </View>

        <MPSButton
          icon={<QrIcon />}
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesQrScanScreen")}
          buttonTitle={"Scan QR Code"}
          buttonStyle={{ marginTop: 30, height: 67 }}
        />

        <Text
          style={{
            fontSize: 20,
            marginTop: 30,
            fontWeight: "bold",
            textAlign: "center",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          OR
        </Text>

        <View style={{ marginTop: 30 }}>
          <Search
            placeholder={"Item code"}
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
        </View>

        <View style={{ marginTop: 50 }}>
          <MPSButton
            buttonTitle={"Ok"}
            onPress={() => navigation.navigate("InventoryAddNewItem")}
            buttonStyle={{ height: 67 }}
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

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  labelColumn: {
    flex: 1,
    justifyContent: "flex-start",
  },
  valueColumn: {
    flex: 2,
  },
  labelText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
  },
  valueText: {
    color: BASIC_COLORS.FONT_SECONDARY,
    textAlign: "left",
  },
});

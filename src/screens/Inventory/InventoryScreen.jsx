import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";

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
          icon={<QrIcon />}
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesQrScanScreen")}
          buttonTitle={"Scan QR Code"}
          buttonStyle={{ height: 67 }}
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
          Add By Item Code
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

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Item Name</Text>
            </View>
            <View style={styles.valueColumn}>
              <Text style={styles.valueText}>Maliban Chocolate Biscuit</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Unit Price</Text>
            </View>
            <View style={styles.valueColumn}>
              <Text style={styles.valueText}>Rs 200.00 per gram/unit</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelColumn}>
              <Text style={styles.labelText}>Discount</Text>
            </View>
            <View style={styles.valueColumn}>
              <Text style={styles.valueText}>N/A</Text>
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
                  width: 60,
                  borderRadius: 8,
                  color: BASIC_COLORS.FONT_SECONDARY,
                }}
                placeholder="Qty"
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <MPSButton
            icon={<QrIcon />}
            buttonTitle={"View QR Code"}
            onPress={() => navigation.navigate("InventoryQrPrint")}
            buttonStyle={{ height: 67 }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <MPSButton
            buttonTitle={"Add Item"}
            onPress={() => navigation.navigate("SalesHomeScreen")}
            buttonStyle={{ height: 67 }}
          />
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

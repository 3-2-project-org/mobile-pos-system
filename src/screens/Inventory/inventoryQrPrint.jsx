import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";
import Printer from "../../assets/Printer";
const InventoryQrPrint = () => {
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
        Item QR Code
      </Text>
      <QrIcon />

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Item Name </Text>
          </View>
          <View style={styles.column}>
            <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
              Maliban Chocalate buiscuit
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Unit Price</Text>
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
        icon={<Printer />}
        buttonTitle={"Print   "}
        onPress={() => navigation.navigate("InventoryQrPrint")}
        buttonStyle={{ marginTop: 50, height:67 }}
          
      />
    </View>
  );
};

export default InventoryQrPrint;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
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

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { BASIC_COLORS } from "../../utils/constants/styles";

const CustomCard = ({ itemName, unitPrice, discount, onQuantityChange }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.labelColumn}>
          <Text style={styles.labelText}>Item Name</Text>
        </View>
        <View style={styles.valueColumn}>
          <Text style={styles.valueText}>{itemName}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.labelColumn}>
          <Text style={styles.labelText}>Unit Price</Text>
        </View>
        <View style={styles.valueColumn}>
          <Text style={styles.valueText}>{unitPrice}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.labelColumn}>
          <Text style={styles.labelText}>Discount</Text>
        </View>
        <View style={styles.valueColumn}>
          <Text style={styles.valueText}>{discount || "N/A"}</Text>
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
            onChangeText={onQuantityChange}
          />
        </View>
      </View>
    </View>
  );
};

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

export default CustomCard;

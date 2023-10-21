import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { BASIC_COLORS } from "../../utils/constants/styles";

const UsersCustomCard = ({
  Name,
  Email,
  Phone,
 
}) => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>
        Information
      </Text>
      <View style={styles.row}>
        <View style={styles.labelColumn}>
          <Text style={styles.labelText}>Name</Text>
        </View>
        <View style={styles.valueColumn}>
          <Text style={styles.valueText}>{Name}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.labelColumn}>
          <Text style={styles.labelText}>Email</Text>
        </View>
        <View style={styles.valueColumn}>
          <Text style={styles.valueText}>{Email}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.labelColumn}>
          <Text style={styles.labelText}>Phone</Text>
        </View>
        <View style={styles.valueColumn}>
          <Text style={styles.valueText}>{Phone || "N/A"}</Text>
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

export default UsersCustomCard;

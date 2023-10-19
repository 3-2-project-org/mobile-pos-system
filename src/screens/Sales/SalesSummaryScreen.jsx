import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";

const SalesSummaryScreen = () => {
  const [value, setValue] = useState("");
  const [discount, setDiscount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);

  const navigation = useNavigation();

  const datalist = [
    { itemName: "Araliya", quantity: 5, unitPrice: 200.0 },
    { itemName: "Cheeese", quantity: 6, unitPrice: 20.0 },
    { itemName: "Toffe", quantity: 6, unitPrice: 20.0 },
  ];

  const [itemsList, setItemsList] = useState(datalist);

  const calculateTotal = (itemsList) => {
    let total = 0;
    for (const item of itemsList) {
      total += item.quantity * item.unitPrice;
    }
    return total - discount;
  };

  const balance = calculateTotal(itemsList) - receivedAmount;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* Second Table - Items Added */}
          <View style={styles.card}>
            <Text
              style={{
                alignContent: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: BASIC_COLORS.FONT_PRIMARY,
              }}
            >
              Sales Summary
            </Text>

            <View style={{ marginTop: 13 }}>
              {itemsList.map((item, index) => (
                <View style={styles.row} key={index}>
                  <View style={styles.column}>
                    <Text style={styles.valueText}>{item.itemName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.valueText}>{item.quantity}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.valueText}>
                      Rs {item.unitPrice.toFixed(2)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ marginTop: 13 }}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.labelText}>Total</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.valueText}>
                    Rs. {calculateTotal(itemsList).toFixed(2)}
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.labelText}>Discount</Text>
                </View>
                <View style={styles.column}>
                  <TextInput
                    style={{
                      backgroundColor: "#D8EFDD",
                      paddingVertical: 2,
                      paddingHorizontal: 9,
                      width: 90,
                      borderRadius: 8,
                      color: BASIC_COLORS.FONT_SECONDARY,
                    }}
                    placeholder="Discount"
                    value={discount.toString()}
                    onChangeText={(text) => setDiscount(parseFloat(text) || 0)}
                  />
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.labelText}>Received Amount</Text>
                </View>
                <View style={styles.column}>
                  <TextInput
                    style={{
                      backgroundColor: "#D8EFDD",
                      paddingVertical: 2,
                      paddingHorizontal: 9,
                      width: 90,
                      borderRadius: 8,
                      color: BASIC_COLORS.FONT_SECONDARY,
                    }}
                    placeholder="Received Amount"
                    value={receivedAmount.toString()}
                    onChangeText={(text) =>
                      setReceivedAmount(parseFloat(text) || 0)
                    }
                  />
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <Text style={styles.labelText}>Balance</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={{ fontWeight: "bold" }}>
                      Rs {balance.toFixed(2)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 50 }}>
            <MPSButton
              buttonType={"primary"}
              onPress={() => navigation.navigate("SalesThankScreen")}
              buttonTitle={"Complete Transaction"}
            />
          </View>
        </View>
      </ScrollView>
    </>
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
    marginBottom: 10,
  },
  column: {
    flex: 1,
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  popup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});

export default SalesSummaryScreen;

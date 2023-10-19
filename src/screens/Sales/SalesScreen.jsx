import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import ForwardArrow from "../../assets/ForwardArrow";
import QrIcon from "../../assets/QrIcon";
import MPSDoubleButton from "../../components/atoms/Button/DoubleButton";
import MPSButton from "../../components/atoms/Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const SalesScreen = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const datalist = [
    { itemName: "Araliya", quantity: 5, unitPrice: 200.0 },
    { itemName: "Aralidfya", quantity: 6, unitPrice: 20.0 },
    { itemName: "Aralidfya", quantity: 6, unitPrice: 20.0 },
    // Add more items as needed
  ];

  const [itemsList, setItemsList] = useState(datalist);

  const calculateTotal = (itemsList) => {
    let total = 0;
    for (const item of itemsList) {
      total += item.quantity * item.unitPrice;
    }
    return total;
  };

  const onValueChange = (value) => {
    setValue(value);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView>
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
              textAlign: "center",
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
              marginBottom: 13,
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

          {/* Second Table - Items Added */}
          <View style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
              Items Added
            </Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.labelText}>Item Name</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.labelText}>Quantity</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.labelText}>Unit Price</Text>
              </View>
            </View>
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
          </View>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSDoubleButton
              buttonType={"primary"}
              style={styles.button}
              button1Title="Checkout"
              button2Title="Next Item"
              button1TitleStyle={{ color: BASIC_COLORS.PRIMARY, fontSize: 15 }}
              button2TitleStyle={{ color: BASIC_COLORS.WHITE, fontSize: 15 }}
              button1Style={{
                backgroundColor: "white",
                borderRadius: 10,
                height: 46,
                paddingHorizontal: "11%",
                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 3,
                flex: 1,
              }}
              button2Style={{
                backgroundColor: BASIC_COLORS.PRIMARY,
                borderRadius: 10,
                height: 46,
                paddingHorizontal: "11%",
                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 3,
                flex: 1,
              }}
              icon2={<ForwardArrow />}
              icon1={
                <MaterialCommunityIcons
                  name="cart-arrow-right"
                  size={24}
                  color="#0FA958"
                />
              }
              onPress2={() => navigation.navigate("SalesSummaryScreen")}
              onPress1={() => navigation.navigate("SalesSummaryScreen")}
              loading={false}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SalesScreen;

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

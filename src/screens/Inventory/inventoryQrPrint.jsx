import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";
import QRCode from "react-native-qrcode-svg"; // Import the QRCode component
import Printer from "../../assets/Printer";
const InventoryQrPrint = () => {
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
    <View style={styles.container}>
      <View>
        {/* Display the QR code */}
        <View style={styles.qrCodeContainer}>
          <QRCode
            value={JSON.stringify(value)} // Pass the serialized item details as the value
            size={200} // Set the size of the QR code
          />
        </View>
      </View>

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
            <Text style={styles.valueText}>N/A</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <MPSButton
          icon={<Printer />}
          buttonTitle={"Print QR   "}
          onPress={() => {
            navigation.navigate("InventoryQrPrint");
            ToastAndroid.show("There are no printers available.", ToastAndroid.SHORT);
          }}
          buttonStyle={{ marginTop: 50, height: 67 }}
        />
      </View>
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
  qrCodeContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

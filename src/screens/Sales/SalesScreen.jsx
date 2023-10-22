import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
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
import { axiosInstance } from "../../utils/common/api";
const SalesScreen = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const navigation = useNavigation();
  const [quantityInput, setQuantityInput] = useState("1");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleCardPress = (item) => {
    const quantity = parseInt(quantityInput, 10);
    if (!isNaN(quantity) && quantity > 0) {
      setSelectedProduct(item);
      const newItem = {
        itemName: item.name,
        quantity: quantity,
        unitPrice: item.price,
      };
      setItemsList([...itemsList, newItem]);
    }
  };

  // Calculate the total based on itemsList
  const calculateTotal = () => {
    let total = 0;
    for (const item of itemsList) {
      total += item.quantity * item.unitPrice;
    }
    return total;
  };

  // Data get from the backend
  useEffect(() => {
    axiosInstance
      .get("/product")
      .then((response) => {
        console.log("Data received:", response.data.data.data);
        setProducts(response.data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, []);

  // Search function
  const filterProducts = (products, searchQuery) => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const filteredProducts = filterProducts(products, searchQuery);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.touchableCard}
      onPress={() => handleCardPress(item)}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>

      <View style={{ marginTop: 10 }}>
        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Unit Price</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.valueText}>Rs{item.price.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Description</Text>
          </View>
          <View style={styles.valueColumn}>
            <Text style={styles.valueText}>{item.description}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Quantity</Text>
          </View>
          <View style={styles.valueColumn}>
            {/* Bind the TextInput value to the quantityInput state variable */}
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
              value={quantityInput}
              onChangeText={(text) => setQuantityInput(text)} // Update the quantity input value
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    setTotalValue(calculateTotal());
  }, [itemsList]);

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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              padding: 2,
              borderColor: "#ccc",
              borderRadius: 10,
              backgroundColor: "white",
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <TextInput
              placeholder="Search by name..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              style={{
                flex: 1,
                padding: 5,
                fontSize: 14,
                paddingLeft: 11,

                color: BASIC_COLORS.FONT_SECONDARY,
              }}
            />
          </View>

          <FlatList
            data={filteredProducts}
            renderItem={renderCard}
            keyExtractor={(item) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, width: "100%" }}
          />

          {selectedProduct && (
            <View style={styles.card}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}
              >
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
                    <Text style={styles.valueText}>{selectedProduct.name}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.valueText}>{item.quantity}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.valueText}>
                      Rs {selectedProduct.price.toFixed(2)}
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
          )}

          {/* Second Table - Items Added */}

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

        <View style={styles.container}></View>
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
  container: {
    flex: 1,
    padding: 20,
  },
  touchableCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    margin: 5,
    width: 300,
  },
  selectedProductContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
  },
});

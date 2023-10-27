import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { axiosInstance } from "../../utils/common/api";

const ScannedDataDisplay = ({ route }) => {
  const { scannedData } = route.params;

  const inputValue = scannedData.join("");
  //scanned data

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

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
      ToastAndroid.show("Item added successfully!", ToastAndroid.SHORT);
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
        console.log("Data received:");
        setProducts(response.data.data.data);
        setLoading(false);
        ToastAndroid.show("Data loaded successfully!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, []);

  // Search function
  // Search function
  const filterProducts = (products, searchQuery) => {
    return products.filter((product) => {
      // Check if the product name or scanned data includes the search query
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scannedData.some((scannedItem) =>
          scannedItem.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
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

  //create order function
  const handleCheckout = () => {
    const orderItems = itemsList.map((item) => ({
      productID: item.productID,
      quantity: item.quantity,
    }));

    const amount = calculateTotal();
    const order = {
      products: orderItems,
      amount: amount,
      sellerID: "653015bdf8e3d113b78d3be5",
      creationDate: new Date().toISOString(),
    };

    axiosInstance
      .post("/order/", order)
      .then((response) => {
        console.log("Order created successfully:", response.data);
        ToastAndroid.show("Order created successfully!", ToastAndroid.SHORT);
        navigation.navigate("SalesSummaryScreen");
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="verylarge" color={BASIC_COLORS.PRIMARY} />
        ) : (
          <View>
            <MPSButton
              icon={<QrIcon />}
              buttonType={"primary"}
              onPress={() => navigation.navigate("SalesQrScanScreen")}
              buttonTitle={"Scan QR Code"}
              buttonStyle={{ height: 67 }}
            />

            <Text
              style={{
                marginTop: 16,
                fontSize: 16,
                fontWeight: "bold",
                color: BASIC_COLORS.FONT_PRIMARY,
                marginBottom: 13,
              }}
            >
              Find Item Code
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
                value={searchQuery || inputValue}
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

            {/* <TextInput
              style={styles.inputField}
              placeholder="Enter scanned data"
              value={inputValue}
              onChangeText={(text) => setSearchQuery(text)}
            /> */}

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
                    <Text style={styles.valueText}></Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.valueText}>
                      Rs. {calculateTotal().toFixed(2)}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            <View
              style={{
                marginTop: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  alignContent: "center",
                  borderRadius: 10,
                  marginBottom: 20,
                  height: 45,
                  borderWidth: 3,
                  borderColor: BASIC_COLORS.PRIMARY,
                  flex: 1,
                  flexDirection: "row",
                }}
                onPress={handleCheckout}
              >
                <MaterialCommunityIcons
                  name="cart-arrow-right"
                  size={24}
                  color="#0FA958"
                />
                <Text
                  style={{
                    color: BASIC_COLORS.PRIMARY,
                    fontSize: 15,
                  }}
                >
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 21,
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

export default ScannedDataDisplay;

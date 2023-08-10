import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", qty: 26, price: 10 },
    { id: 2, name: "Product 2", qty: 14, price: 15 },
    { id: 3, name: "Product 2", qty: 14, price: 15 },
    { id: 4, name: "Product 2", qty: 14, price: 15 },
    { id: 5, name: "Product 2", qty: 14, price: 15 },
    { id: 6, name: "Product 2", qty: 14, price: 15 },
    { id: 7, name: "Product 2", qty: 14, price: 15 },
    { id: 8, name: "Product 2", qty: 14, price: 15 },
    { id: 9, name: "Product 2", qty: 14, price: 15 },
    // ... (other product data)
  ]);

  const getTotal = () => {
    return products.reduce((acc, product) => acc + product.price, 0);
  };

  const getTotalQty = () => {
    return products.reduce((acc, product) => acc + product.qty, 0);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowContainer}>
        <View>
          <Text>{item.id}</Text>
        </View>
        <View>
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>{item.qty}</Text>
        </View>
        <View>
          <Text>Rs{item.price}</Text>
        </View>
      </View>
    );
  };

  const generateBillSummary = () => {
    alert(`Total Bill: $${getTotal()}`);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Product Summary</Text>
          <Text style={styles.description}>Invoice Date: {currentDate}</Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.total}>Total: ${getTotal()}</Text>

          <Text style={styles.total}>Total: ${getTotal()}</Text>
          <Text style={styles.total}>Total Quantity: {getTotalQty()}</Text>
        </View>
      </View>

      <Button title="Complete transaction" onPress={generateBillSummary} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  invoiceDate: {
    fontSize: 16,
    textAlign: "right",
    marginBottom: 8,
  },
  productSummary: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#333",
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: "#333",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    margin: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#888888",
  },
});

export default ProductList;

import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", qty: 26, price: 10 },
    { id: 2, name: "Product 2", qty: 14, price: 15 },
    { id: 3, name: "Product 3", qty: 4, price: 20 },
    { id: 4, name: "Product 4", qty: 4, price: 20 },
    { id: 5, name: "Product 1", qty: 26, price: 10 },
    { id: 6, name: "Product 2", qty: 14, price: 15 },
    { id: 7, name: "Product 3", qty: 4, price: 20 },
    { id: 8, name: "Product 4", qty: 4, price: 20 },
    { id: 9, name: "Product 1", qty: 26, price: 10 },
    { id: 10, name: "Product 2", qty: 14, price: 15 },
    { id: 11, name: "Product 3", qty: 4, price: 20 },
    { id: 12, name: "Product 4", qty: 4, price: 20 },
    { id: 13, name: "Product 1", qty: 26, price: 10 },
    { id: 14, name: "Product 2", qty: 14, price: 15 },
    { id: 15, name: "Product 3", qty: 4, price: 20 },
    { id: 16, name: "Product 4", qty: 4, price: 20 },
    { id: 17, name: "Product 1", qty: 26, price: 10 },
    { id: 18, name: "Product 2", qty: 14, price: 15 },
    { id: 19, name: "Product 3", qty: 4, price: 20 },
    { id: 20, name: "Product 4", qty: 4, price: 20 },
  ]);

  const getTotal = () => {
    return products.reduce((acc, product) => acc + product.price, 0);
  };

  const getTotalQty = () => {
    return products.reduce((acc, product) => acc + product.qty, 0);
  };

  const renderItem = ({ item }) => {
    if (item.id === 1) {
      // Header row
      return (
        <View style={styles.headerContainer}>
          <View style={styles.cell}>
            <Text>Id</Text>
          </View>
          <View style={styles.cell}>
            <Text>Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>Quantity</Text>
          </View>
          <View style={styles.cell}>
            <Text>Price</Text>
          </View>
        </View>
      );
    } else {
      // Data rows
      return (
        <View style={styles.rowContainer}>
          <View style={styles.cell}>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.cell}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.cell}>
            <Text>{item.qty}</Text>
          </View>
          <View style={styles.cell}>
            <Text>${item.price}</Text>
          </View>
        </View>
      );
    }
  };

  const generateBillSummary = () => {
    alert(`Total Bill: $${getTotal()}`);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text style={styles.productSummary}>Product Summary</Text>
            <Text style={styles.invoiceDate}>Invoice Date: {currentDate}</Text>
            <View style={styles.tableContainer}>
              <View style={styles.headerContainer}>
                <View style={styles.cell}>
                  <Text>Id</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Name</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Quantity</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Price</Text>
                </View>
              </View>
            </View>
          </>
        )}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => (
          <>
            <Text style={styles.total}>Total: ${getTotal()}</Text>
            <Text style={styles.total}>Total Quantity: ${getTotalQty()}</Text>
            <Button
              title="Complete transaction"
              onPress={generateBillSummary}
            />
          </>
        )}
      />
    </View>
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
  tableContainer: {
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#333",
    paddingBottom: 4,
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
});

export default ProductList;

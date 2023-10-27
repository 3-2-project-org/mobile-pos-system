import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { axiosInstance } from "../../utils/common/api";
import { BASIC_COLORS } from "../../utils/constants/styles";

const InventorySummaryScreen = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
    .get("/product?limit=100")
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          Inventory Summary
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            {products &&
              products.length > 0 &&
              products.map((item) => (
                <View key={item._id} style={styles.card}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text>{item.description}</Text>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={styles.labelText}>Price:</Text>
                    </View>
                    <View style={styles.column}>
                      <Text style={styles.valueText}>Rs {item.price}</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={styles.labelText}>Total Stock:</Text>
                    </View>
                    <View style={styles.column}>
                      <Text style={styles.valueText}>{item.totalStock}</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={styles.labelText}>In Stock:</Text>
                    </View>
                    <View style={styles.column}>
                      <Text style={styles.valueText}>{item.inStock}</Text>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default InventorySummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    color: BASIC_COLORS.FONT_SECONDARY, // You need to define BASIC_COLORS.
    textAlign: "left",
  },
});

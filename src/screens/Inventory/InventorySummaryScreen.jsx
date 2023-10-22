import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { axiosInstance } from "../../utils/common/api";

const InventorySummaryScreen = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

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

  return (
    <View style={{ flex: 1, padding: 16 }}>
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
              <View key={item._id} style={{ marginBottom: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
                <Text>Price: ${item.price}</Text>
                <Text>Total Stock: {item.totalStock}</Text>
                <Text>In Stock: {item.inStock}</Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

export default InventorySummaryScreen;

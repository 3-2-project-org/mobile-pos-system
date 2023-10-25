import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import { axiosInstance } from "../../utils/common/api";

const SalesSummaryScreen = () => {
  const [value, setValue] = useState("");
  // ... (other state variables)

  const [lastOrder, setLastOrder] = useState(null); // State variable for the last order

  useEffect(() => {
    // Fetch orders from your API
    axiosInstance
      .get("/order/seller-orders/653015bdf8e3d113b78d3be5")
      .then((response) => {
        console.log("Data received:", response.data); // Log the data
        const orders = response.data.data;
        setOrders(orders);
        setLoading(false);
        ToastAndroid.show("Data loaded successfully!", ToastAndroid.SHORT);

        // Get the last order
        if (orders.length > 0) {
          const lastOrder = orders[orders.length - 1];
          setLastOrder(lastOrder);
        }
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, []);

  // ... (other code)

  return (
    <ScrollView>
      <View style={styles.container}>
        <MPSButton
          buttonTitle={"Display Orders Summary "}
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesFinalSummary")}
        />
        {/* ... (other code) */}
        <Text style={styles.labelText}>Order Details</Text>
        {lastOrder && (
          <FlatList
            data={[lastOrder]}
            renderItem={renderCard}
            keyExtractor={(item) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, width: "100%" }}
          />
        )}
        {/* ... (other code) */}
      </View>
    </ScrollView>
  );
};

// ... (other styles and export)

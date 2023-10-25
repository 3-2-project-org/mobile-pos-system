import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import { axiosInstance } from "../../utils/common/api";

const SalesFinalSummary = () => {
  const [value, setValue] = useState("");
  const [discount, setDiscount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/order/seller-orders/653015bdf8e3d113b78d3be5")
      .then((response) => {
        console.log("Data received:", response.data);
        setOrders(response.data.data);
        setLoading(false);
        ToastAndroid.show("Data loaded successfully!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, []);

  const renderCard = (item) => {
    console.log("Rendering card for item:", item);
    
    return (
      <View style={styles.orderCard} key={item._id}>
        <Text>Order Date: {item._id}</Text>
        <Text>Total: Rs. {item.total.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            orders.map((order) => renderCard(order))
          )}
        </View>
      </View>
    </ScrollView>
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
  orderCard: {
    padding: 10,
    marginBottom: 10,
  },
});

export default SalesFinalSummary;

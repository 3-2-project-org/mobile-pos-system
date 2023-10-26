import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { axiosInstance } from "../../utils/common/api";

const ToastMessage = ({ message, duration }) => {
  useEffect(() => {
    if (message) {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  }, [message]);

  return null;
};

const SalesFinalSummary = () => {
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
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
        setToastMessage("Data loaded successfully!");
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
        setToastMessage("Error loading data. Please try again.");
      });
  }, []);

  const renderCard = (item) => {
    console.log("Rendering card for item:", item);

    return (
      <View style={styles.orderCard} key={item._id}>
        <Text>
          <Text style={{ fontWeight: "bold" }}> Date : </Text>
          {item._id}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}> Day Total : </Text>Rs.
          {item.total.toFixed(2)}
        </Text>
      </View>
    );
  };

  const finalTotal = orders.reduce((total, order) => total + order.total, 0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Daily Sales Summary</Text>
          {loading ? (
            <ActivityIndicator size="large" color={BASIC_COLORS.PRIMARY} />
          ) : (
            orders.map((order) => renderCard(order))
          )}
       
        </View>
      </View>
      <ToastMessage message={toastMessage} />

     
          <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Total</Text>
          <Text style={styles.finalTotal}>
            Rs. {finalTotal.toFixed(2)}
          </Text>
     
       
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
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: BASIC_COLORS.FONT_PRIMARY,
    marginBottom: 10,
  },
  finalTotal: {
    fontSize: 20,
    color: BASIC_COLORS.FONT_PRIMARY,
    marginTop: 10,

  
  },
});

export default SalesFinalSummary;

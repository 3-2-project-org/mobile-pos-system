import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Input, PricingCard } from "react-native-elements";

const ProductCard = ({ item }) => {
  const { name, unitPrice, discount, quantity } = item;

  return (
    <Card containerStyle={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>
      <View style={styles.cardContent}>
        <Input
          label="Unit Price"
          value={`${unitPrice} USD`}
          editable={false}
          containerStyle={styles.fieldContainer}
        />
        <Input label="Discount" value={`${discount}%`} />
        <Input
          label="Quantity"
          value={quantity.toString()}
          editable={false}
          containerStyle={styles.fieldContainer}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    marginTop: 10,
  },
  fieldContainer: {
    marginBottom: 10,
  },
});

export default ProductCard;

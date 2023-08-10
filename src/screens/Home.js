import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [itemCode, setItemCode] = useState("");
  const [itemList, setItemList] = useState([]);
  const navigation = useNavigation();

  const addItem = () => {
    if (itemCode.trim() !== "") {
      setItemList([...itemList, itemCode]);
      setItemCode("");
    }
  };

  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button
        title="Scan QR Code"
        onPress={() => navigation.navigate("QRScanner")}
      />

      <View>
        <Text style={{ textAlign: "center", marginVertical: 10 }}>OR</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <View style={{ borderBottomWidth: 1, flex: 1, marginRight: 10 }}>
          <TextInput
            placeholder="Enter item code"
            value={itemCode}
            onChangeText={(text) => setItemCode(text)}
          />
        </View>
        <Button title="Add" onPress={addItem} />
      </View>

      {itemList.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.title}>Item Title</Text>
          <Text style={styles.description}>Item Description</Text>
          <FlatList
            data={itemList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
      {itemList.length > 0 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Button title="Next" onPress={() => alert("Next button pressed")} />
          <Button
            title="Checkout"
            onPress={() => navigation.navigate("ProductList")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default HomeScreen;

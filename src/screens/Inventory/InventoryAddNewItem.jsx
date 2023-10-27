import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,ToastAndroid
} from "react-native";
import { axiosInstance } from "../../utils/common/api";
import { BASIC_COLORS } from "../../utils/constants/styles";
import Search from "../../components/atoms/Search/Search";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";
import { useNavigation } from "@react-navigation/native";
import  { useLayoutEffect } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    totalStock: 0,
    inStock: 0,
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handleSubmit = () => {
    axiosInstance
      .post("/product/", product)
      .then((response) => {
        console.log("Product added:", response.data);
        ToastAndroid.show("Product added successfully!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        ToastAndroid.show("Error adding product!", ToastAndroid.SHORT);
      });
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 24,
              marginTop: 20,
              textAlign: "center",
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Add New Item
          </Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Item Name</Text>
              </View>
              <View style={styles.valueColumn}>
                <TextInput
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 2,
                    paddingHorizontal: 9,
                    width: 160,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                  placeholder="Name"
                  value={product.name}
                  onChangeText={(text) =>
                    setProduct({ ...product, name: text })
                  }
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Description</Text>
              </View>

              <View style={styles.valueColumn}>
                <TextInput
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 2,
                    paddingHorizontal: 9,
                    width: 160,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                  placeholder="Description"
                  value={product.description}
                  onChangeText={(text) =>
                    setProduct({ ...product, description: text })
                  }
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Price</Text>
              </View>
              <View style={styles.valueColumn}>
                <TextInput
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 2,
                    paddingHorizontal: 9,
                    width: 160,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                  placeholder="Price"
                  value={product.price.toString()}
                  onChangeText={(text) =>
                    setProduct({ ...product, price: parseFloat(text) })
                  }
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Image url</Text>
              </View>
              <View style={styles.valueColumn}>
                <TextInput
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 2,
                    paddingHorizontal: 9,
                    width: 160,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                  placeholder="Image URL"
                  value={product.image}
                  onChangeText={(text) =>
                    setProduct({ ...product, image: text })
                  }
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Total Stock</Text>
              </View>
              <View style={styles.valueColumn}>
                <TextInput
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 2,
                    paddingHorizontal: 9,
                    width: 160,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                  placeholder="Total Stock"
                  value={product.totalStock.toString()}
                  onChangeText={(text) =>
                    setProduct({ ...product, totalStock: parseInt(text) })
                  }
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>In Stock</Text>
              </View>
              <View style={styles.valueColumn}>
                <TextInput
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 2,
                    paddingHorizontal: 9,
                    width: 160,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                  placeholder="In Stock"
                  value={product.inStock.toString()}
                  onChangeText={(text) =>
                    setProduct({ ...product, inStock: parseInt(text) })
                  }
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
          <MPSButton
            icon={<QrIcon />}
            buttonTitle={"Generate QR "}
            onPress={() => {
            navigation.navigate("InventoryQrPrint");
            ToastAndroid.show("Processing your QR", ToastAndroid.SHORT);
          }}
            buttonStyle={{ height: 67 }}
          />
        </View>

    

        

          <View style={{ marginTop: 50 }}>
            <MPSButton
              buttonTitle={"Add item"}
              onPress={handleSubmit}
              buttonStyle={{ height: 67 }}
            />
          </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  column: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
});

export default AddProductForm;

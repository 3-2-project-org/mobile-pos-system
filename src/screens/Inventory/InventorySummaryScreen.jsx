import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";

import { axiosInstance } from "../../utils/common/api";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { FontAwesome5 } from '@expo/vector-icons';

const InventorySummaryScreen = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newStockValue, setNewStockValue] = useState("");
  const productIdRef = useRef(null);

  useEffect(() => {
    axiosInstance.get("/product?limit=100")
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

  const handleDeleteProduct = (productId) => {
    // Make a DELETE request to your API to delete the product
    axiosInstance
      .delete(`/product/${productId}`)
      .then((response) => {
        console.log("Product deleted:", response.data);

        // Remove the deleted product from the local state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const toggleModal = (productId) => {
    productIdRef.current = productId;
    setIsModalVisible(!isModalVisible);
    setNewStockValue(""); // Clear the input field when opening the modal
  };

  const handleStockUpdate = () => {
    // Make a PATCH request to your API to update the product's stock
    axiosInstance
      .patch(`/product/${productIdRef.current}`, { totalStock: newStockValue })
      .then((response) => {
        console.log("Product stock updated:", response.data);

        // Update the local state with the new stock value
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === productIdRef.current
              ? { ...product, totalStock: newStockValue }
              : product
          )
        );

        // Close the modal
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.error("Error updating product stock:", error);
      });
  };

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
                  <View style={styles.row}>
                    <View style={styles.productInfo}>
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
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
                    <View style={styles.deleteIconContainer}>
                    <FontAwesome5 name="trash" size={30} color="white"  />
                      <FontAwesome5 name="trash" size={30} color="#bf0b2b" onPress={() => handleDeleteProduct(item._id)} />
                      <FontAwesome5 name="trash" size={30} color="white" />
                      <FontAwesome5 name="plus" size={30} color="green"   onPress={() => toggleModal(item._id)} />
                    </View>
                  </View>
                </View>
              ))}
          </View>
        )}
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Update Stock</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter new stock value"
              value={newStockValue}
              onChangeText={(text) => setNewStockValue(text)}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleStockUpdate}>
              <Text style={styles.modalButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

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
    flexDirection: "row",
    alignItems: "center",
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
    color: BASIC_COLORS.FONT_SECONDARY,
    textAlign: "left",
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  deleteIconContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  updateStockButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  updateStockButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#bf0b2b', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 18,
  },



});

export default InventorySummaryScreen;

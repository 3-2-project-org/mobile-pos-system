import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/molecules/Layout";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
const InventoryQrPrint = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 32,
          fontSize: 25,
          fontWeight: "bold",
          color: BASIC_COLORS.FONT_PRIMARY,
        }}
      >
     Item QR Code
      </Text>


      <MPSButton
          buttonTitle={"Print"}
          onPress={() => navigation.navigate("InventoryQrPrint")}
        />
 

    </View>
  );
};

export default InventoryQrPrint;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

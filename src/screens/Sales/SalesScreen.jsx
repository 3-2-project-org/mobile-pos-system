import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TouchableCard from "../../components/atoms/Card/Card";
import CardIcon from "../../assets/material-symbols_inventory.svg";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import ForwardArrow from "../../assets/ForwardArrow";
import QrIcon from "../../assets/QrIcon";
import MPSDoubleButton from "../../components/atoms/Button/DoubleButton";
import MPSButton from "../../components/atoms/Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
<<<<<<< HEAD
import QR from "../../assets/QR";
=======

>>>>>>> 65dbd5a9ba35ade7858b2948da1585bce6518320
const SalesScreen = () => {
  const [value, setValue] = useState("");
  const onValueChange = (value) => {
    setValue(value);
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <MPSButton
<<<<<<< HEAD
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesQrScanScreen")}
          buttonStyle={{ marginTop: 30 }}
          buttonTitle={"Scan QR Code"}
          icon={{QR}}
        

        />
=======
         icon={<QrIcon />}
          buttonType={"primary"}
          onPress={() => navigation.navigate("SalesQrScanScreen")}
         
          buttonTitle={"Scan QR Code"}
        />
        
>>>>>>> 65dbd5a9ba35ade7858b2948da1585bce6518320

        <Text
          style={{
            marginTop: 32,
<<<<<<< HEAD
            paddingHorizontal: 150,
            alignContent: "center",
=======
            marginLeft: 160,
>>>>>>> 65dbd5a9ba35ade7858b2948da1585bce6518320
            fontSize: 20,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          OR
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
<<<<<<< HEAD
=======
            marginBottom:13,
>>>>>>> 65dbd5a9ba35ade7858b2948da1585bce6518320
          }}
        >
          Find By Item Code
        </Text>

        <Search
          placeholder={"Item code"}
          //  onChangeText={(text) => console.log(text)}
          onChangeText={onValueChange}
          value={value}
          icon={
            <Pressable onPress={() => alert("Search icon pressed")}>
              <Feather
                name="search"
                size={24}
                color="#625D5D"
                style={{ marginRight: 10 }}
              />
            </Pressable>
          }
        />

        <TouchableCard
<<<<<<< HEAD
          cardTitle={"add tables here "}
=======
          cardTitle={"Make A Sale"}
>>>>>>> 65dbd5a9ba35ade7858b2948da1585bce6518320
          cardDescription={
            "Record all incoming stocks details in a efficient way here"
          }
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<CardIcon />}
        />

        <TouchableCard
<<<<<<< HEAD
          cardTitle={"add tables here "}
=======
          cardTitle={"Make A Sale"}
>>>>>>> 65dbd5a9ba35ade7858b2948da1585bce6518320
          cardDescription={
            "Record all incoming stocks details in a efficient way here"
          }
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<CardIcon />}
        />
        <View style={styles.buttonContainer}>
          <MPSDoubleButton
            buttonType={"primary"}
            style={styles.button}
            button1Title="Checkout"
            button2Title="Next Item"
            button1TitleStyle={{ color: BASIC_COLORS.PRIMARY, fontSize: 15 }}
            button2TitleStyle={{ color: BASIC_COLORS.WHITE, fontSize: 15 }}
            button1Style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",

              width: 165,
              alignContent: "center",
              borderRadius: 10,
              height: 46,
              borderColor: BASIC_COLORS.PRIMARY,
              borderWidth: 3,
            }}
            button2Style={{
              backgroundColor: BASIC_COLORS.PRIMARY,
              alignItems: "center",
              justifyContent: "center",
              width: 165,
              alignContent: "center",
              borderRadius: 10,
              height: 46,

              borderColor: BASIC_COLORS.PRIMARY,
              borderWidth: 3,
            }}
            icon2={<ForwardArrow />}
            icon1={
              <MaterialCommunityIcons
                name="cart-arrow-right"
                size={24}
                color="#0FA958"
              />
            }
            onPress2={() => navigation.navigate("SalesSummaryScreen")}
            onPress1={() => navigation.navigate("SalesSummaryScreen")}
            loading={false}
          />
        </View>
      </View>
    </>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

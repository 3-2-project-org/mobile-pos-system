import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import Search from "../../components/atoms/Search/Search";
import ForwardArrow from "../../assets/ForwardArrow";
import QrIcon from "../../assets/QrIcon";
import MPSDoubleButton from "../../components/atoms/Button/DoubleButton";
import MPSButton from "../../components/atoms/Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const dataList = [
  {
    code: "IT0001",
    itemName: "Ceylon Tea",
  },
  {
    code: "IT0002",
    itemName: "Maggee seasoning cube",
  },
  {
    code: "IT0003",
    itemName: "Maliban Chocalate Biscuit",
  },
  {
    code: "IT0004",
    itemName: "Manchee Chocalate Biscuit",
  },
];

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
      <ScrollView>
        <View style={styles.container}>
          <MPSButton
            icon={<QrIcon />}
            buttonType={"primary"}
            onPress={() => navigation.navigate("SalesQrScanScreen")}
            buttonTitle={"Scan QR Code"}
            buttonStyle={{ height: 67 }}
          />

          <Text
            style={{
              marginTop: 32,
              textAlign: "center",
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
              marginBottom: 13,
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

          <View style={styles.card}>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Item Name{" "}
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
                  Maliban Chocalate buiscuit
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Unit Price
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>
                  Rs 200.00 per gram/ unit
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Discount
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={{ color: BASIC_COLORS.FONT_SECONDARY }}>N/A</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Quantity
                </Text>
              </View>
              <View style={styles.column}>
                <Text
                  style={{
                    backgroundColor: "#D8EFDD",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    width: 60,
                    borderRadius: 8,
                    color: BASIC_COLORS.FONT_SECONDARY,
                  }}
                >
                  100
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: BASIC_COLORS.WHITE,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#D8EFDD",
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderTopEndRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <View style={styles.column}>
                <Text>Items Added</Text>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              {dataList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedItem(item.code);
                      setShowModal(true);
                    }}
                    style={{
                      backgroundColor: BASIC_COLORS.WHITE,
                      marginVertical: 3,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          color: BASIC_COLORS.FONT_SECONDARY,
                          flex: 1,
                        }}
                      >
                        {item.code}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          color: BASIC_COLORS.FONT_SECONDARY,
                          flex: 2,
                        }}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                      >
                        {item.itemName}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1.5,
                          alignItems: "center",
                        }}
                      ></View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={{ marginTop: 0 }}>
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

                width: 145,
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
                width: 145,
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
      </ScrollView>
    </>
  );
};

export default SalesScreen;

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
});

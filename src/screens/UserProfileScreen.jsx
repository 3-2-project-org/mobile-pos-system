import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import React, { useState } from "react";
import { BASIC_COLORS } from "../utils/constants/styles";
import MPSButton from "../components/atoms/Button/Button";
import { BottomSheet } from "@rneui/base";
import CloseIcon from "../assets/CloseIcon";
import { Pressable } from "react-native";
import MPSInputField from "../components/atoms/MPSInputField/MPSInputField";
import MPSDoubleButton from "../components/atoms/Button/DoubleButton";
import { AntDesign } from "@expo/vector-icons";

const dataList = [
  {
    code: "IT0001",
    itemName: "Ceylon Tea",
    unitPrice: "Rs 500.00",
    status: "inStock",
  },
  {
    code: "IT0002",
    itemName: "Maggee seasoning cube",
    unitPrice: "Rs 500.00",
    status: "refillState",
  },
  {
    code: "IT0003",
    itemName: "Maliban Chocalate Biscuit",
    unitPrice: "Rs 500.00",
    status: "outOfStock",
  },
  {
    code: "IT0004",
    itemName: "Manchee Chocalate Biscuit",
    unitPrice: "Rs 500.00",
    status: "inStock",
  },
];

const barData = [
  { value: 250, label: "Jan" },
  { value: 500, label: "Feb" },
  { value: 745, label: "Mar" },
  { value: 320, label: "Apr" },
  { value: 600, label: "May" },
  { value: 256, label: "Jun" },
  { value: 300, label: "Jul" },
  { value: 500, label: "Aug" },
  { value: 745, label: "Sep" },
  { value: 320, label: "Oct" },
  { value: 600, label: "Nov" },
  { value: 256, label: "Dec" },
];

const UserProfileScreen = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showModal, setShowModal] = useState(false);
  const props = {
    activeStrokeWidth: 15,
    inActiveStrokeWidth: 15,
    inActiveStrokeOpacity: 0.2,
    height: 10,
    width: 10,
  };
  return (
    <View
      style={{
        paddingHorizontal: 31,
        marginTop: 27,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        Inventory Overview
      </Text>

      <MPSButton
        buttonTitle={"Edit Information"}
        buttonType={"primary"}
        onPress={() => setShowModal(true)}
      />

      <BottomSheet
        isVisible={showModal}
        backdropStyle={{
          maxHeight: "75%",
          position: "absolute",
          bottom: 0,
        }}
        containerStyle={{
          backgroundColor: BASIC_COLORS.WHITE,
          maxHeight: "90%",
          minHeight: "90%",
          position: "absolute",
          width: "100%",
          justifyContent: "flex-end",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          bottom: 0,
          paddingVertical: 31,
          paddingHorizontal: 31,
        }}
      >
        <ScrollView>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius: 50,
                padding: 5,
              }}
            >
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              paddingVertical: 7,
              fontSize: 25,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Edit Information
          </Text>
          <MPSInputField
            inputLabel={"Username"}
            inputPlaceholder={"Username"}
            error={false}
          />
          <MPSInputField
            inputLabel={"Email"}
            inputPlaceholder={"email"}
            error={false}
          />
          <MPSInputField
            inputLabel={"Phone number"}
            inputPlaceholder={"phone"}
            error={false}
          />
          <MPSInputField
            inputLabel={"Password"}
            inputPlaceholder={"evFTbyVVCd"}
            error={false}
            secureTextEntry={true}
            icon={
              <Pressable onPress={() => alert("Search icon pressed")}>
                <AntDesign name="eyeo" size={21} color="black" />
              </Pressable>
            }
          />

          <MPSInputField
            inputLabel={"Confirm Password"}
            inputPlaceholder={"evFTbyVVCd"}
            error={false}
            secureTextEntry={true}
            icon={
              <Pressable onPress={() => alert("Search icon pressed")}>
                <AntDesign name="eyeo" size={21} color="#625D5D" />
              </Pressable>
            }
          />



<View
            style={{
              marginTop: 35,
            
            }}
          >
            <MPSDoubleButton
              buttonType={"primary"}
              style={styles.button}
              button1Title="Cancel"
              button2Title="Save"
              button1TitleStyle={{ color: BASIC_COLORS.PRIMARY, fontSize: 15 }}
              button2TitleStyle={{ color: BASIC_COLORS.WHITE, fontSize: 15 }}
              button1Style={{
                backgroundColor: "white",
                borderRadius: 10,
                height: 46,
                paddingHorizontal:"17%",
                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 3,
                flex: 1,
              }}
              button2Style={{
                backgroundColor: BASIC_COLORS.PRIMARY,
                borderRadius: 10,
                height: 46,
                paddingHorizontal:"18%",
                borderColor: BASIC_COLORS.PRIMARY,
                borderWidth: 3,
                flex: 1,
              }}
           
              onPress1={() => console.log("cancel Button pressed")}
              onPress2={() => console.log(" save Button pressed")}
              loading={false}
            />
          </View>







        
        </ScrollView>
      </BottomSheet>
    </View>
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
export default UserProfileScreen;

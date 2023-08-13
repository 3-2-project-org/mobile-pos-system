import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg"; // Import SvgUri
import { BASIC_COLORS } from "../../../utils/constants/styles";

const TouchableCard = ({ cardTitle, cardDescription, onPress, icon, }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          borderColor: BASIC_COLORS.PRIMARY,
          borderWidth: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        {/* SVG import and usage */}
        <SvgUri
          width={24}
          height={24}
          uri={require("../../../assets/material-symbols_inventory.svg")} // Adjust the path to your SVG file
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{cardTitle}</Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            color: BASIC_COLORS.DESCRIPTION,
          }}
        >
          {cardDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TouchableCard;




{/* <TouchableCard
cardTitle="Make A Sale"
cardDescription="Record all incoming stocks details in a efficient way here"
buttonTitle="Click Me"
buttonType="primary"
onPress={() => {
  // Handle button press
}}
/> */}
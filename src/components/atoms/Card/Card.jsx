import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const TouchableCard = ({ cardTitle, cardDescription, onPress, icon }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            elevation: 5,
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
            shadowOpacity: 0,
            shadowRadius: 0,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            {cardTitle}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              color: BASIC_COLORS.DESCRIPTION,
            }}
          >
            {cardDescription}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {icon}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default TouchableCard;

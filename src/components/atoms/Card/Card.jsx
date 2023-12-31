import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const TouchableCard = ({ cardTitle, cardDescription, onPress, icon }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View
          style={{
            marginTop: 21,
            backgroundColor: "white",
            padding: 18,
            borderRadius: 10,
            borderColor: BASIC_COLORS.PRIMARY,
            borderWidth: 1,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginRight: 10,
              }}
            >
              {icon}
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: BASIC_COLORS.FONT_PRIMARY,
              }}
            >
              {cardTitle}
            </Text>
          </View>

          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              color: BASIC_COLORS.FONT_SECONDARY,
            }}
          >
            {cardDescription}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default TouchableCard;

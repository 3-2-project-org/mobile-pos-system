import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const Search = ({ placeholder, onchange, icon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "white",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          padding: 5,
          fontSize: 14,
          paddingLeft: 11,
          color: BASIC_COLORS.FONT_SECONDARY,
        }}
        placeholder={placeholder}
        // onChangeText={onchange}
        onChangeText={(text) => console.log(text)}
      />
      {icon && icon}
    </View>
  );
};

export default Search;

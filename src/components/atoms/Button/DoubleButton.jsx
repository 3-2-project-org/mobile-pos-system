import { View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const MPSDoubleButton = ({
  buttonTitle,
  buttonType,
  onPress,
  loading,
  icon,
}) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 60 }}>
      <Button
         title="buttonTitle"
        titleStyle={{
          color: BASIC_COLORS.PRIMARY,
          fontSize: 15,
        }}
        buttonStyle={{
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
        iconPosition="right"
        icon={icon}
        iconRight={true}
        onPress={onPress}
        loading={loading}
      />

      <Button
      title="Cancel"
        titleStyle={{
          color:
            buttonType === "primary"
              ? BASIC_COLORS.WHITE
              : buttonType === "secondary"
              ? BASIC_COLORS.PRIMARY
              : BASIC_COLORS.ERROR,
          fontSize: 15,
        }}
        buttonStyle={{
          alignItems: "center",
          justifyContent: "center",
          width: 145,
          alignContent: "center",
          borderRadius: 10,
          marginRight: 10,
          height: 46,
          backgroundColor:
            buttonType === "primary"
              ? BASIC_COLORS.PRIMARY
              : buttonType === "secondary"
              ? "none"
              : "none",
          borderColor:
            buttonType === "error" ? BASIC_COLORS.ERROR : BASIC_COLORS.PRIMARY,
          borderWidth: 3,
        }}
        iconPosition="right"
        icon={icon}
        iconRight={true}
        onPress={onPress}
        loading={loading}
      />
    </View>
  );
};
export default MPSDoubleButton;

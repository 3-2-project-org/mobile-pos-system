import { View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const MPSDoubleButton = ({
  button1Title,
  button2Title,
  button1TitleStyle,
  button2TitleStyle,
  button1Style,
  button2Style,
  icon,
  onPress,
  loading,
}) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 60,  }}>
      <Button
        title={button1Title}
        titleStyle={button1TitleStyle}
        
        buttonStyle={{ ...button1Style}}
        iconPosition="right"
        icon={icon}
        iconRight={true}
        onPress={onPress}
        loading={loading}
      />

      <Button
        title={button2Title}
        titleStyle={button2TitleStyle}
     
        buttonStyle={{ ...button2Style, marginRight: 19 }}
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

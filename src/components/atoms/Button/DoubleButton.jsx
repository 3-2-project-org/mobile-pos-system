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
  icon1,
  icon2,
  onPress1,
  onPress2,
  loading,
}) => {
  return (
    <View style={{ flexDirection: "row"}}>
      <Button
        title={button1Title}
        titleStyle={button1TitleStyle}
        
        buttonStyle={{ ...button1Style}}
        iconPosition="right"
        icon={icon1}
        iconRight={true}
        onPress={onPress1}
        loading={loading}
      />

      <Button
        title={button2Title}
        titleStyle={button2TitleStyle}
     
        buttonStyle={{ ...button2Style, marginRight:9 }}
        iconPosition="right"
        icon={icon2}
        iconRight={true}
        onPress={onPress2}
        loading={loading}
      />
    </View>
  );
};
export default MPSDoubleButton;

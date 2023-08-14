import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";


const ForwardArrow = () => {
  return (
    <View>
      <Svg
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M7.35658 15.5837L5.72949 14.3264L13.2691 8.50033L5.72949 2.67428L7.35658 1.41699L16.5232 8.50033L7.35658 15.5837Z"
          fill="red"
        />
      </Svg>
    </View>
  );
};

export default ForwardArrow;

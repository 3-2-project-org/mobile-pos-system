import { View, Text } from "react-native";
import React from "react";

const MPSGreetings = () => {
  const greetings = () => {
    const time = new Date().getHours();
    if (time < 12) {
      return "Good Morning";
    }
    if (time < 18) {
      return "Good Afternoon";
    }
    return "Good Evening";
  };
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        Hey Fazid
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        {greetings()}!
      </Text>
    </View>
  );
};

export default MPSGreetings;

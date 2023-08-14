import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MPSButton from "./src/components/atoms/Button/Button";
import React, { useEffect, useState } from "react";
import ArrowForward from "./src/assets/arrow-forward.svg";
import Eye from "./src/assets/eye.svg";
import MPSInputField from "./src/components/atoms/MPSInputField/MPSInputField";
import ForwardArrow from "./src/assets/ForwardArrow";

export default function App() {
  const [value, setValue] = useState("");
  const onValueChange = (value) => {
    setValue(value);
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ArrowForward fill="red" />
        <MPSButton
          buttonType={"primary"}
          onPress={() => {
            alert("Hello");
          }}
          icon={<ForwardArrow />}
        />
        <MPSInputField
          error={true}
          onChangeText={onValueChange}
          value={value}
          secureTextEntry={true}
          icon={
            <Pressable onPress={() => alert("Ss")}>
              <Eye />
            </Pressable>
          }
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

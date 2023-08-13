import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MPSButton from "./src/components/atoms/Button/Button";
import React, { useEffect } from "react";
import ForwardArrow from "./src/assets/ForwardArrow";
import ArrowForward from "./src/assets/arrow-forward.svg"

export default function App() {
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
          icon={ArrowForward}
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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MPSButton from "./src/components/atoms/Button/Button";
import React, { useEffect } from "react";
import ForwardArrow from "./src/assets/ForwardArrow";
import ArrowForward from "./src/assets/arrow-forward.svg";
import Cards from "./src/components/atoms/Card/Card";
import TouchableCard from "./src/components/atoms/Card/Card";
import SQCButton from "./src/components/atoms/Button/ScanQRCode";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>

<SQCButton/>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

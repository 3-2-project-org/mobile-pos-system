import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import TouchableCard from "./src/components/atoms/Card/Card";
import MySvgComponent from "./src/assets/material-symbols_inventory.svg"; // Update the path accordingly
import Search from "./src/components/atoms/Search/Search";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <TouchableCard
          cardTitle="Make A Sale"
          cardDescription="Record all incoming stocks details in a efficient way here"
          buttonTitle="Click Me"
          buttonType="primary"
          onPress={() => {
            console.log("Card Clicked");
          }}
          icon={<MySvgComponent />}
        /> */}
      
        <Search/>
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

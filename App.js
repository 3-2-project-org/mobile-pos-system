import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from '@rneui/themed';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
              title={'React Native Elements'}
              containerStyle={{
                width: "100%",
                marginHorizontal: 50,
                marginVertical: 10,
                borderRadius: 10,
              }}
            />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

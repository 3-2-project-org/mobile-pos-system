// SalesQrScanScreen.js
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";
import { useNavigation } from "@react-navigation/native";

const SalesQrScanScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);


  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("ScannedDataDisplay", { scannedData: [data] });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to the camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
   
      />

      <View style={styles.buttonsContainer}>
        {scanned ? (
          <MPSButton
            icon={<QrIcon />}
            buttonType={"primary"}
            onPress={() => setScanned(false)}
            buttonTitle={"Tap to Scan Again"}
            buttonStyle={{ height: 67 }}
          />
        ) : (
          <MPSButton
            icon={<QrIcon />}
            buttonType={"primary"}
            onPress={() => setScanned(true)}
            buttonTitle={"Scan QR Code"}
            buttonStyle={{ height: 67 }}
          />
        )}
      </View>
    </View>
  );
};

export default SalesQrScanScreen;

const overlayColor = BASIC_COLORS.PRIMARY;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 31,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  // ... (Other styles remain the same)
});

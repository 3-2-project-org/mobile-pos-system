import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const SalesQrScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState(false);
  const [scannedData, setScannedData] = useState([]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData((prevData) => [...prevData, data]);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const toggleFlash = () => {
    setFlash(!flash);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
        //flashMode={flash ? BarCodeScanner.Constants.FlashMode.torch : BarCodeScanner.Constants.FlashMode.off}
      />
      <View style={styles.overlay}>
        <View style={styles.scanArea} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={toggleFlash} style={styles.button}>
          <Icon
            name={flash ? "flashlight-off" : "flashlight"}
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>
        {scanned ? (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Tap to Scan Again</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setScanned(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start Scanning</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={scannedData}
        renderItem={({ item }) => (
          <View style={styles.scannedDataContainer}>
            <Text style={styles.scannedDataText}>QR code: {item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SalesQrScanScreen;

const overlayColor = "rgba(0, 255, 0, 0.5)";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: overlayColor,
    backgroundColor: "transparent",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#44B038",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  scannedDataContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    alignItems: "center",
  },
  scannedDataText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

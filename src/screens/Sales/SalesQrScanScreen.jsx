import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { green } from "color-name";

const SalesQrScanScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState(false);
  const [scannedData, setScannedData] = useState([]);

  const togglePopup = (data) => {
    setSelectedData(data);
    setShowPopup(!showPopup);
  };

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
            <Text style={styles.buttonText}>Scan QR</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        onPress={() => togglePopup(scannedData)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Show Scanned Data</Text>
      </TouchableOpacity>

      <Modal
        visible={showPopup}
        animationType="slide"
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => setShowPopup(false)}
            style={styles.closeButton}
          >
            <Icon name="close" size={35} color={BASIC_COLORS.PRIMARY} />
          </TouchableOpacity>

          <View style={{ marginTop: 30, paddingLeft: 30 }}>
            <FlatList
              data={selectedData}
              renderItem={({ item }) => (
                <View style={styles.popupItem}>
                  <Text style={styles.popupItemText}>QR code: {item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 20,
  },

  camera: {
    flex: 1,
    marginTop: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 200,
    height: 200,
    borderWidth: 1.6,
    borderColor: overlayColor,
    backgroundColor: "transparent",
    marginBottom: 150,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  button: {
    backgroundColor: BASIC_COLORS.PRIMARY,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: BASIC_COLORS.WHITE,
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

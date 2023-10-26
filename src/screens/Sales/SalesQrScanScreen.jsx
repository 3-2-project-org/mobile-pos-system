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
import MPSButton from "../../components/atoms/Button/Button";
import QrIcon from "../../assets/QrIcon";
import { useNavigation } from "@react-navigation/native";

const SalesQrScanScreen = () => {
  const navigation = useNavigation();
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
    setScanned(false);
  }, [navigation]);
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

    navigation.navigate("ScannedDataDisplay", { scannedData: [data] });
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
        style={StyleSheet.absoluteFillObject}
        torchMode={flash ? "on" : "off"}
      />
      <View style={styles.overlay}>
        <View style={styles.scanArea} />
      </View>

      <TouchableOpacity
        onPress={() => togglePopup(scannedData)}
        style={[styles.button, { position: "absolute", top: 20 }]} // Adjust the button style
      >
        <Text style={styles.buttonText}>Show Scanned Data</Text>
      </TouchableOpacity>

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
    marginTop: 20,
    paddingHorizontal: 31,
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
    marginTop: 450,
  },
  button: {
    backgroundColor: BASIC_COLORS.PRIMARY,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
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

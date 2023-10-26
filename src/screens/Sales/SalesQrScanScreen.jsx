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
        onBarCodeScanned={handleBarCodeScanned}  // Remove the condition here
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.buttonsContainer}>
        <MPSButton
          icon={<QrIcon />}
          buttonType={"primary"}
          onPress={() => setScanned(false)} // Reset the scanned state to allow scanning again
          buttonTitle={"Tap to Scan Again"}
          buttonStyle={{ height: 67 }}
        />
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

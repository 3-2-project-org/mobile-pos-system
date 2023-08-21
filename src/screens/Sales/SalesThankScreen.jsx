import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/molecules/Layout";
import { BASIC_COLORS } from "../../utils/constants/styles";
import ForwardArrow from "../../assets/ForwardArrow";
import MPSButton from "../../components/atoms/Button/Button";

const SalesThankScreen = () => {
  const [value, setValue] = useState("");
  const onValueChange = (value) => {
    setValue(value);
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <Text
            style={{
              marginTop: 32,
              alignContent: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Thank you page
          </Text>
          <MPSButton
            buttonType={"primary"}
            onPress={() => navigation.navigate("SalesQrScanScreen")}
            icon={<ForwardArrow />}
          />
        </View>
      </Layout>
    </>
  );
};

export default SalesThankScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
});

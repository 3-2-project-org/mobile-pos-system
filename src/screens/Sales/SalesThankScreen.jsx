import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import email from "react-native-email";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";

const SalesThankScreen = () => {
  const [value, setValue] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const onValueChange = (value) => {
    setValue(value);
  };

  const onSendEmail = () => {
    const to = [emailAddress];
    email(to, {
      subject: "Invoice",
      body: "Here's your invoice:",
    }).catch(console.error);
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your order is confirmed</Text>
      <Text style={styles.subHeaderText}>Thank you for shopping with us</Text>
      <Text style={styles.invoiceText}>Send invoice</Text>

      <View style={styles.inputContainer}>
        <View>
          <MPSInputField
            inputLabel={""}
            errorMessage={false}
            inputPlaceholder={"Email"}
            onChangeText={(text) => setEmailAddress(text)}
          />
        </View>
        <View style={{marginLeft:7}}>
          <MPSButton
            buttonType={"primary"}
            onPress={onSendEmail}
            buttonStyle={{ width: 93 }}
            buttonTitle={"Send"}
          />
        </View>
      </View>

      <Image
        source={{ uri: "https://i.postimg.cc/fRmmKxqr/image-1.png" }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
  headerText: {
    marginTop: 32,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "bold",
    color: BASIC_COLORS.FONT_PRIMARY,
  },
  subHeaderText: {
    paddingHorizontal: 19,
    marginTop:10,
    fontSize: 18,
    color: BASIC_COLORS.FONT_PRIMARY,
  },
  invoiceText: {
    fontSize: 18,
    marginTop: 33,
    color: BASIC_COLORS.FONT_SECONDARY,
  },
  image: {
    width: 300,
    height: 400,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: 210,
  },
});

export default SalesThankScreen;

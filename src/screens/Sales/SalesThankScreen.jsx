import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import email from "react-native-email";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";

const SalesThankScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [emailError, setEmailError] = useState(null);

  const onSendEmail = () => {
    if (!validateEmail(emailAddress)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(null);
      const to = [emailAddress];
      email(to, {
        subject: "Invoice",
        body: "Here's your invoice:",
      }).catch(console.error);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

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
            value={emailAddress}
            onChangeText={(text) => {
              setEmailAddress(text);
              setEmailError(null);
            }}
          />
        </View>

        <View style={{ marginLeft: 7 }}>
          <MPSButton
            buttonType={"primary"}
            onPress={onSendEmail}
            buttonStyle={{ width: 93 }}
            buttonTitle={"Send"}
          />
        </View>
      </View>
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}
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
  errorText: {
    color: "red",
  },
  subHeaderText: {
    paddingHorizontal: 19,
    marginTop: 10,
    fontSize: 18,
    color: BASIC_COLORS.FONT_PRIMARY,
  },
  invoiceText: {
    fontSize: 18,
    marginTop: 33,
    color: BASIC_COLORS.FONT_SECONDARY,
  },
  image: {
    width: "100%",
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

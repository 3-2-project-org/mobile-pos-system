import { View, Text, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import email from "react-native-email"; // Import the email library
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";

const SalesThankScreen = () => {
  const [value, setValue] = useState("");
  const [emailAddress, setEmailAddress] = useState(""); // State to store the email address

  const onValueChange = (value) => {
    setValue(value);
  };

  const onSendEmail = () => {
    const to = [emailAddress]; // An array of recipient email addresses
    email(to, {
      subject: "Invoice", // Email subject
      body: "Here's your invoice:", // Email body
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
      <MPSInputField
        inputLabel={""}
        errorMessage={false}
        inputPlaceholder={"Email"}
        onChangeText={(text) => setEmailAddress(text)} // Update email address state
      />
      <MPSButton
        buttonType={"primary"}
        onPress={onSendEmail} // Call the email sending function
        buttonStyle={{ width: 103 }}
        buttonTitle={"Send"}
      />
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
    paddingHorizontal: 46,
    fontSize: 24,
    fontWeight: "bold",
    color: BASIC_COLORS.FONT_PRIMARY,
  },
  subHeaderText: {
    paddingHorizontal: 46,
    fontSize: 18,
    color: BASIC_COLORS.FONT_PRIMARY,
  },
  invoiceText: {
    fontSize: 18,

    marginTop:33,

 
    color: BASIC_COLORS.FONT_SECONDARY,
  },
  image: {
    width: "100%",
    height: 400,
  },
});

export default SalesThankScreen;

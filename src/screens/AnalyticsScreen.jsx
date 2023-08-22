import { useState } from "react";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MPSButton from "../components/atoms/Button/Button";
import MPSInputField from "../components/atoms/MPSInputField/MPSInputField";
import { BASIC_COLORS } from "../utils/constants/styles";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const AnalyticsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 32,
            fontSize: 24,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Employees
        </Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Titldsfdsfe</Text>
          <Text style={styles.cardTitle}>Titldsfdsfe</Text>
          <Text style={styles.cardTitle}>table here </Text>
          <Text style={styles.cardTitle}>Titldsfdsfe</Text>
          <Text style={styles.cardTitle}>Titldsfdsfe</Text>
        </View>

        <MPSButton
          buttonStyle={{
            marginTop: 11,
            alignItems: "center",
            justifyContent: "center",
            width: 165,
            alignContent: "center",
            borderRadius: 10,
            height: 46,
            borderColor: BASIC_COLORS.PRIMARY,
            borderWidth: 3,
          }}
          buttonTitle={" Add New Resource"}
          buttonType={"primary"}
          onPress={() => setIsVisible(true)}
        />

        <Text
          style={{
            marginTop: 48,
            fontSize: 20,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Employees Sales Performance
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            color: BASIC_COLORS.FONT_SECONDARY,
          }}
        >
          Overview of the employees sales performances over months
        </Text>
      </View>

      <BottomSheet
        isVisible={isVisible}
        backdropStyle={{}}
        containerStyle={{
          backgroundColor: BASIC_COLORS.WHITE,
          flexDirection: "row",
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 31,
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
          onPress={() => setIsVisible(false)}
        >
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            paddingVertical: 87,
            fontSize: 25,
            fontWeight: "bold",
            color: BASIC_COLORS.FONT_PRIMARY,
          }}
        >
          Add New Resources
        </Text>
        <MPSInputField
          inputLabel={"Username"}
          inputPlaceholder={"Username"}
          error={false}
        />
        <MPSInputField
          inputLabel={"Email"}
          inputPlaceholder={"email"}
          error={false}
        />
        <MPSInputField
          inputLabel={"Phone number"}
          inputPlaceholder={"phone"}
          error={false}
        />
        <MPSInputField
          inputLabel={"Password"}
          inputPlaceholder={"evFTbyVVCd"}
          error={false}
          secureTextEntry={true}
          icon={
            <Pressable onPress={() => alert("Search icon pressed")}>
              <AntDesign name="eyeo" size={21} color="black" />
            </Pressable>
          }
        />

        <MPSInputField
          inputLabel={"Confirm Password"}
          inputPlaceholder={"evFTbyVVCd"}
          error={false}
          secureTextEntry={true}
          icon={
            <Pressable onPress={() => alert("Search icon pressed")}>
              <AntDesign name="eyeo" size={21} color="#625D5D" />
            </Pressable>
          }
        />
        <MPSButton
          buttonTitle="Invite"
          button2TitleStyle={{ color: BASIC_COLORS.WHITE, fontSize: 15 }}
          onPress={() => console.log(" invite Button pressed")}
          loading={false}
        />
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
  profileIcon: {
    bottom: 17,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#333",
  },
  card: {
    marginTop: 36,

    width: 328,
    height: 200,

    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginTop: 20,
  },

  cardTitle: {
    color: "#000",

    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
  },
});

export default AnalyticsScreen;

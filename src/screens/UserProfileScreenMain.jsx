import Layout from "../components/molecules/Layout";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MPSButton from "../components/atoms/Button/Button";
import MPSInputField from "../components/atoms/MPSInputField/MPSInputField";
import MPSDoubleButton from "../components/atoms/Button/DoubleButton";
import { BASIC_COLORS } from "../utils/constants/styles";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
const UserProfileScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <Layout>
      <SafeAreaProvider>
        <View style={styles.container}>
          <View>
            <EvilIcons name="user" size={124} color="#0FA958" />
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Title</Text>
          </View>
        </View>

        <MPSButton
          buttonTitle={"Edit Information"}
          buttonType={"primary"}
          onPress={() => setIsVisible(true)}
        />

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
            Edit Information
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
          <MPSDoubleButton
            button1Title="Cancel"
            button2Title="Save"
            button1TitleStyle={{ color: BASIC_COLORS.PRIMARY, fontSize: 15 }}
            button2TitleStyle={{ color: BASIC_COLORS.WHITE, fontSize: 15 }}
            button1Style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",

              width: 165,
              alignContent: "center",
              borderRadius: 10,
              height: 46,
              borderColor: BASIC_COLORS.PRIMARY,
              borderWidth: 3,
            }}
            button2Style={{
              backgroundColor: BASIC_COLORS.PRIMARY,
              alignItems: "center",
              justifyContent: "center",
              width: 165,
              alignContent: "center",
              borderRadius: 10,
              height: 46,

              borderColor: BASIC_COLORS.PRIMARY,
              borderWidth: 3,
            }}
            onPress1={() => console.log(" cancel Button pressed")}
            onPress2={() => console.log(" save Button pressed")}
            loading={false}
          />
        </BottomSheet>
      </SafeAreaProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    bottom: 17,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#333",
  },
  card: {
    bottom: 15,
    width: 328,
    height: 200,
    flexShrink: 0,
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
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
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

export default UserProfileScreen;

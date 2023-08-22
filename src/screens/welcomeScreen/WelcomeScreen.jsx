import { View, Text } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSButton from "../../components/atoms/Button/Button";
import ForwardArrow from "../../assets/ForwardArrow";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: BASIC_COLORS.BACKGROUND,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 31,
        flexDirection: "column",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Hey user get your business process optimized with our solutions
        </Text>

        <MPSButton
            buttonType={"primary"}
            icon={<ForwardArrow />}
            buttonTitle={"Get Started"}
            buttonStyle={{
                marginTop: 22,
            }}
            onPress={() => navigation.navigate("SigninPage")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

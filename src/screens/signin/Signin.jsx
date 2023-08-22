import { View, Text, Pressable } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import { useNavigation } from "@react-navigation/native";
import MPSButton from "../../components/atoms/Button/Button";
import { useFormik } from "formik";
import { loginValidation } from "../../utils/common/validations";

const Signin = () => {
  const [firstTimeLogin, setFirstTimeLogin] = React.useState(true);
  const navigation = useNavigation();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = () => {
    alert(values);
    console.log("submit", values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginValidation,
    validateOnChange: false,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  return (
    <View
      style={{
        backgroundColor: BASIC_COLORS.BACKGROUND,
        height: "100%",
        display: "flex",
        paddingHorizontal: 31,
        flexDirection: "column",
        marginTop: 81,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        Signin
      </Text>

      <View
        style={{
          marginTop: 43,
        }}
      >
        <View>
          <MPSInputField
            inputLabel={"Email"}
            inputPlaceholder={"email"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            error={false}
            value={values.email}
            onChangeText={handleChange("email")}
          />
        </View>

        <View
          style={{
            marginTop: 18,
          }}
        >
          <MPSInputField
            inputLabel={"Password"}
            inputPlaceholder={"Password"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            error={false}
            value={values.password}
            onChangeText={handleChange("password")}
          />
        </View>

        <Pressable
          style={{
            marginTop: 18,
          }}
          onPress={() => navigation.navigate("SignUpPage")}
        >
          <Text
            style={{
              textAlign: "right",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Don't have an account? Signup
          </Text>
        </Pressable>

        <MPSButton 
            buttonType={"primary"}
            buttonTitle={"Sign in"}
            buttonStyle={{
                marginTop: 64,
                height: 52,
            }}
            buttonState={"submit"}
            onPress={() => firstTimeLogin ? navigation.navigate("FirstTimeSignInPage") : navigation.navigate("OTPPage")}
        />
      </View>
    </View>
  );
};

export default Signin;

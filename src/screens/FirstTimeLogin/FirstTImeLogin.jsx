import { View, Text, Pressable } from "react-native";
import React from "react";
import MPSButton from "../../components/atoms/Button/Button";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import { BASIC_COLORS } from "../../utils/constants/styles";
import { useFormik } from "formik";
import { changePasswordValidation } from "../../utils/common/validations";

const FirstTImeLogin = () => {
  const initialValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const onSubmit = () => {
    alert(values);
    console.log("submit", values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: changePasswordValidation,
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
        First time signin
      </Text>
      <Text
        style={{
          color: BASIC_COLORS.FONT_SECONDARY,
          fontSize: 16,
          letterSpacing: 1.5,
          marginTop: 6,
          lineHeight: 23,
        }}
      >
        Change your autogenerated password to continue
      </Text>

      <View
        style={{
          marginTop: 43,
        }}
      >
        <View>
          <MPSInputField
            inputLabel={"New Password"}
            inputPlaceholder={"New Password"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            errorMessage={errors.newPassword}
            error={errors.newPassword ? true : false}
            value={values.newPassword}
            secureTextEntry={true}
            onChangeText={handleChange("newPassword")}
          />
        </View>

        <View
          style={{
            marginTop: 18,
          }}
        >
          <MPSInputField
            inputLabel={"Confirm New Password"}
            inputPlaceholder={"Confirm New Password"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            error={errors.confirmNewPassword ? true : false}
            errorMessage={errors.confirmNewPassword}
            secureTextEntry={true}
            value={values.confirmNewPassword}
            onChangeText={handleChange("confirmNewPassword")}
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
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default FirstTImeLogin;

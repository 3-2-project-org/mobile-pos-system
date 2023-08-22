import { View, Text, Pressable } from "react-native";
import CheckBox from "expo-checkbox";
import React from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import MPSButton from "../../components/atoms/Button/Button";
import ForwardArrow from "../../assets/ForwardArrow";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { registerValidation } from "../../utils/common/validations";

const Signup = () => {
  const navigation = useNavigation();

  const initialValues = {
    storeName: "",
    storeEmail: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const onSubmit = () => {
    alert(values);
    console.log("submit", values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: registerValidation,
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
        Signup
      </Text>

      <View
        style={{
          marginTop: 43,
        }}
      >
        <View>
          <MPSInputField
            inputLabel={"Store Name"}
            inputPlaceholder={"Username"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            error={errors.storeName ? true : false}
            errorMessage={errors.storeName}
            value={values.storeName}
            onChangeText={handleChange("storeName")}
          />
        </View>

        <View
          style={{
            marginTop: 18,
          }}
        >
          <MPSInputField
            inputLabel={"Store email"}
            inputPlaceholder={"Password"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            error={errors.storeEmail ? true : false}
            errorMessage={errors.storeEmail}
            onChangeText={handleChange("storeEmail")}
            value={values.storeEmail}
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
            error={errors.password ? true : false}
            errorMessage={errors.password}
            onChangeText={handleChange("password")}
            value={values.password}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            marginTop: 18,
          }}
        >
          <MPSInputField
            inputLabel={"Confirm Password"}
            inputPlaceholder={"Password"}
            inputContainerStyle={{
              borderColor: "transparent",
            }}
            error={errors.confirmPassword ? true : false}
            errorMessage={errors.confirmPassword}
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            marginTop: 45,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <CheckBox value={true} color={BASIC_COLORS.PRIMARY} />
            <Text
              style={{
                marginStart: 10,
              }}
            >
              I agree to the terms and conditions
            </Text>
          </View>
          <View
            style={{
              marginTop: 17,
              flexDirection: "row",
            }}
          >
            <CheckBox value={values.termsAndConditions} color={BASIC_COLORS.PRIMARY} onChange={handleChange("termsAndConditions")} />
            <Text
              style={{
                marginStart: 10,
              }}
            >
              I agree to the terms and conditions
            </Text>
          </View>
        </View>

        <MPSButton
          buttonType={"primary"}
          buttonTitle={"Sign up"}
          buttonStyle={{
            marginTop: 64,
            height: 52,
          }}
          icon={<ForwardArrow />}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Signup;

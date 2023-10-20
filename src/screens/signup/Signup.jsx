import { View, Text, Pressable, ToastAndroid } from "react-native";
import CheckBox from "expo-checkbox";
import React from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import MPSButton from "../../components/atoms/Button/Button";
import ForwardArrow from "../../assets/ForwardArrow";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { registerValidation } from "../../utils/common/validations";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "../../utils/common/api";

const Signup = () => {
  const navigation = useNavigation();

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const initialValues = {
    storeName: "",
    storeEmail: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const onSubmit = async () => {
    await axiosInstance.post("/auth/register", {
      username: values.storeName,
      email: values.storeEmail,
      password: values.password,
      is_loggedIn: true,
      type: "admin"
    }).then((res) => {
      console.log(res.data.data.otherDetails.type);
      AsyncStorage.setItem("user", JSON.stringify(res.data.data.otherDetails));
      showToastWithGravityAndOffset("Registration successful")
      if (res.data.data.otherDetails.type === "admin") {
        navigation.navigate("SuperAdminAnalyticsOverview");
      } else if (res.data.data.otherDetails.type === "sales manager") {
        navigation.navigate("InventoryScreen");
      } else {
        navigation.navigate("EmployeesHomeScreen");
      }
      // navigation.navigate("SigninPage");
    }).catch((err) => {
      showToastWithGravityAndOffset("Registration failed")
    });
    // axios.post("http://192.168.8.147:3007/api/v1/auth/register", {
    //   username: values.storeName,
    //   email: values.storeEmail,
    //   password: values.password,
    //   is_loggedIn: true,
    //   type: "admin"
    // }).then((res) => {
    //   console.log(res.data.data.otherDetails.type);
    //   AsyncStorage.setItem("user", JSON.stringify(res.data.data.otherDetails));
    //   showToastWithGravityAndOffset("Registration successful")
    //   if (res.data.data.otherDetails.type === "admin") {
    //     navigation.navigate("SuperAdminAnalyticsOverview");
    //   } else if (res.data.data.otherDetails.type === "sales manager") {
    //     navigation.navigate("InventoryScreen");
    //   } else {
    //     navigation.navigate("EmployeesHomeScreen");
    //   }
    //   // navigation.navigate("SigninPage");
    // }).catch((err) => {
    //   showToastWithGravityAndOffset("Registration failed")
    // });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: registerValidation,
    validateOnChange: true,
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
              marginTop: 17,
              flexDirection: "row",
            }}
          >
            <CheckBox value={values.termsAndConditions} color={BASIC_COLORS.PRIMARY} onChange={handleChange("termsAndConditions")} onValueChange={(e) => {
              formik.setFieldValue("termsAndConditions", !values.termsAndConditions);
            }}/>
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
          disabled={errors.confirmPassword || errors.password || errors.storeEmail || errors.termsAndConditions || errors.storeName ? true : false}
        />
      </View>
    </View>
  );
};

export default Signup;

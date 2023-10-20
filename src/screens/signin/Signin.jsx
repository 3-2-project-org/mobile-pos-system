import { View, Text, Pressable, ToastAndroid } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSInputField from "../../components/atoms/MPSInputField/MPSInputField";
import { useNavigation } from "@react-navigation/native";
import MPSButton from "../../components/atoms/Button/Button";
import { useFormik } from "formik";
import { loginValidation } from "../../utils/common/validations";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StackNavigator from "../../navigations/StackNavigator";
import { axiosInstance } from "../../utils/common/api";

const Signin = () => {
  const [firstTimeLogin, setFirstTimeLogin] = React.useState(true);
  const navigation = useNavigation();

  const initialValues = {
    email: "",
    password: "",
  };

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const onSubmit = async () => {

    await axiosInstance.post("/auth/login", {
      email: values.email,
      password: values.password,
    }).then(async (res) => {
      console.log(res.data.data.otherDetails.type);
      if (!res.data.data.otherDetails.is_loggedIn) {
        navigation.navigate("FirstTimeSignInPage")
      }
      await AsyncStorage.setItem("user", JSON.stringify(res.data.data.otherDetails));
      const a = await AsyncStorage.getItem("user")
      console.log("user", a);
      // showToastWithGravityAndOffset("Registration successful")
      // if (res.data.data.otherDetails.type === "admin") {
      //   navigation.navigate("SuperAdminAnalyticsOverview");
      // } else if (res.data.data.otherDetails.type === "sales manager") {
      //   navigation.navigate("InventoryScreen");
      // } else {
      //   navigation.navigate("EmployeesHomeScreen");
      // }
      // navigation.navigate("SigninPage");
      navigation.navigate()
    }).catch((err) => {
      showToastWithGravityAndOffset("Registration failed")
    });
    // await axios.post("http://192.168.8.147:3007/api/v1/auth/login", {
    //   email: values.email,
    //   password: values.password,
    // }).then(async (res) => {
    //   console.log(res.data.data.otherDetails.type);
    //   if (!res.data.data.otherDetails.is_loggedIn) {
    //     navigation.navigate("FirstTimeSignInPage")
    //   }
    //   await AsyncStorage.setItem("user", JSON.stringify(res.data.data.otherDetails));
    //   const a = await AsyncStorage.getItem("user")
    //   console.log("user", a);
    //   // showToastWithGravityAndOffset("Registration successful")
    //   // if (res.data.data.otherDetails.type === "admin") {
    //   //   navigation.navigate("SuperAdminAnalyticsOverview");
    //   // } else if (res.data.data.otherDetails.type === "sales manager") {
    //   //   navigation.navigate("InventoryScreen");
    //   // } else {
    //   //   navigation.navigate("EmployeesHomeScreen");
    //   // }
    //   // navigation.navigate("SigninPage");
    //   navigation.navigate()
    // }).catch((err) => {
    //   showToastWithGravityAndOffset("Registration failed")
    // });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginValidation,
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
            error={errors.email ? true : false}
            errorMessage={errors.email}
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
            error={errors.password ? true : false}
            errorMessage={errors.password}
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
            onPress={handleSubmit}
            disabled={errors.email || errors.password ? true : false}
        />
      </View>
    </View>
  );
};

export default Signin;

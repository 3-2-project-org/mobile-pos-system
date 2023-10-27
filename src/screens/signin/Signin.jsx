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
      50
    );
  };

  const onSubmit = async () => {
    console.log("values", values);
    await axiosInstance
      .post("/auth/login", {
        email: values.email,
        password: values.password,
      })
      .then(async (res) => {
        if (!res.data.data.otherDetails.is_loggedIn) {
          navigation.navigate("FirstTimeSignInPage");
        }
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(res.data.data.otherDetails)
        );
        await AsyncStorage.getItem("user");
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        console.log("err", err);
        showToastWithGravityAndOffset("Registration failed");
      });
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
            secureTextEntry={true}
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

import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { BASIC_COLORS } from "../utils/constants/styles";
import MPSButton from "../components/atoms/Button/Button";
import { BottomSheet } from "@rneui/base";
import CloseIcon from "../assets/CloseIcon";
import { Pressable } from "react-native";
import MPSInputField from "../components/atoms/MPSInputField/MPSInputField";
import MPSDoubleButton from "../components/atoms/Button/DoubleButton";
import { AntDesign } from "@expo/vector-icons";
import CustomCard from "../components/CustomCard/CustomCard";
import UsersCustomCard from "../components/CustomCard/UsersCustomCard";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormik } from "formik";
import { editUserInfoValidation } from "../utils/common/validations";
import { axiosInstance } from "../utils/common/api";
import Toast from "react-native-toast-message";

const UserProfileScreen = () => {
  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    phone: "",
    _id: "",
  });

  const initialValues = {
    username: userDetails.username,
    email: userDetails.email,
    phone: userDetails.phone,
  };

  const onsubmit = async () => {
    console.log("hello");
    await axiosInstance
      .patch("/auth/update-user/" + userDetails._id, values)
      .then((res) => {
        console.log(res.data.data.otherDetails);
        AsyncStorage.setItem(
          "user",
          JSON.stringify(res.data.data.otherDetails)
        );

        setUserDetails(res.data.data.otherDetails);
        setShowModal(false);
        showToastWithGravityAndOffset("User information updated");
      })
      .catch((err) => {
        console.log(err);
        showToastWithGravityAndOffset("User information update failed");
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onsubmit,
    validateOnChange: true,
    validationSchema: editUserInfoValidation,
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogout = () => {
    AsyncStorage.removeItem("user");
    navigation.navigate("SigninPage");
  };

  useEffect(() => {
    AsyncStorage.getItem("user").then((res) => {
      setUserDetails(JSON.parse(res));
      formik.setValues({
        username: JSON.parse(res).username,
        email: JSON.parse(res).email,
        phone: JSON.parse(res).phone,
      });
    });
  }, []);
  return (
    <View
      style={{
        paddingHorizontal: 31,
        marginTop: 27,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 10,
          }}
          onPress={() => handleLogout()}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: BASIC_COLORS.ERROR,
            }}
          >
            Signout
          </Text>
          <AntDesign name="logout" size={24} color={BASIC_COLORS.ERROR} />
        </TouchableOpacity>
      </View>
      <UsersCustomCard
        Name={userDetails.username}
        Email={userDetails.email}
        Phone={userDetails.phone}
      />

      <MPSButton
        buttonTitle={"Edit Information"}
        buttonType={"primary"}
        buttonStyle={{ marginTop: 20 }}
        onPress={() => setShowModal(true)}
      />

      <BottomSheet
        isVisible={showModal}
        backdropStyle={{
          maxHeight: "75%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        containerStyle={{
          backgroundColor: BASIC_COLORS.WHITE,
          maxHeight: "80%",
          minHeight: "80%",
          position: "absolute",
          width: "100%",
          justifyContent: "flex-end",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          bottom: 0,
          paddingVertical: 31,
          paddingHorizontal: 31,
        }}
      >
        <ScrollView>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius: 50,
                padding: 5,
              }}
            >
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              paddingVertical: 7,
              fontSize: 25,
              fontWeight: "bold",
              color: BASIC_COLORS.FONT_PRIMARY,
            }}
          >
            Edit Information
          </Text>
          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSInputField
              inputLabel={"Username"}
              inputPlaceholder={"Username"}
              value={values.username}
              error={errors.username ? true : false}
              errorMessage={errors.username}
              onChangeText={handleChange("username")}
            />
          </View>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSInputField
              inputLabel={"Email"}
              inputPlaceholder={"email"}
              value={values.email}
              error={errors.email ? true : false}
              errorMessage={errors.email}
              onChangeText={handleChange("email")}
            />
          </View>

          <View
            style={{
              marginTop: 12,
            }}
          >
            <MPSInputField
              inputLabel={"Phone number"}
              inputPlaceholder={"phone"}
              value={values.phone}
              error={errors.phone ? true : false}
              errorMessage={errors.phone}
              onChangeText={handleChange("phone")}
            />
          </View>

          <View
            style={{
              marginTop: 35,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <MPSButton
                buttonType={"secondary"}
                buttonStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 46,
                  paddingHorizontal: "17%",
                  borderColor: BASIC_COLORS.PRIMARY,
                  borderWidth: 3,
                  flex: 1,
                }}
                onPress={() => setShowModal(false)}
                buttonTitle={"Cancel"}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <MPSButton
                onPress={handleSubmit}
                buttonType={"primary"}
                buttonTitle="Save"
                disabled={
                  values.username !== userDetails.username ||
                  values.email !== userDetails.email ||
                  values.phone !== userDetails.phone
                    ? false
                    : true
                }
              />
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 31,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginTop: 13,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  column: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  labelColumn: {
    flex: 1,
    justifyContent: "flex-start",
  },
  valueColumn: {
    flex: 2,
  },
  labelText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
  },
  valueText: {
    color: BASIC_COLORS.FONT_SECONDARY,
    textAlign: "left",
  },
});
export default UserProfileScreen;

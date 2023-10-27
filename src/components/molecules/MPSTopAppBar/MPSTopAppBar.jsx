import { View, Text, Pressable } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../../utils/constants/styles";
import Notification from "../../../assets/Notification.svg";
import AvatarIcon from "../../../assets/AvatarIcon";
import BackIcon from "../../../assets/BackIcon";
import { useNavigation } from "@react-navigation/native";

const MPSTopAppBar = ({
  onPressNotification,
  onPressAvatar,
  onPressRoles,
  userRole,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: BASIC_COLORS.PRIMARY,
        backgroundColor: BASIC_COLORS.WHITE,
        borderRadius: 10,
        paddingHorizontal: 22,
        paddingVertical: 13,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 2,
        },
        elevation: 5,
      }}
    >
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <BackIcon />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: BASIC_COLORS.PRIMARY,
          }}
        >
          Back
        </Text>
      </Pressable>

      <Pressable
        onPress={onPressRoles}
        style={{
          paddingHorizontal: 31,
          // backgroundColor: BASIC_COLORS.PRIMARY,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            color: BASIC_COLORS.PRIMARY,
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          INFOWAVE
        </Text>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("Profile")
      }}>
        <AvatarIcon />
      </Pressable>
    </View>
  );
};

export default MPSTopAppBar;

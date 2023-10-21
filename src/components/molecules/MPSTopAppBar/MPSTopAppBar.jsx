import { View, Text, Pressable } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../../utils/constants/styles";
import Notification from "../../../assets/Notification.svg";
import AvatarIcon from "../../../assets/AvatarIcon";

const MPSTopAppBar = ({
  onPressNotification,
  onPressAvatar,
  onPressRoles,
  userRole,
}) => {
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
      <Pressable onPress={onPressNotification}>
        <Notification />
      </Pressable>

      <Pressable
        onPress={onPressRoles}
        style={{
          paddingHorizontal: 31,
          backgroundColor: BASIC_COLORS.PRIMARY,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            color: BASIC_COLORS.WHITE,
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          {userRole}
        </Text>
      </Pressable>
      <Pressable onPress={onPressAvatar}>
        <AvatarIcon />
      </Pressable>
    </View>
  );
};

export default MPSTopAppBar;

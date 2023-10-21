import { View, Text, Pressable } from "react-native";
import React from "react";
import { USER_ROLES } from "../../../utils/constants/Roles";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const MPSRolePopperContainer = ({
  onPressRoles,
  selectedOption,
  switchUserRole,
  userRole,
}) => {
  const checkSelectedOption = (role) => {
    if ("Super admin view" === role) {
      return true;
    } else if ("Sales person view" === role) {
      return true;
    } else if ("Stock manager view" === role) {
      return true;
    }
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 15,
        width: "70%",
        backgroundColor: BASIC_COLORS.WHITE,
        borderRadius: 10,
        elevation: 10,
        paddingVertical: 15,
      }}
    >
      {userRole.map((role, index) => {
        return (
          <Pressable
            key={index}
            onPress={() =>
              onPressRoles(
                role === "admin"
                  ? "Super admin view"
                  : role === "sales manager"
                  ? "Sales person view"
                  : "Stock manager view"
              )
            }
            style={{
              paddingHorizontal: 31,
              backgroundColor: checkSelectedOption(role, selectedOption)
                ? BASIC_COLORS.PRIMARY
                : BASIC_COLORS.WHITE,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: BASIC_COLORS.PRIMARY,
              borderRadius: 10,
              paddingVertical: 12,
              marginVertical: 4,
              width: "100%",
            }}
          >
            <Text
              style={{
                color:
                  selectedOption === role
                    ? BASIC_COLORS.WHITE
                    : BASIC_COLORS.PRIMARY,
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              {role === "admin"
                ? "Super admin view"
                : role === "sales manager"
                ? "Sales person view"
                : "Stock manager view"}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MPSRolePopperContainer;

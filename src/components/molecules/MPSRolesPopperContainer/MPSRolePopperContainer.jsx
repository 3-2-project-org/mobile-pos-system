import { View, Text, Pressable } from "react-native";
import React from "react";
import { USER_ROLES } from "../../../utils/constants/Roles";
import { BASIC_COLORS } from "../../../utils/constants/styles";

const MPSRolePopperContainer = ({
    onPressRoles,
    selectedOption,
    switchUserRole
}) => {
  return (
    <View style={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        paddingHorizontal: 10,
        backgroundColor: BASIC_COLORS.WHITE,
        borderRadius: 10,
        elevation: 10,
    }}>

      {USER_ROLES.map((role) => {
        return (
          <Pressable
            onPress={() => onPressRoles(role)}
            style={{
              paddingHorizontal: 31,
              backgroundColor: selectedOption === role ? BASIC_COLORS.PRIMARY : BASIC_COLORS.WHITE,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: BASIC_COLORS.PRIMARY,
              borderRadius: 10,
              paddingVertical: 8,
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                color: selectedOption === role ?BASIC_COLORS.WHITE:  BASIC_COLORS.PRIMARY,
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              {role}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MPSRolePopperContainer;

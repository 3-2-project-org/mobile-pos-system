import { View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import MPSTopAppBar from "./MPSTopAppBar/MPSTopAppBar";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSRolePopperContainer from "./MPSRolesPopperContainer/MPSRolePopperContainer";

const Layout = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const [showRolesPopper, setShowRolesPopper] = React.useState(false);
  const [selectedOption, setSelectedOption] =
    React.useState("Sales person view");
  const handleRoleSelectorClick = () => {
    setShowRolesPopper(!showRolesPopper);
  };

  const switchUserRole = (role) => {
    setSelectedOption(role);
    setShowRolesPopper(false);
  };
  return (
    <View
      style={{
        paddingHorizontal: 31,
        paddingTop: 41,
        backgroundColor: BASIC_COLORS.BACKGROUND,
        height: "100%",
      }}
    >
      <MPSTopAppBar
        onPressRoles={handleRoleSelectorClick}
        userRole={selectedOption}
      />
      {showRolesPopper && (
        <Animated.View
          style={{
            width: "100%",
            marginTop: 10,
            zIndex: 100,
            opacity: fadeAnim,
            left: 80,
            right: 80,
            top: 105,
            position: "absolute",
            zIndex: 100,
          }}
        >
          <View>
            <MPSRolePopperContainer
              selectedOption={selectedOption}
              onPressRoles={switchUserRole}
            />
          </View>
        </Animated.View>
      )}
      {children}
    </View>
  );
};

export default Layout;

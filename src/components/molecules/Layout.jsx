import { View, Text, Modal } from "react-native";
import React from "react";
import MPSTopAppBar from "./MPSTopAppBar/MPSTopAppBar";
import { BASIC_COLORS } from "../../utils/constants/styles";
import MPSPopper from "./MPSPopper/MPSPopper";
import MPSRolePopperContainer from "./MPSRolesPopperContainer/MPSRolePopperContainer";

const Layout = ({ children }) => {
  const [showRolesPopper, setShowRolesPopper] = React.useState(false);
  const [selectedOption, setSelectedOption] =
    React.useState("Sales person view");
  const handleRoleSelectorClick = () => {
    setShowRolesPopper(!showRolesPopper);
  };

  const switchUserRole = (role) => {
    console.log("switching role to ");
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
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            zIndex: 100,
          }}
        >
          <View>
            <MPSRolePopperContainer
              selectedOption={selectedOption}
              onPressRoles={switchUserRole}
            />
          </View>
        </View>
      )}

      {/* 
      <Modal open={showRolesPopper}>
        <MPSPopper open={showRolesPopper}> */}

      {/* </MPSPopper>
      </Modal> */}

      {children}
    </View>
  );
};

export default Layout;

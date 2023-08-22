import { View, Text, TextInput, Image, Pressable } from "react-native";
import React from "react";
import { BASIC_COLORS } from "../../../utils/constants/styles";
import PropTypes from "prop-types";

const MPSInputField = ({
  inputLabel,
  inputPlaceholder,
  inputStyle,
  inputContainerStyle,
  icon,
  error,
  errorMessage,
  onChangeText,
  value,
  editable,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text
        style={{
          color: BASIC_COLORS.FONT_PRIMARY,
          fontWeight: "500",
          fontSize: 16,
        }}
      >
        {inputLabel}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: BASIC_COLORS.WHITE,
          borderColor:
            inputStyle === "outlined"
              ? BASIC_COLORS.TERTIARY
              : inputStyle === "error"
              ? BASIC_COLORS.ERROR
              : BASIC_COLORS.WHITE,
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
          justifyContent: "space-between",
          width: "100%",
          padding: 10,
          ...inputContainerStyle,
        }}
      >
        <TextInput
          placeholder={inputPlaceholder}
          style={{
            width: "90%",
            color: BASIC_COLORS.FONT_SECONDARY,
          }}
          onChangeText={onChangeText}
          editable={editable}
          value={value}
          secureTextEntry={secureTextEntry}
          
        />

        {icon && icon}
      </View>

      {error && (
        <Text
          style={{
            color: BASIC_COLORS.ERROR,
            fontSize: 12,
            marginTop: 2,
          }}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default MPSInputField;

MPSInputField.propTypes = {
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputStyle: PropTypes.oneOf(["filled", "outlined", "error"]),
  inputContainerStyle: PropTypes.object,
  inputLabelStyle: PropTypes.object,
  inputLabelContainerStyle: PropTypes.object,
  icon: PropTypes.element,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChangeText: PropTypes.func,
  onInput: PropTypes.func,
  value: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

MPSInputField.defaultProps = {
  inputLabel: "Label",
  inputPlaceholder: "Placeholder",
  inputStyle: "outlined",
  inputContainerStyle: {},
  inputLabelStyle: {},
  inputLabelContainerStyle: {},
  icon: null,
  error: true,
  errorMessage: "error",
  onChangeText: () => {},
  onInput: () => {},
  value: "",
  editable: true,
  secureTextEntry: false,
};

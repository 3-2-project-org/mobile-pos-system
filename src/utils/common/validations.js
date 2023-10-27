import * as Yup from "yup";

export const changePasswordValidation = Yup.object().shape({
  newPassword: Yup.string().required("New password is required"),
  confirmNewPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registerValidation = Yup.object().shape({
  storeName: Yup.string().required("Store name is required"),
  storeEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

export const editUserInfoValidation = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

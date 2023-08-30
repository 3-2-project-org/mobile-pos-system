import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    roles: "",
  },
  reducers: {
    setRole: (state, action) => {
      state.roles = action.payload;
    },
  },
});

export const { setRole } = rolesSlice.actions;
export const selectedUserRole = (state) => state.roles.roles;
export default rolesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const sideMenuEditor = createSlice({
  name: "sideMenuEditor",
  initialState: {
    selectedTab: "element",
  },
  reducers: {
    setSelectedTab: (state, { payload }) => {
      state.selectedTab = payload;
      console.log("here", payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedTab } = sideMenuEditor.actions;
export const selectSideMenuEditor = (state: any) => state.sideMenuEditor;
export default sideMenuEditor.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "canvasEditor",
  initialState: {
    canvas: null,
    objects: [],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;

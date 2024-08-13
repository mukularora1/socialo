import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "canvasEditor",
  initialState: {
    canvas: null,
    objects: [] as any,
  },
  reducers: {
    addObjects: (state, { payload }) => {
      state.objects.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addObjects } = counterSlice.actions;
export const selectCanvasStore = (state: any) => state.editorStore;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "canvasEditor",
  initialState: {
    canvas: null,
    objects: [] as any,
    selectedObject: null,
    fill: null,
  },
  reducers: {
    addObjects: (state, { payload }) => {
      state.objects.push(payload);
    },
    updateSelectedObject: (state, { payload }) => {
      state.selectedObject = payload;
    },
    updateFill: (state, { payload }) => {
      state.fill = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addObjects, updateSelectedObject, updateFill } =
  counterSlice.actions;
export const selectCanvasStore = (state: any) => state.editorStore;
export default counterSlice.reducer;

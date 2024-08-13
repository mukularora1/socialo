import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "canvasEditor",
  initialState: {
    canvas: null,
    objects: [] as any,
    selectedObject: null,
  },
  reducers: {
    addObjects: ({ objects }, { payload }) => {
      objects.push(payload);
    },
    updateSelectedObject: (state, { payload }) => {
      console.log(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addObjects } = counterSlice.actions;
export const selectCanvasStore = (state: any) => state.editorStore;
export default counterSlice.reducer;

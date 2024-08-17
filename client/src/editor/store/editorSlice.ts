import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "canvasEditor",
  initialState: {
    canvas: null,
    objects: [] as any,
    selectedObject: null,
    fill: null,
    newObject: null,
  },
  reducers: {
    addObjects: (state, { payload }) => {
      state.objects.push(payload);
      state.newObject = payload;
    },
    updateSelectedObject: (state, { payload }) => {
      state.selectedObject = payload;
    },
    updateFill: (state, { payload }) => {
      state.fill = payload;
    },
    updateObjects: (state, { payload }) => {
      console.log("payload", payload);

      const index = state.objects.findIndex((obj) => obj.id === payload.id);

      // If a matching object is found, replace it with the payload
      if (index !== -1) {
        console.log(index);
        state.objects[index] = payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addObjects, updateSelectedObject, updateFill, updateObjects } =
  counterSlice.actions;
export const selectCanvasStore = (state: any) => state.editorStore;
export default counterSlice.reducer;

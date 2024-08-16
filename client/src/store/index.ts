import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "../editor/store/editorSlice";
import sideMenuEditorReducer from "../editor/store/sideMenuEditorSlice";
import publisherReducer from "../social-media-management/store/publisherSlice";
export default configureStore({
  reducer: {
    publisherStore: publisherReducer,
    editorStore: editorReducer,
    sideMenuEditor: sideMenuEditorReducer,
  },
});

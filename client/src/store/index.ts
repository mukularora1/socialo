import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "../editor/store/editorSlice";
import publisherReducer from "../social-media-management/store/publisherSlice";
export default configureStore({
  reducer: { publisherReducer, editorReducer },
});

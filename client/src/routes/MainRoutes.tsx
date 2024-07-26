import Editor from "../pages/Editor";
import Home from "../pages/Home";

const MainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
];

export default MainRoutes;

import AdminDashboard from "../pages/AdminDashboard";
import Editor from "../pages/Editor";
import Home from "../pages/Home";
import SocialMediaPublisher from "../pages/SocialMediaPublisher";

const MainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
  {
    path: "/social-media-publisher",
    element: <SocialMediaPublisher />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
];

export default MainRoutes;

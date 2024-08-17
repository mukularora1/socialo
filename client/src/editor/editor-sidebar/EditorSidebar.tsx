import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ImageIcon from "@mui/icons-material/Image";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../components/side-menu/SideMenu";
import {
  AssetuploadTab,
  ColorPickerTab,
  DrawTab,
  ElementsTab,
  ImagesTab,
  PagesTab,
  TextTab,
} from "../side-menu-tabs";
import {
  selectSideMenuEditor,
  setSelectedTab,
} from "../store/sideMenuEditorSlice";
import "./editorSidebar.css";
function EditorSidebar() {
  const dispatch = useDispatch();
  const sideMenuStore = useSelector(selectSideMenuEditor);
  const menuItems = [
    {
      Icon: <InterestsOutlinedIcon sx={{ fontSize: "20px" }} />,
      label: "Element",
      id: "element",
    },
    {
      Icon: <TextFieldsOutlinedIcon sx={{ fontSize: "20px" }} />,
      label: "Text",
      id: "text",
    },
    {
      Icon: <CloudUploadOutlinedIcon sx={{ fontSize: "20px" }} />,
      label: "Uploads",
      id: "uploads",
    },
    {
      Icon: <BrushOutlinedIcon sx={{ fontSize: "20px" }} />,
      label: "Draw",
      id: "draw",
    },
    {
      Icon: <LayersOutlinedIcon sx={{ fontSize: "20px" }} />,
      label: "Pages",
      id: "pages",
    },
    {
      Icon: <ImageIcon sx={{ fontSize: "20px" }} />,
      label: "Images",
      id: "images",
    },
  ];
  const tabContent = (tab) => {
    switch (tab) {
      case "element":
        return <ElementsTab />;
      case "color":
        return <ColorPickerTab />;
      case "uploads":
        return <AssetuploadTab />;
      case "text":
        return <TextTab />;
      case "images":
        return <ImagesTab />;
      case "pages":
        return <PagesTab />;
      case "draw":
        return <DrawTab />;
      default:
        return <>default</>;
    }
  };
  const handleTabChange = (id: String) => {
    dispatch(setSelectedTab(id));
  };
  return (
    <>
      <SideMenu menuItems={menuItems} onTabChange={handleTabChange}>
        {tabContent(sideMenuStore.selectedTab)}
      </SideMenu>
    </>
  );
}

export default EditorSidebar;

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./pagesTab.css";
function PagesTab() {
  return (
    <div className="page-tab">
      <div>pages</div>
      <div className="page-tab__pages-wrapper">
        <div className="page-tab__pages-wrapper__page">
          <AddOutlinedIcon />
        </div>
        <div className="page-tab__pages-wrapper__page">
          <AddOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default PagesTab;

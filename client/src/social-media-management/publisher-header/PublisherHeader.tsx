import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useState } from "react";
import BrandLogo from "../../components/brand-logo/BrandLogo";
import Button from "../../components/button/Button";
import TopHeaderBar from "../../components/header/TopHeaderBar";
import Modal from "../../components/modal/Modal";
import "./publisherHeader.css";
function PublisherHeader() {
  const [isCreateModalShow, setIsCreateModalShow] = useState(false);
  const handleCreatePost = () => {
    setIsCreateModalShow(() => true);
  };
  return (
    <TopHeaderBar height="50px">
      <div className="publisher-header">
        <BrandLogo />
        <div>social media accounts</div>
        <div className="publisher-header__publisher-btn">
          <Button variant="outlined">
            Connected Accounts
            <AccountCircleOutlinedIcon sx={{ fontSize: "16px" }} />{" "}
          </Button>
          <Button variant="outlined">
            Download <DownloadOutlinedIcon sx={{ fontSize: "16px" }} />
          </Button>
          <Button variant="outlined" handleClick={handleCreatePost}>
            create post <AddOutlinedIcon sx={{ fontSize: "16px" }} />
          </Button>
        </div>
      </div>
      <Modal
        show={isCreateModalShow}
        backdrop
        onClose={() => setIsCreateModalShow(false)}>
        hellow
      </Modal>
    </TopHeaderBar>
  );
}

export default PublisherHeader;

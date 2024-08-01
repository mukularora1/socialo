import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import "./socialMediaAccountCounter.css";
function SocialMediaAccountCounter() {
  return (
    <div className="social-media-account-counter">
      <div className="social-media-account-counter__account-wrapper">
        <FacebookIcon style={{ fontSize: "16px" }} />4
      </div>
      <div className="social-media-account-counter__account-wrapper">
        <InstagramIcon style={{ fontSize: "16px" }} />2
      </div>
      <div className="social-media-account-counter__account-wrapper">
        <LinkedInIcon style={{ fontSize: "16px" }} />1
      </div>
      <div className="social-media-account-counter__account-wrapper">
        <XIcon style={{ fontSize: "16px" }} />4
      </div>
    </div>
  );
}

export default SocialMediaAccountCounter;

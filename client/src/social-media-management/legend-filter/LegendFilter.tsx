import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Button from "../../components/button/Button";
import "./legendFilter.css";
function LegendFilter() {
  return (
    <div className="legend-filter">
      <Button>
        <DoneOutlinedIcon style={{ fontSize: "16px" }} />
        Posted
      </Button>
      <Button>
        <AlarmOutlinedIcon style={{ fontSize: "16px" }} />
        Sheduled
      </Button>
      <Button>
        <FacebookIcon style={{ fontSize: "16px" }} />
      </Button>
      <Button>
        <LinkedInIcon style={{ fontSize: "16px" }} />
      </Button>
      <Button>
        <InstagramIcon style={{ fontSize: "16px" }} />
      </Button>
      <Button>
        <XIcon style={{ fontSize: "16px" }} />
      </Button>
    </div>
  );
}

export default LegendFilter;

import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./legendFilter.css";

// Define the type for button configurations
interface ButtonConfig {
  icon: React.ReactNode;
  label?: string;
  id: string;
}

const LegendFilter: React.FC = () => {
  // State to keep track of active button indices
  const [activeButtonIndices, setActiveButtonIndices] = useState<number[]>([]);

  // Toggle active state for the clicked button
  const handleButtonClick = (index: number) => {
    setActiveButtonIndices((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  // Button configuration
  const buttonConfigs: ButtonConfig[] = [
    {
      id: "posted",
      icon: <DoneOutlinedIcon style={{ fontSize: "16px" }} />,
      label: "Posted",
    },
    {
      id: "scheduled",
      icon: <AlarmOutlinedIcon style={{ fontSize: "16px" }} />,
      label: "Scheduled",
    },
    {
      id: "facebook",
      icon: <FacebookIcon style={{ fontSize: "16px" }} />,
    },
    {
      icon: <InstagramIcon style={{ fontSize: "16px" }} />,
      id: "instagram",
    },
    {
      icon: <LinkedInIcon style={{ fontSize: "16px" }} />,
      id: "linkedin",
    },
    {
      icon: <XIcon style={{ fontSize: "16px" }} />,
      id: "x",
    },
  ];

  return (
    <div className="legend-filter">
      {buttonConfigs.map((config, index) => (
        <Button
          key={index}
          handleClick={() => handleButtonClick(index)}
          className={
            activeButtonIndices.includes(index)
              ? "legend-filter__option-selected"
              : ""
          }>
          {config.icon}
          {config.label && <span>{config.label}</span>}
        </Button>
      ))}
    </div>
  );
};

export default LegendFilter;

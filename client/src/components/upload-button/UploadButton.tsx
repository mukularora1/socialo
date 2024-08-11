import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import React, { useRef } from "react";
import Button from "../button/Button";
import "./uploadButton.css";

function UploadButton({ className = "" }: { className?: string }) {
  // Create a ref to access the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    // Trigger the click event on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Handle the uploaded files here
      console.log(files);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className={`${className} upload-button`}
        handleClick={handleUploadButtonClick}>
        Upload Button
        <FileUploadOutlinedIcon sx={{ fontSize: "14px" }} />
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the input element
        onChange={handleFileChange}
      />
    </>
  );
}

export default UploadButton;

import "./inputBox.css";
function InputBox({
  handleOnChange,
  placeholder,
  height,
  width,
}: {
  handleOnChange?: () => void;
  placeholder?: string;
  height?: string;
  width?: string;
}) {
  return (
    <input
      onChange={handleOnChange}
      placeholder={placeholder}
      className="input-box"
      width={width}
      height={height}
    />
  );
}

export default InputBox;

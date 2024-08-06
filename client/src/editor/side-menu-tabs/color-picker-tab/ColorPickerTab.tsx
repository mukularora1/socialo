import { HexColorPicker } from "react-colorful";
import "./colorPickerTab.css";
const colors = [
  { color: "#013243", id: 1 }, // Deep Sea Blue
  { color: "#FF6F61", id: 2 }, // Coral
  { color: "#046307", id: 3 }, // Emerald Green
  { color: "#9B5DE5", id: 4 }, // Amethyst Purple
  { color: "#FF5733", id: 5 }, // Sunset Orange
  { color: "#F0FFF0", id: 6 }, // Mint Cream
  { color: "#36454F", id: 7 }, // Charcoal Gray
  { color: "#FFE5B4", id: 8 }, // Soft Peach
  { color: "#87CEEB", id: 9 }, // Sky Blue
  { color: "#FFC0CB", id: 10 }, // Rose Pink
  { color: "#30D5C8", id: 11 }, // Turquoise
  { color: "#FFFACD", id: 12 }, // Lemon Yellow
  { color: "#E6E6FA", id: 13 }, // Lavender
  { color: "#708238", id: 14 }, // Olive Green
  { color: "#2C3E50", id: 15 }, // Midnight Black
];

function ColorPickerTab() {
  return (
    <div className="color-picker-tab">
      <div className="color-picker-tab__heading">Colors</div>
      <div className="color-picker-tab__color-picker">
        <HexColorPicker style={{ height: "150px", width: "170px" }} />
      </div>
      <div className="color-picker-tab__heading">default colors</div>
      <div className="color-picker-tab__default-colors">
        {colors.map((colorObj) => (
          <div
            key={colorObj.id}
            className="color-picker-tab__default-colors--outer">
            <div
              className="color-picker-tab__default-colors--inner"
              style={{ backgroundColor: colorObj.color }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPickerTab;

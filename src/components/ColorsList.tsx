import { colorsListProps } from "../models/colorsListProps";
import "./ColorsList.css";

const ColorsList: React.FC<colorsListProps> = ({ colors, onClick }) => {
  return (
    <div className="colors-contener">
      {colors.map((color: string) => {
        return (
          <div
            className="color-box"
            style={{
              backgroundColor: color,
            }}
            key={color}
            onClick={() => onClick(color)}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorsList;

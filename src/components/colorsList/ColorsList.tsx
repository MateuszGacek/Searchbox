import { ColorsListProps } from "../../models/ColorsListProps";
import "./colorsList.css";

const ColorsList: React.FC<ColorsListProps> = ({ colors, onClick }) => {
  return (
    <div className="colors-container">
      {colors.map((color) => {
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

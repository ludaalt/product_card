import { useState, FC } from "react";
import styles from "../styles/ColorPicker.module.scss";

export type ColorPickerProps = {
  colors: string[];
  changeColor: (color: string) => void;
};

const ColorPicker: FC<ColorPickerProps> = ({ colors, changeColor }) => {
  const [activeColor, setActiveColor] = useState(colors[0]);

  const changeColorHandler = (color: string) => {
    setActiveColor(color);
    changeColor(color);
  };

  return (
    <ul className={styles.colorBlock}>
      {colors.map((item: string) => (
        <li key={item}>
          <label
            className={`${styles.label} ${
              item === activeColor ? styles.active : ""
            }`}
          >
            <input type="radio" />
            <span
              className={styles[item]}
              onClick={() => changeColorHandler(item)}
            ></span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ColorPicker;

import { useState, FC } from "react";
import styles from "../styles/ColorPicker.module.scss";

export type ColorPickerProps = {
  colors: string[];
};

const ColorPicker: FC<ColorPickerProps> = ({ colors }) => {
  const [activeColor, setActiveColor] = useState(colors[0]);

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
              onClick={() => setActiveColor(item)}
            ></span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ColorPicker;

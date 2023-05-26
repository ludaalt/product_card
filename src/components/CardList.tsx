import { data } from "../../data";
import CardItem from "./CardItem";

import styles from "../styles/Cards.module.scss";
import { ICardItem } from "../types/types";

const CardList = () => {
  return (
    <ul className={styles.cardList}>
      {data.map((item: ICardItem) => (
        <li key={item.id}>
          <CardItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;

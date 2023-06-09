import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Cards.module.scss";
import { formatPrice } from "../services/formatPrice";
import { ICardItem } from "../types/types";

import ColorPicker from "./ColorPicker";
import Button from "./Button";

type Props = {
  item: ICardItem;
};

const CardItem: FC<Props> = ({ item }) => {
  const [currentColor, setCurrentColor] = useState<string>(
    item.availableColors[0]
  );

  const onChangeColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div className={styles.cardItem}>
      <Image
        src={`/product-${item.id}_${currentColor}.png`}
        alt={`Product ${item.id}`}
        width={258}
        height={258}
      />
      <div className={styles.cardPrice}>{formatPrice(item.price)}</div>
      <div className={styles.cardTitle}>{item.title}</div>
      <div className={styles.cardDescription}>{item.description}</div>
      <ColorPicker colors={item.availableColors} changeColor={onChangeColor} />
      <Button className={`${styles.button} ${styles.mainButton}`}>
        Add to cart
      </Button>
      <Button className={`${styles.button} ${styles.secondaryButton}`}>
        Buy now
      </Button>
      <Link className={styles.reviewsLink} href="#">
        Read reviews
      </Link>
    </div>
  );
};

export default CardItem;

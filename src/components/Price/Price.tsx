import React, { FC } from "react"
import styles from "./Price.module.scss"

const Price: FC<{ initialPrice: number; discountPercentage: number }> = ({
  initialPrice,
  discountPercentage,
}) => {
  return (
    <aside className={styles["price"]}>
      <span className={styles["current-price"]}>
        {"$" + ((initialPrice * discountPercentage) / 100).toFixed(2)}
      </span>
      <mark className={styles["discount"]}>{discountPercentage + "%"}</mark>
      <s className={styles["initial-price"]}>{"$" + initialPrice.toFixed(2)}</s>
    </aside>
  )
}

export default Price

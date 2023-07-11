import React, { FC } from "react"

import { getPrice } from "../../../../entities/Gallery/lib/utils/getPrice"
import styles from "./Price.module.scss"

export const Price: FC<{
  initialPrice: number
  discountPercentage: number
}> = ({ initialPrice, discountPercentage }) => {
  return (
    <aside className={styles["price"]}>
      <span className={styles["current-price"]}>
        {"$" + getPrice(initialPrice, discountPercentage)}
      </span>
      <mark className={styles["discount"]}>{discountPercentage + "%"}</mark>
      <s className={styles["initial-price"]}>{"$" + initialPrice.toFixed(2)}</s>
    </aside>
  )
}

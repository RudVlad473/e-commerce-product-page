import React from "react"

import styles from "./EmptyCart.module.scss"

export const EmptyCart = () => {
  return <div className={styles["empty-cart"]}>Your cart is empty.</div>
}

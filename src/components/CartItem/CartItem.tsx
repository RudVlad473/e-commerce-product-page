import React, { FC, useContext } from "react"

import can from "../../assets/icon-delete.svg"
import { CartContext } from "../../context/CartContext"
import { removeItem } from "../../reducers/Cart/actionCreators"
import { CartItem as CartItemType } from "../../reducers/Cart/types"
import Figure from "../UI/Figure/Figure"
import styles from "./CartItem.module.scss"

const CartItem: FC<CartItemType> = ({
  name,
  price,
  quantity,
  thumbnailUrl,
}) => {
  const { dispatchCart } = useContext(CartContext)

  return (
    <section className={styles["cart-item"]}>
      <div className={styles["thumbnail"]}>
        <Figure
          src={thumbnailUrl}
          alt="cart item"
          className={styles["thumbnail__pic"]}
        />
      </div>
      <header className={styles["name"]}>{name}</header>
      <div className={styles["price"]}>
        <aside className={styles["sum-price"]}>
          {`$${price.toFixed(2)} x ${quantity}`}
        </aside>
        <footer className={styles["total-price"]}>
          {`$${(price * quantity).toFixed(2)}`}
        </footer>
      </div>
      <div
        className={styles["can"]}
        onClick={() => dispatchCart(removeItem(name))}
      >
        <Figure src={can} alt="can" />
      </div>
    </section>
  )
}

export default CartItem

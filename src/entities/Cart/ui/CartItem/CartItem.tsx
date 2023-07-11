import { FC, useContext } from "react"

import { Figure } from "../../../../shared/UI"
import { CartContext } from "../../../../shared/context/CartContext"
import can from "../../assets/icon-delete.svg"
import { TCartItem } from "../../lib/types"
import { removeItem } from "../../model/reducer/actionCreators"
import styles from "./CartItem.module.scss"

export const CartItem: FC<TCartItem> = ({
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
        onClick={() => dispatchCart(removeItem(name))}>
        <Figure src={can} alt="can" />
      </div>
    </section>
  )
}

import { FC, useContext } from "react"

import { Button } from "../../../../shared/UI"
import { CartContext } from "../../../../shared/context/CartContext"
import { CartItem } from "../CartItem"
import { EmptyCart } from "../EmptyCart"
import styles from "./Cart.module.scss"

export const Cart: FC = () => {
  const { cart } = useContext(CartContext)

  const hasItems = cart.length > 0

  return (
    <section className={styles["cart"]}>
      <header className={styles["header"]}>Cart</header>
      <ul className={styles["cart__items"]}>
        {hasItems ? (
          <>
            {cart.map((item) => (
              <li key={item.name}>
                <CartItem {...item} />
              </li>
            ))}
            <Button>Checkout</Button>
          </>
        ) : (
          <EmptyCart />
        )}
      </ul>
    </section>
  )
}

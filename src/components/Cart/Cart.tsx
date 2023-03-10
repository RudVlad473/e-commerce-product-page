import classNames from "classnames"
import { FC, useContext } from "react"

import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import EmptyCart from "../EmptyCart/EmptyCart"
import Button from "../UI/Button/Button"
import styles from "./Cart.module.scss"

const Cart: FC<{ isActive: boolean }> = ({ isActive }) => {
  const { cart } = useContext(CartContext)
  //const { galleryPictures } = useContext(GalleryContext)

  const hasItems = cart.length > 0

  return (
    <section
      className={classNames(styles["cart"], {
        [styles["cart--active"]]: isActive,
      })}
    >
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

export default Cart

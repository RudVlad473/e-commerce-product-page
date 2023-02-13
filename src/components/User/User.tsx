import React from "react"
import cartImg from "../../assets/icon-cart.svg"
import user from "../../assets/image-avatar.png"
import { useNavbarCart } from "../../hooks/useNavbarCart"
import Badge from "../Badge/Badge"
import Figure from "../UI/Figure/Figure"
import styles from "./User.module.scss"
const Cart = React.lazy(() => import("../Cart/Cart"))

const User = () => {
  const { isCartActive, setIsCartActive, badgeQuantity } = useNavbarCart()

  return (
    <div className={styles["user-section"]}>
      <div
        onClick={() => {
          setIsCartActive((i) => !i)
        }}>
        <Badge text={`${badgeQuantity}`}>
          <Figure src={cartImg} alt="cart" width="25px" />
        </Badge>
      </div>
      <Figure src={user} alt="user" className={styles["user"]} />
      <React.Suspense>
        <Cart isActive={isCartActive} />
      </React.Suspense>
    </div>
  )
}

export default User

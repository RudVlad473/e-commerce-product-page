import React from "react"

import cartImg from "../../assets/icon-cart.svg"
import user from "../../assets/image-avatar.png"
import { useAdaptive } from "../../hooks/useAdaptive"
import { useNavbarCart } from "../../hooks/useNavbarCart"
import Badge from "../Badge/Badge"
import Figure from "../UI/Figure/Figure"
import styles from "./User.module.scss"

const Cart = React.lazy(() => import("../Cart/Cart"))

const User = () => {
  const { isCartActive, setIsCartActive, badgeQuantity } = useNavbarCart()

  const userAvatarRef = useAdaptive<HTMLDivElement>([
    { windowSize: "SMALL", className: styles["user--small"] },
  ])

  return (
    <div className={styles["user-section"]}>
      <div onPointerDown={() => setIsCartActive((i) => !i)}>
        <Badge text={`${badgeQuantity}`} isActive={badgeQuantity > 0}>
          <Figure src={cartImg} alt="cart" className={styles["cart"]} />
        </Badge>
      </div>
      <div ref={userAvatarRef} className={styles["user"]}>
        <Figure src={user} alt="user" />
      </div>
      <React.Suspense>
        <Cart isActive={isCartActive} />
      </React.Suspense>
    </div>
  )
}

export default User

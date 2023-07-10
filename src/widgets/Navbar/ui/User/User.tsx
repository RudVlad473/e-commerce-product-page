import classNames from "classnames"
import React from "react"

import { useNavbarCart } from "../../../../entities/Cart/lib/hooks/useNavbarCart"
import { Cart } from "../../../../entities/Cart/ui/Cart"
import { Badge, Figure, Portal } from "../../../../shared/UI"
import cart from "../../../../shared/assets/icon-cart.svg"
import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import user from "../../assets/image-avatar.png"
import styles from "./User.module.scss"

export const User = () => {
  const { isCartActive, toggleIsCartActive, badgeQuantity } = useNavbarCart()

  const userAvatarRef = useAdaptive<HTMLDivElement>([
    { windowSize: "SMALL", className: styles["user--small"] },
  ])

  return (
    <>
      <div className={styles["user-section"]}>
        <div onPointerDown={toggleIsCartActive}>
          <Badge text={`${badgeQuantity}`} isActive={badgeQuantity > 0}>
            <Figure src={cart} alt="cart" className={styles["cart"]} />
          </Badge>
        </div>
        <div ref={userAvatarRef} className={styles["user"]}>
          <Figure src={user} alt="user" />
        </div>
      </div>
      <Portal>
        <div
          className={classNames(styles["cart-modal"], {
            [styles["cart-modal--active"]]: isCartActive,
          })}>
          <Cart />
        </div>
      </Portal>
    </>
  )
}

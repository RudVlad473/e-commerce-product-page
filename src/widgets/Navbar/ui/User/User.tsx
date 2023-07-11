import classNames from "classnames"
import { motion } from "framer-motion"

import { useNavbarCart } from "../../../../entities/Cart/lib/hooks/useNavbarCart"
import { Cart } from "../../../../entities/Cart/ui/Cart"
import { Badge, Figure, Portal } from "../../../../shared/UI"
import { CartIcon } from "../../../../shared/UI/icons/CartIcon"
import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import { TCartIconType } from "../../../../shared/types"
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
        <div onClick={toggleIsCartActive}>
          <Badge text={`${badgeQuantity}`} isActive={badgeQuantity > 0}>
            <CartIcon type={TCartIconType.BLACK} />
          </Badge>
        </div>
        <div ref={userAvatarRef} className={styles["user"]}>
          <Figure src={user} alt="user" />
        </div>
      </div>
      <Portal>
        <motion.div
          initial={{
            top: "-50%",
            boxShadow: "0px 20px 50px -20px rgba(29, 32, 38, 0.5)",
          }}
          animate={{
            top: isCartActive ? "10%" : "-50%",
          }}
          whileHover={{
            boxShadow: "0px 20px 40px -20px rgba(29, 32, 38, 0.5)",
          }}
          className={classNames(styles["cart-modal"])}>
          <Cart />
        </motion.div>
      </Portal>
    </>
  )
}

import React from "react"
import cart from "../../assets/icon-cart.svg"
import user from "../../assets/image-avatar.png"
import Figure from "../UI/FIgure/Figure"
import styles from "./User.module.scss"

const User = () => {
  return (
    <div className={styles["user-section"]}>
      <Figure src={cart} alt="cart" />
      <Figure src={user} alt="user" width="50px" />
    </div>
  )
}

export default User

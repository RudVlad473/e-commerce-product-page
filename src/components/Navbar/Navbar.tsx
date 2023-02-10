import React from "react"
import logo from "../../assets/logo.svg"
import styles from "./Navbar.module.scss"
import User from "../User/User"

const Navbar = () => {
  return (
    <div className={styles["nav"]}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <nav>
        <ul className={styles["nav-list"]}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <User />
    </div>
  )
}

export default Navbar

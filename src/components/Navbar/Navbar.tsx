import React from "react"
import logo from "../../assets/logo.svg"
import styles from "./Navbar.module.scss"
import User from "../User/User"
import Navlist from "../Navlist/Navlist"

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>

      <Navlist
        links={[
          { displayName: "Collections", link: "#" },
          { displayName: "Men", link: "#" },
          { displayName: "Women", link: "#" },
          { displayName: "About", link: "#" },
          { displayName: "Contact", link: "#" },
        ]}
      />

      <User />
    </nav>
  )
}

export default Navbar

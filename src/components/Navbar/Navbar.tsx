import logo from "../../assets/logo.svg"
import Navlist from "../Navlist/Navlist"
import Figure from "../UI/Figure/Figure"
import User from "../User/User"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
      <Figure src={logo} alt="SNEAKERS" className={styles["logo"]} />

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

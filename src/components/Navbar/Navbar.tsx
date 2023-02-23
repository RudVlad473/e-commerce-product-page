import logo from "../../assets/logo.svg"
import { useAdaptive } from "../../hooks/useAdaptive"
import Navlist from "../Navlist/Navlist"
import Figure from "../UI/Figure/Figure"
import User from "../User/User"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  const navRef = useAdaptive<HTMLDivElement>([
    {
      windowSize: "SMALL",
      className: styles["nav--small"],
    },
  ])

  const navlistRef = useAdaptive<HTMLDivElement>([
    {
      windowSize: "SMALL",
      className: styles["nav-list--hidden"],
    },
  ])

  return (
    <nav ref={navRef} className={styles["nav"]}>
      <Figure src={logo} alt="SNEAKERS" className={styles["logo"]} />

      <div ref={navlistRef} className={styles["nav-list"]}>
        <Navlist
          links={[
            { displayName: "Collections", link: "#" },
            { displayName: "Men", link: "#" },
            { displayName: "Women", link: "#" },
            { displayName: "About", link: "#" },
            { displayName: "Contact", link: "#" },
          ]}
        />
      </div>

      <User />
    </nav>
  )
}

export default Navbar

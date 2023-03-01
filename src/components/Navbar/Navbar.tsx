import logo from "../../assets/logo.svg"
import { useAdaptive } from "../../hooks/useAdaptive"
import Navlist, { Link } from "../Navlist/Navlist"
import SideMenu from "../SideMenu/SideMenu"
import Figure from "../UI/Figure/Figure"
import User from "../User/User"
import styles from "./Navbar.module.scss"

const links: Link[] = [
  { displayName: "Collections", link: "#" },
  { displayName: "Men", link: "#" },
  { displayName: "Women", link: "#" },
  { displayName: "About", link: "#" },
  { displayName: "Contact", link: "#" },
]

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
      <SideMenu links={links} />
      <Figure src={logo} alt="SNEAKERS" className={styles["logo"]} />

      <div ref={navlistRef} className={styles["nav-list"]}>
        <Navlist links={links} />
      </div>

      <User />
    </nav>
  )
}

export default Navbar
export { links }

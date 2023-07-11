import { FC } from "react"

import { Figure } from "../../../../shared/UI/Figure"
import { Navlist } from "../../../../shared/UI/Navlist/Navlist"
import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import logo from "../../assets/logo.svg"
import { TLinks } from "../../lib/types/link"
import { SideMenu } from "../SideMenu"
import { User } from "../User"
import styles from "./Navbar.module.scss"

const links: TLinks = [
  { displayName: "Collections", link: "#" },
  { displayName: "Men", link: "#" },
  { displayName: "Women", link: "#" },
  { displayName: "About", link: "#" },
  { displayName: "Contact", link: "#" },
]

export const Navbar: FC = () => {
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

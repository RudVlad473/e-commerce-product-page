import classNames from "classnames"
import { FC } from "react"

import close from "../../assets/icon-close.svg"
import menu from "../../assets/icon-menu.svg"
import { useBooleanState } from "../../hooks/useBooleanState"
import Navlist, { Link } from "../Navlist/Navlist"
import Portal from "../Portal/Portal"
import Figure from "../UI/Figure/Figure"
import styles from "./SideMenu.module.scss"

const SideMenu: FC<{ links: Link[] }> = ({ links }) => {
  const { state: isMenuOpen, toggleState: toggleMenu } = useBooleanState()

  return (
    <>
      <div onPointerDown={toggleMenu} className={styles["menu"]}>
        <Figure src={menu} alt="menu" />
      </div>
      <Portal>
        <aside
          className={classNames(styles["sidebar"], {
            [styles["sidebar--hidden"]]: !isMenuOpen,
          })}>
          <div onPointerDown={toggleMenu}>
            <Figure src={close} alt="X" />
          </div>

          <Navlist links={links} display="VERTICAL" />
        </aside>
      </Portal>
    </>
  )
}

export default SideMenu

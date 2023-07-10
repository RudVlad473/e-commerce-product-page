import classNames from "classnames"
import { FC } from "react"

import { Figure } from "../../../../shared/UI/Figure"
import { Navlist } from "../../../../shared/UI/Navlist/Navlist"
import { Portal } from "../../../../shared/UI/Portal"
import close from "../../../../shared/assets/icon-close.svg"
import { useBooleanState } from "../../../../shared/hooks/useBooleanState"
import menu from "../../assets/icon-menu.svg"
import styles from "./SideMenu.module.scss"

export const SideMenu: FC<{ links: any[] }> = ({ links }) => {
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

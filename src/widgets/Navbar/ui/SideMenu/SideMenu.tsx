import classNames from "classnames"
import { motion } from "framer-motion"
import { FC } from "react"

import { BlackBg } from "../../../../shared/UI"
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
        <motion.aside
          initial={{
            left: "-100%",
            opacity: 0,
          }}
          animate={{
            left: isMenuOpen ? 0 : "-100%",
            opacity: +isMenuOpen,
          }}
          exit={{
            left: "-100%",
            opacity: 0,
          }}
          transition={{
            duration: 0.75,
          }}
          className={styles["sidebar"]}>
          <div onPointerDown={toggleMenu} className={styles.close}>
            <Figure src={close} alt="X" />
          </div>

          <Navlist links={links} display="VERTICAL" />
        </motion.aside>

        <BlackBg isActive={isMenuOpen} onClick={toggleMenu} />
      </Portal>
    </>
  )
}

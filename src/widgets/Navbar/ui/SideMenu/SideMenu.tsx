import classNames from "classnames"
import { motion } from "framer-motion"
import { FC } from "react"

import { BlackBg } from "../../../../shared/UI"
import { Figure } from "../../../../shared/UI/Figure"
import { Navlist } from "../../../../shared/UI/Navlist/Navlist"
import { Portal } from "../../../../shared/UI/Portal"
import { CrossIcon } from "../../../../shared/UI/icons/CrossIcon"
import { useBooleanState } from "../../../../shared/hooks/useBooleanState"
import { TCrossIconType, TListType } from "../../../../shared/types"
import menu from "../../assets/icon-menu.svg"
import styles from "./SideMenu.module.scss"

export const SideMenu: FC<{ links: any[] }> = ({ links }) => {
  const { state: isMenuOpen, toggleState: toggleMenu } = useBooleanState()

  return (
    <>
      <div onClick={toggleMenu} className={styles["menu"]}>
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
            <CrossIcon type={TCrossIconType.BLACK} />
          </div>

          <Navlist links={links} display={TListType.VERTICAL} />
        </motion.aside>

        <BlackBg isActive={isMenuOpen} onClick={toggleMenu} />
      </Portal>
    </>
  )
}

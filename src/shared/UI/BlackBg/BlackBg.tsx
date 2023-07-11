import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"

import { galleryAnimationSpeed } from "../../../entities/Gallery/consts"
import styles from "./BlackBg.module.scss"

type BlackBgProps = {
  isActive: boolean
  onClick: () => void
}

export const BlackBg: FC<BlackBgProps> = ({ isActive, onClick }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.75,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: galleryAnimationSpeed,
          }}
          className={styles["black-bg"]}
          onClick={onClick}
        />
      )}
    </AnimatePresence>
  )
}

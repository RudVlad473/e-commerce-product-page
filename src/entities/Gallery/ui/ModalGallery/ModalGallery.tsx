import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"

import { Figure } from "../../../../shared/UI"
import close from "../../../../shared/assets/icon-close.svg"
import { galleryAnimationSpeed, initialDesktopGallery } from "../../consts"
import { useGallery } from "../../lib/hooks"
import { Controls } from "../Controls"
import { Thumbnails } from "../Thumbnails"
import styles from "./ModalGallery.module.scss"

type ModalGalleryProps = {
  isActive: boolean
  closeModal: () => void
}

export const ModalGallery: FC<ModalGalleryProps> = ({
  closeModal,
  isActive,
}) => {
  const {
    featuredPic,
    pictures,
    nextPicture,
    prevPicture,
    setFeaturedPicture,
  } = useGallery(initialDesktopGallery)

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{
            opacity: 0,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) scale(0)",
          }}
          animate={{
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          }}
          exit={{
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0)",
          }}
          transition={{
            duration: galleryAnimationSpeed,
          }}
          className={styles["gallery"]}>
          <button onClick={closeModal} className={styles["close-btn"]}>
            <Figure src={close} alt="X" width="25px" />
          </button>

          <div className={styles["main"]}>
            <Figure
              src={pictures[featuredPic].pictureUrl}
              alt="featured pic"
              className={styles["featured"]}
            />

            <Controls
              onLeftControlClick={prevPicture}
              onRightControlClick={nextPicture}
            />
          </div>

          <div className={styles["thumbnails-container"]}>
            <Thumbnails {...{ featuredPic, setFeaturedPicture }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

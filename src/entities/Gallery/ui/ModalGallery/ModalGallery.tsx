import classNames from "classnames"
import { FC } from "react"

import { Figure } from "../../../../shared/UI"
import close from "../../../../shared/assets/icon-close.svg"
import { initialDesktopGallery } from "../../consts"
import { useGallery } from "../../lib/hooks"
import { Controls } from "../Controls"
import { Thumbnails } from "../Thumbnails"
import styles from "./ModalGallery.module.scss"

export const ModalGallery: FC<{ closeModal(): void }> = ({ closeModal }) => {
  const {
    featuredPic,
    pictures,
    nextPicture,
    prevPicture,
    setFeaturedPicture,
  } = useGallery(initialDesktopGallery)

  return (
    <div className={classNames(styles["gallery"], "absolute-center")}>
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
    </div>
  )
}

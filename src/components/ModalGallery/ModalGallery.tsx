import classNames from "classnames"
import { FC } from "react"

import closeImg from "../../assets/icon-close.svg"
import { useGallery } from "../../hooks/useGallery"
import Controls from "../Controls/Controls"
import { initialDesktopGallery } from "../DesktopGallery/DesktopGallery"
import Thumbnails from "../Thumbnails/Thumbnails"
import Figure from "../UI/Figure/Figure"
import styles from "./ModalGallery.module.scss"

const ModalGallery: FC<{ closeModal(): void }> = ({ closeModal }) => {
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
        <Figure src={closeImg} alt="X" width="25px" />
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

export default ModalGallery

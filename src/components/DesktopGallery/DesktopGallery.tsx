import React, { FC } from "react"

import { useGallery } from "../../hooks/useGallery"
import { Gallery as GalleryType } from "../../reducers/Gallery/types"
import { getGalleryPictures } from "../../utils/getGalleryPictures"
import Controls from "../Controls/Controls"
import Thumbnails from "../Thumbnails/Thumbnails"
import Figure from "../UI/Figure/Figure"
import styles from "./DesktopGallery.module.scss"

export const initialDesktopGallery: GalleryType = {
  featuredPic: 0,
  pictures: getGalleryPictures(),
}

const DesktopGallery: FC<{ openModalGallery(): void }> = ({
  openModalGallery,
}) => {
  const {
    featuredPic,
    pictures,
    nextPicture,
    prevPicture,
    setFeaturedPicture,
  } = useGallery(initialDesktopGallery)

  return (
    <div className={styles["gallery"]}>
      <Figure
        src={pictures[featuredPic].pictureUrl}
        className={styles["featured"]}
        alt="featured picture"
        onClick={openModalGallery}
      />
      <Controls
        onLeftControlClick={prevPicture}
        onRightControlClick={nextPicture}
        containerProps={{ className: styles["mobile-controls"] }}
      />

      <Thumbnails {...{ featuredPic, setFeaturedPicture }} />
    </div>
  )
}

export default DesktopGallery

import { FC } from "react"

import { useAdaptive } from "../../hooks/useAdaptive"
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

  const gallery = useAdaptive<HTMLDivElement>([
    {
      windowSize: "MEDIUM",
      className: styles["gallery--medium"],
    },
    {
      windowSize: "SMALL",
      className: styles["gallery--small"],
    },
  ])

  const controlsRef = useAdaptive<HTMLDivElement>([
    {
      windowSize: "MEDIUM",
      className: styles["mobile-controls--medium"],
    },
  ])

  return (
    <div ref={gallery} className={styles["gallery"]}>
      <Figure
        src={pictures[featuredPic].pictureUrl}
        className={styles["featured"]}
        alt="featured picture"
        onClick={openModalGallery}
      />
      <div ref={controlsRef} className={styles["mobile-controls"]}>
        <Controls
          onLeftControlClick={prevPicture}
          onRightControlClick={nextPicture}
        />
      </div>

      <Thumbnails {...{ featuredPic, setFeaturedPicture }} />
    </div>
  )
}

export default DesktopGallery

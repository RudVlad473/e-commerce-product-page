import { FC } from "react"

import { Figure } from "../../../../shared/UI"
import { useAdaptive } from "../../../../shared/hooks"
import { initialDesktopGallery } from "../../consts"
import { useGallery } from "../../lib/hooks"
import { Controls } from "../Controls"
import { Thumbnails } from "../Thumbnails"
import styles from "./DesktopGallery.module.scss"

export const DesktopGallery: FC<{ openModalGallery(): void }> = ({
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

/* eslint-disable react/prop-types */
import classNames from "classnames"
import { memo, useContext } from "react"

import { Figure } from "../../../../shared/UI"
import { GalleryContext } from "../../../../shared/context/GalleryContext"
import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import { useGallery } from "../../lib/hooks/useGallery"
import styles from "./Thumbnails.module.scss"

type ThumbnailsProps = Pick<
  ReturnType<typeof useGallery>,
  "featuredPic" | "setFeaturedPicture"
>

export const Thumbnails = memo<ThumbnailsProps>(
  ({ featuredPic, setFeaturedPicture }) => {
    const { galleryPictures } = useContext(GalleryContext)

    const containerRef = useAdaptive([
      {
        windowSize: "MEDIUM",
        className: styles["container--medium"],
      },
    ])

    return (
      <footer ref={containerRef} className={styles["container"]}>
        {galleryPictures.map(({ thumbnailUrl }, index) => (
          <Figure
            key={thumbnailUrl + index}
            className={classNames(styles["thumbnail"], {
              [styles["thumbnail--featured"]]: index === featuredPic,
            })}
            src={thumbnailUrl}
            alt={`gallery picture #${index + 1}`}
            onClick={() => setFeaturedPicture(index)}
          />
        ))}
      </footer>
    )
  }
)

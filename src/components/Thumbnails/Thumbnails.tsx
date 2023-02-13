import classNames from "classnames"
import React, { FC, memo, useContext } from "react"
import { GalleryContext } from "../../context/GalleryContext"
import { useGallery } from "../../hooks/useGallery"

import styles from "../Gallery/Gallery.module.scss"
import Figure from "../UI/Figure/Figure"

export type ThumbnailsProps = Pick<
  ReturnType<typeof useGallery>,
  "featuredPic" | "setFeaturedPicture"
>

const Thumbnails: FC<ThumbnailsProps> = ({
  featuredPic,
  setFeaturedPicture,
}) => {
  const { galleryPictures } = useContext(GalleryContext)

  return (
    <footer className={styles["gallery__thumbnails"]}>
      {galleryPictures.map(({ thumbnailUrl }, index) => (
        <Figure
          key={thumbnailUrl + index}
          className={classNames(styles["gallery__thumbnail"], {
            [styles["gallery__thumbnail--featured"]]: index === featuredPic,
          })}
          src={thumbnailUrl}
          alt={`gallery picture #${index + 1}`}
          onClick={() => setFeaturedPicture(index)}
        />
      ))}
    </footer>
  )
}

export default memo(Thumbnails)

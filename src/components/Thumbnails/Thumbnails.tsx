import classNames from "classnames"
import React, { FC, memo, useContext } from "react"

import { GalleryContext } from "../../context/GalleryContext"
import { useGallery } from "../../hooks/useGallery"
import Figure from "../UI/Figure/Figure"
import styles from "./Thumbnails.module.scss"

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
    <footer className={styles["container"]}>
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

export default memo(Thumbnails)

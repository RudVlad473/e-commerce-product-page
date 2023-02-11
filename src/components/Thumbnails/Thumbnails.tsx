import classNames from "classnames"
import React, { FC, memo } from "react"
import { setFeaturedPic } from "../../reducers/Gallery/actionCreators"
import { Gallery, GalleryAction } from "../../reducers/Gallery/types"
import styles from "../Gallery/Gallery.module.scss"
import Figure from "../UI/FIgure/Figure"

const Thumbnails: FC<
  Gallery & { dispatchGallery: React.Dispatch<GalleryAction> }
> = ({ galleryPictures, featuredPic, dispatchGallery }) => {
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
          onClick={() => dispatchGallery(setFeaturedPic(index))}
        />
      ))}
    </footer>
  )
}

export default memo(Thumbnails)

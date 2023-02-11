import React, { FC, useReducer } from "react"
import { galleryReducer } from "../../reducers/Gallery/gallery"
import Figure from "../UI/FIgure/Figure"
import styles from "./Gallery.module.scss"
import { Gallery as GalleryType } from "../../reducers/Gallery/types"
import { setFeaturedPic } from "../../reducers/Gallery/actionCreators"

export interface GalleryPicture {
  pictureUrl: string
  thumbnailUrl: string
}

export interface GalleryProps {
  galleryPictures: GalleryPicture[]
}

const Gallery: FC<GalleryProps> = ({ galleryPictures }) => {
  const [{ galleryPictures: pictures, featuredPic }, dispatchGallery] =
    useReducer(galleryReducer, {
      galleryPictures,
      featuredPic: 0,
    } as GalleryType)

  return (
    <div className={styles["gallery"]}>
      <Figure
        src={pictures[featuredPic].pictureUrl}
        className={styles["gallery__featured"]}
        alt="featured picture"
      />
      <footer className={styles["gallery__thumbnails"]}>
        {galleryPictures.map(({ thumbnailUrl }, index) => (
          <Figure
            key={thumbnailUrl + index}
            className={styles["gallery__thumbnail"]}
            src={thumbnailUrl}
            alt={`gallery picture #${index + 1}`}
            onClick={() => dispatchGallery(setFeaturedPic(index))}
          />
        ))}
      </footer>
    </div>
  )
}

export default Gallery

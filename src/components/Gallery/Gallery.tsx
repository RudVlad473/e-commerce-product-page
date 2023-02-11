import { FC, useReducer } from "react"
import { galleryReducer } from "../../reducers/Gallery/gallery"
import { Gallery as GalleryType } from "../../reducers/Gallery/types"
import Thumbnails from "../Thumbnails/Thumbnails"
import Figure from "../UI/FIgure/Figure"
import styles from "./Gallery.module.scss"

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
      <Thumbnails {...{ galleryPictures, featuredPic, dispatchGallery }} />
    </div>
  )
}

export default Gallery

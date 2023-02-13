import { FC } from "react"
import { useGallery } from "../../hooks/useGallery"
import Figure from "../UI/Figure/Figure"
import styles from "./Gallery.module.scss"
import { Gallery as GalleryProps } from "./types"

const Gallery: FC<GalleryProps> = ({
  renderGalleryControls,
  onFeaturedPicClick,
  initialGallery,
}) => {
  const {
    featuredPic,
    pictures,
    nextPicture,
    prevPicture,
    setFeaturedPicture,
  } = useGallery(initialGallery)

  return (
    // <div className={styles["gallery"]}>
    <>
      <Figure
        src={pictures[featuredPic].pictureUrl}
        className={styles["gallery__featured"]}
        alt="featured picture"
        onClick={onFeaturedPicClick}
      />
      {renderGalleryControls({
        setFeaturedPicture,
        nextPicture,
        prevPicture,
        featuredPic,
      })}
    </>
    // </div>
  )
}

export default Gallery

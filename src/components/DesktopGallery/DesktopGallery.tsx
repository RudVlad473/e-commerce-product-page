import React from "react"
import { Gallery as GalleryType } from "../../reducers/Gallery/types"
import { getGalleryPictures } from "../../utils/getGalleryPictures"
import Gallery from "../Gallery/Gallery"
import Thumbnails from "../Thumbnails/Thumbnails"

const initialDesktopGallery: GalleryType = {
  featuredPic: 0,
  pictures: getGalleryPictures(),
}

const DesktopGallery = () => {
  return (
    <div>
      <Gallery
        renderGalleryControls={({ featuredPic, setFeaturedPicture }) => (
          <Thumbnails {...{ featuredPic, setFeaturedPicture }} />
        )}
        initialGallery={initialDesktopGallery}
        onFeaturedPicClick={() => {
          //TODO: open modal gallery
        }}
      />
    </div>
  )
}

export default DesktopGallery

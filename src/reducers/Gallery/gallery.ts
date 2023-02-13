import { getGalleryPictures } from "../../utils/getGalleryPictures"
import { Gallery, GalleryAction } from "./types"

function galleryReducer(
  gallery: Gallery,
  { type, payload }: GalleryAction
): Gallery {
  switch (type) {
    case "SET_FEATURED_PIC": {
      return { ...gallery, featuredPic: payload as number }
    }
    case "NEXT_PIC": {
      return {
        ...gallery,
        featuredPic: (gallery.featuredPic + 1) % gallery.pictures.length,
      }
    }
    case "PREV_PIC": {
      return {
        ...gallery,
        featuredPic:
          Math.abs(gallery.featuredPic - 1) % gallery.pictures.length,
      }
    }
  }
}

const initialGalleryState: Gallery = {
  featuredPic: 0,
  pictures: getGalleryPictures(),
}

export { galleryReducer, initialGalleryState }

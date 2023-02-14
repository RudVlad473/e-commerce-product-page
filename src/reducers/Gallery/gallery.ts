import { getGalleryPictures } from "../../utils/getGalleryPictures"
import { Gallery, GalleryAction } from "./types"

function galleryReducer(
  gallery: Gallery,
  { type, payload }: GalleryAction
): Gallery {
  switch (type) {
    case "SET_FEATURED_PIC": {
      return {
        ...gallery,
        featuredPic: (payload as number) % gallery.pictures.length,
      }
    }
    case "NEXT_PIC": {
      return {
        ...gallery,
        featuredPic: (gallery.featuredPic + 1) % gallery.pictures.length,
      }
    }
    case "PREV_PIC": {
      const { featuredPic } = gallery
      const len = gallery.pictures.length

      return {
        ...gallery,
        featuredPic: featuredPic === 0 ? len - 1 : (featuredPic - 1) % len,
      }
    }
  }
}

const initialGalleryState: Gallery = {
  featuredPic: 0,
  pictures: getGalleryPictures(),
}

export { galleryReducer, initialGalleryState }

import Gallery, { GalleryProps } from "../../components/Gallery/Gallery"
import { GalleryAction, GalleryPayload } from "./types"
import { Gallery as GalleryType } from "./types"

function galleryReducer(
  gallery: GalleryType,
  { type, payload }: GalleryAction
): GalleryType {
  switch (type) {
    case "SET_FEATURED_PIC": {
      return { ...gallery, featuredPic: payload as number,}
    }
    
  }
}

export { galleryReducer }

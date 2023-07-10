import { getGalleryPictures } from "../../../Cart/lib/utils"
import { TGallery } from "../../lib/types"

export type GalleryTypes = "SET_FEATURED_PIC" | "NEXT_PIC" | "PREV_PIC"

export type GalleryPayload = number | undefined

export interface GalleryAction {
  type: GalleryTypes
  payload: GalleryPayload
}

function galleryReducer(
  gallery: TGallery,
  { type, payload }: GalleryAction
): TGallery {
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

const initialGalleryState: TGallery = {
  featuredPic: 0,
  pictures: getGalleryPictures(),
}

export { galleryReducer, initialGalleryState }

import { GalleryPicture } from "../../context/GalleryContext"


type GalleryTypes = "SET_FEATURED_PIC" | "NEXT_PIC" | "PREV_PIC"

type Gallery = {
  featuredPic: number
  pictures: GalleryPicture[]
}

type GalleryPayload = number | undefined

interface GalleryAction {
  type: GalleryTypes
  payload: GalleryPayload
}

export type { GalleryTypes, Gallery, GalleryPayload, GalleryAction }

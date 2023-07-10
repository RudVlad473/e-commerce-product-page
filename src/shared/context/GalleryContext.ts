import { createContext } from "react"

import { TGalleryPicture } from "../../entities/Gallery/lib/types"

export type TGalleryContextType = {
  galleryPictures: TGalleryPicture[]
}

export const GalleryContext = createContext<TGalleryContextType>({
  galleryPictures: [],
})

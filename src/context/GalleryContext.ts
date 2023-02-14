import { createContext } from "react"

type GalleryPicture = {
  pictureUrl: string
  thumbnailUrl: string
}

type GalleryContextType = {
  galleryPictures: GalleryPicture[]
}

const GalleryContext = createContext<GalleryContextType>({
  galleryPictures: [],
})

export { GalleryContext }
export type { GalleryPicture, GalleryContextType }

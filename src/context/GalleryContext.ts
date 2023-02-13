import { GalleryPicture, GalleryProps } from "./../components/Gallery/Gallery"

import { createContext } from "react"

const GalleryContext = createContext<{
  galleryPictures: GalleryPicture[]
}>({
  galleryPictures: [],
})

export { GalleryContext }

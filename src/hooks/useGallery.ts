import { useCallback, useReducer } from "react"

import {
  nextPic,
  prevPic,
  setFeaturedPic,
} from "../reducers/Gallery/actionCreators"
import { galleryReducer } from "../reducers/Gallery/gallery"
import { Gallery } from "../reducers/Gallery/types"

const useGallery = ({
  featuredPic: initialFeaturedPic = 0,
  pictures: initialPictures,
}: Gallery) => {
  const [{ featuredPic, pictures }, dispatchGallery] = useReducer(
    galleryReducer,
    {
      featuredPic: initialFeaturedPic,
      pictures: initialPictures,
    }
  )

  const nextPicture = useCallback(() => dispatchGallery(nextPic()), [])
  const prevPicture = useCallback(() => dispatchGallery(prevPic()), [])
  const setFeaturedPicture = useCallback(
    (newFeaturedPic: Gallery["featuredPic"]) =>
      dispatchGallery(setFeaturedPic(newFeaturedPic)),
    []
  )

  return { featuredPic, pictures, nextPicture, prevPicture, setFeaturedPicture }
}

export { useGallery }

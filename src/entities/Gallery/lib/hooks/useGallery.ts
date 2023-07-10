import { useCallback, useReducer } from "react"

import { galleryReducer } from "../../model/reducer"
import {
  nextPic,
  prevPic,
  setFeaturedPic,
} from "../../model/reducer/actionCreators"
import { TGallery } from "../types"

const useGallery = ({
  featuredPic: initialFeaturedPic = 0,
  pictures: initialPictures,
}: TGallery) => {
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
    (newFeaturedPic: TGallery["featuredPic"]) =>
      dispatchGallery(setFeaturedPic(newFeaturedPic)),
    []
  )

  return { featuredPic, pictures, nextPicture, prevPicture, setFeaturedPicture }
}

export { useGallery }

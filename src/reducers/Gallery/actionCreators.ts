import { Gallery, GalleryAction } from "./types"

const setFeaturedPic = (
  featuredPicIndex: Gallery["featuredPic"]
): GalleryAction => ({
  type: "SET_FEATURED_PIC",
  payload: featuredPicIndex,
})

const nextPic = (): GalleryAction => ({
  type: "NEXT_PIC",
  payload: undefined,
})

const prevPic = (): GalleryAction => ({
  type: "PREV_PIC",
  payload: undefined,
})

export { setFeaturedPic, nextPic, prevPic }

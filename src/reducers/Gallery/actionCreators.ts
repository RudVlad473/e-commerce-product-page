import { GalleryPayload, GalleryAction } from "./types"

export const setFeaturedPic = (
  pictureIndex: NonNullable<GalleryPayload>
): GalleryAction => ({
  type: "SET_FEATURED_PIC",
  payload: pictureIndex,
})

export const showDesktopGallery = (): GalleryAction => ({
  type: "SET_FEATURED_PIC",
  payload: undefined,
})
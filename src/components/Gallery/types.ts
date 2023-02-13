import { useGallery } from "../../hooks/useGallery"
import { Gallery as GalleryType } from "../../reducers/Gallery/types"

type Gallery = {
  renderGalleryControls: ({
    setFeaturedPicture,
    nextPicture,
    prevPicture,
    featuredPic
  }: Pick<
    ReturnType<typeof useGallery>,
    "setFeaturedPicture" | "nextPicture" | "prevPicture" | "featuredPic"
  >) => React.ReactNode

  onFeaturedPicClick?(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ): void

  initialGallery: GalleryType
}

interface GalleryPicture {
  pictureUrl: string
  thumbnailUrl: string
}

export type { Gallery, GalleryPicture }

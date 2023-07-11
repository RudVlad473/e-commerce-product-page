import { TGalleryPicture } from "../types"

function getPictureUrl(pictureName: string): string {
  return new URL(`../../assets/${pictureName}`, import.meta.url).href
}

function getGalleryPictures(): TGalleryPicture[] {
  const picturesCount = 4

  const galleryPictures: TGalleryPicture[] = []

  for (let i = 1; i <= picturesCount; ++i) {
    galleryPictures.push({
      pictureUrl: getPictureUrl(`image-product-${i}.jpg`),
      thumbnailUrl: getPictureUrl(`image-product-${i}-thumbnail.jpg`),
    })
  }

  return galleryPictures
}

export { getGalleryPictures }

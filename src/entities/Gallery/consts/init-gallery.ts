import { getGalleryPictures } from "../../Cart/lib/utils";
import { TGallery } from "../lib/types";

export const initialDesktopGallery: TGallery = {
  featuredPic: 0,
  pictures: getGalleryPictures(),
}
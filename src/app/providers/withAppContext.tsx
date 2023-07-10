import { useReducer } from "react"

import { getGalleryPictures } from "../../entities/Cart/lib/utils"
import { cartReducer } from "../../entities/Cart/model/reducer"
import { CartContext, GalleryContext } from "../../shared/context"

const galleryPictures = getGalleryPictures()

export const withAppContext = (component: () => React.ReactNode) => () => {
  const [cart, dispatchCart] = useReducer(cartReducer, [])

  return (
    <GalleryContext.Provider value={{ galleryPictures }}>
      <CartContext.Provider value={{ cart, dispatchCart }}>
        {component()}
      </CartContext.Provider>
    </GalleryContext.Provider>
  )
}

import React, { FC } from "react"

import { CartContext, CartContextType } from "../../context/CartContext"
import {
  GalleryContext,
  GalleryContextType
} from "../../context/GalleryContext"

const AppContext: FC<{
  values: CartContextType & GalleryContextType
  children: React.ReactNode
}> = ({ values, children }) => {
  return (
    <GalleryContext.Provider value={values}>
      <CartContext.Provider value={values}>{children}</CartContext.Provider>
    </GalleryContext.Provider>
  )
}

export default AppContext

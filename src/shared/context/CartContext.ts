import { createContext } from "react"

import { TCart } from "../../entities/Cart/lib/types"
import { CartAction } from "../../entities/Cart/model/reducer"

export type CartContextType = {
  cart: TCart
  dispatchCart: React.Dispatch<CartAction>
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  dispatchCart: () => {},
})

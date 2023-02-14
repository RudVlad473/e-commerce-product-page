import { createContext } from "react"

import { Cart, CartAction } from "./../reducers/Cart/types"

export type CartContextType = {
  cart: Cart
  dispatchCart: React.Dispatch<CartAction>
}

const CartContext = createContext<CartContextType>({
  cart: [],
  dispatchCart: () => {},
})

export { CartContext }

import { Cart, CartAction } from "./../reducers/Cart/types"
import { createContext } from "react"

const CartContext = createContext<{
  cart: Cart
  dispatchCart: React.Dispatch<CartAction>
}>({
  cart: [],
  dispatchCart: () => {},
})

export { CartContext }

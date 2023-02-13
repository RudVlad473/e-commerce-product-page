import { findItemByName } from "../../utils/findItemByName"
import { Cart, CartAction, CartItem } from "./types"

function cartReducer(cart: Cart, { type, payload }: CartAction): Cart {
  switch (type) {
    case "ADD_ITEM": {
      
      if (findItemByName(cart, (payload as CartItem).name)) {
        const newCart: Cart = [...cart]
        findItemByName(newCart, (payload as CartItem).name)!.quantity += (
          payload as CartItem
        ).quantity

        return newCart
      } else {
        return cart.concat(payload as CartItem)
      }
    }
    case "REMOVE_ITEM": {
      return cart.filter(({ name }) => name !== (payload as string))
    }
  }
}

export { cartReducer }

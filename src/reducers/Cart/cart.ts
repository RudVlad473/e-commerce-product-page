import { findItemByName } from "../../utils/findItemByName"
import { Cart, CartAction, CartItem } from "./types"

function cartReducer(cart: Cart, { type, payload }: CartAction): Cart {
  switch (type) {
    case "ADD_ITEM": {
      const item = findItemByName(cart, (payload as CartItem).name)

      if (item) {
        const newCart: Cart = [...cart]
        item.quantity += (payload as CartItem).quantity

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

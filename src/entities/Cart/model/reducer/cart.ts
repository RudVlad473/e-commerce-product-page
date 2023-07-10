import { TCart, TCartItem } from "../../lib/types"
import { findItemByName } from "../../lib/utils"

export type CartTypes = "ADD_ITEM" | "REMOVE_ITEM"

export type CartPayload = TCartItem | TCartItem["name"]

export interface CartAction {
  type: CartTypes
  payload: CartPayload
}

function cartReducer(cart: TCart, { type, payload }: CartAction): TCart {
  switch (type) {
    case "ADD_ITEM": {
      const item = findItemByName(cart, (payload as TCartItem).name)

      if (item) {
        const newCart: TCart = [...cart]
        item.quantity += (payload as TCartItem).quantity

        return newCart
      } else {
        return cart.concat(payload as TCartItem)
      }
    }
    
    case "REMOVE_ITEM": {
      return cart.filter(({ name }) => name !== (payload as string))
    }
  }
}

export { cartReducer }

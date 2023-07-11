import { TCart, TCartItem } from "../types"

export function findItemByName(cart: TCart, name: TCartItem["name"]) {
  return cart.find((item) => item.name === name)
}

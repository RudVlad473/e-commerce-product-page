import { Cart, CartItem } from "./../reducers/Cart/types"

function findItemByName(cart: Cart, name: CartItem["name"]) {
  return cart.find((item) => item.name === name)
}

export { findItemByName }

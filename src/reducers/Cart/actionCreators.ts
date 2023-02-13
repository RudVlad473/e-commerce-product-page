import { CartAction, CartItem } from "./types"

export const addItem = (item: CartItem): CartAction => ({
  type: "ADD_ITEM",
  payload: item,
})

export const removeItem = (name: CartItem["name"]): CartAction => ({
  type: "REMOVE_ITEM",
  payload: name,
})

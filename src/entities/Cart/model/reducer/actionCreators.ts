import { TCartItem } from "../../lib/types"
import { CartAction } from "./cart"

export const addItem = (item: TCartItem): CartAction => ({
  type: "ADD_ITEM",
  payload: item,
})

export const removeItem = (name: TCartItem["name"]): CartAction => ({
  type: "REMOVE_ITEM",
  payload: name,
})

export type CartTypes = "ADD_ITEM" | "REMOVE_ITEM"

export type CartItem = {
  name: string
  price: number
  quantity: number
  thumbnailUrl: string
}

export type Cart = CartItem[]

export type CartPayload = CartItem | CartItem["name"]

export interface CartAction {
  type: CartTypes
  payload: CartPayload
}

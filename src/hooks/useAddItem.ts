import { useCallback, useContext, useState } from "react"

import { AddItemSectionProps } from "../components/AddItemSection/AddItemSection"
import { CartContext } from "../context/CartContext"
import { addItem } from "../reducers/Cart/actionCreators"
import { CartItem } from "../reducers/Cart/types"

const useAddItem = ({ name, price, quantity = 0 }: AddItemSectionProps) => {
  const { dispatchCart } = useContext(CartContext)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const onAddItemBtnClick = useCallback(() => {
    if (productQuantity > 0) {
      dispatchCart(
        addItem({
          name,
          price: price,
          quantity: productQuantity,
          thumbnailUrl: "",
        } as CartItem)
      )
    } else {
      alert("Select how many items of products you want to add to cart")
    }
  }, [productQuantity, name, price])

  return { productQuantity, setProductQuantity, onAddItemBtnClick }
}

export { useAddItem }

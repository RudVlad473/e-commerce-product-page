import { useCallback, useContext, useState } from "react"

import { TCartItem } from "../../../../entities/Cart/lib/types"
import { addItem } from "../../../../entities/Cart/model/reducer"
import { CartContext, GalleryContext } from "../../../../shared/context"
import { AddItemSectionProps } from "../../ui/AddItemSection/AddItemSection"

const useAddItem = ({ name, price, quantity = 0 }: AddItemSectionProps) => {
  const { dispatchCart } = useContext(CartContext)
  const { galleryPictures } = useContext(GalleryContext)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const onAddItemBtnClick = useCallback(() => {
    if (productQuantity === 0) {
      alert("Select how many items of products you want to add to cart")
      return
    }

    dispatchCart(
      addItem({
        name,
        price: price,
        quantity: productQuantity,
        thumbnailUrl: galleryPictures[0].pictureUrl,
      } as TCartItem)
    )
  }, [productQuantity, dispatchCart, name, price, galleryPictures])

  return { productQuantity, setProductQuantity, onAddItemBtnClick }
}

export { useAddItem }

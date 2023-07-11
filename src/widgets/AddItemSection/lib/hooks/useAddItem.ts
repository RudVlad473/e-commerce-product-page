import { useCallback, useContext, useState } from "react"

import { addItem } from "../../../../entities/Cart/model/reducer/actionCreators"
import { GalleryContext } from "../../../../shared/context"
import { CartContext } from "../../../../shared/context/CartContext"
import { AddItemSectionProps } from "../../ui/AddItemSection/AddItemSection"

const useAddItem = ({ name, price, quantity = 0 }: AddItemSectionProps) => {
  const { dispatchCart } = useContext(CartContext)
  const { galleryPictures } = useContext(GalleryContext)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const onAddItemBtnClick = useCallback(() => {
    if (productQuantity > 0) {
      dispatchCart(
        addItem({
          name,
          price: price,
          quantity: productQuantity,
          thumbnailUrl: galleryPictures[0].pictureUrl,
        })
      )
    } else {
      alert("Select how many items of products you want to add to cart")
    }
  }, [productQuantity, dispatchCart, name, price, galleryPictures])

  return { productQuantity, setProductQuantity, onAddItemBtnClick }
}

export { useAddItem }

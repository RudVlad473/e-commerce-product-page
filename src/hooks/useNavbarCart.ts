import { useContext, useMemo, useState } from "react"
import { CartContext } from "../context/CartContext"

export const useNavbarCart = () => {
  const [isCartActive, setIsCartActive] = useState(false)
  const { cart } = useContext(CartContext)
  const badgeQuantity = useMemo(
    () =>
      cart.reduce(
        (quantity, currentItem) => quantity + currentItem.quantity,
        0
      ),
    [cart]
  )

  return { isCartActive, setIsCartActive, badgeQuantity }
}

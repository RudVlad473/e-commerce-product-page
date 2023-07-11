import { useContext, useMemo } from "react"

import { CartContext } from "../../../../shared/context/CartContext"
import { useBooleanState } from "../../../../shared/hooks"

export const useNavbarCart = () => {
  const { state: isCartActive, toggleState: toggleIsCartActive } =
    useBooleanState(false)

  const { cart } = useContext(CartContext)
  
  const badgeQuantity = useMemo<number>(
    () =>
      cart.reduce(
        (quantity, currentItem) => quantity + currentItem.quantity,
        0
      ),
    [cart]
  )

  return { isCartActive, toggleIsCartActive, badgeQuantity }
}

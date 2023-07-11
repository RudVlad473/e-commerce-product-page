import { FC } from "react"

import { TCartItem } from "../../../../entities/Cart/lib/types"
import { Button } from "../../../../shared/UI/Button"
import { Figure } from "../../../../shared/UI/Figure"
import { CartIcon } from "../../../../shared/UI/icons/CartIcon"
import { useAdaptive } from "../../../../shared/hooks"
import { Counter } from "../../../Hero/ui"
import { useAddItem } from "../../lib/hooks"
import styles from "./AddItemSection.module.scss"

export type AddItemSectionProps = Pick<TCartItem, "name" | "price" | "quantity">

export const AddItemSection: FC<AddItemSectionProps> = ({
  name,
  price,
  quantity = 0,
}) => {
  const { productQuantity, setProductQuantity, onAddItemBtnClick } = useAddItem(
    { name, price, quantity }
  )

  const footerRef = useAdaptive([
    {
      windowSize: "MEDIUM",
      className: styles["footer--medium"],
    },
  ])

  return (
    <footer ref={footerRef} className={styles["footer"]}>
      <Counter value={productQuantity} setValue={setProductQuantity} />
      <Button onClick={onAddItemBtnClick}>
        <div className={styles["cart-btn"]}>
          <CartIcon />
          <span>Add to cart</span>
        </div>
      </Button>
    </footer>
  )
}

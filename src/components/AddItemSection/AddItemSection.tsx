import { FC } from "react"

import cart from "../../assets/icon-white-cart.svg"
import { useAdaptive } from "../../hooks/useAdaptive"
import { useAddItem } from "../../hooks/useAddItem"
import { CartItem } from "../../reducers/Cart/types"
import Counter from "../Counter/Counter"
import Button from "../UI/Button/Button"
import Figure from "../UI/Figure/Figure"
import styles from "./AddItemSection.module.scss"

type AddItemSectionProps = Pick<CartItem, "name" | "price" | "quantity">

const AddItemSection: FC<AddItemSectionProps> = ({
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
          <Figure src={cart} alt="cart" className={styles["cart"]} />
          <span>Add to cart</span>
        </div>
      </Button>
    </footer>
  )
}

export default AddItemSection
export type { AddItemSectionProps }

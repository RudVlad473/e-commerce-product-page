import { FC, useContext, useState } from "react"
import cart from "../../assets/icon-white-cart.svg"
import { CartContext } from "../../context/CartContext"
import { addItem } from "../../reducers/Cart/actionCreators"
import { CartItem } from "../../reducers/Cart/types"
import { getPrice } from "../../utils/getPrice"
import Counter from "../Counter/Counter"
import Price from "../Price/Price"
import Button from "../UI/Button/Button"
import Figure from "../UI/Figure/Figure"
import styles from "./Hero.module.scss"

const Hero: FC<{}> = () => {
  const { dispatchCart } = useContext(CartContext)
  const [productQuantity, setProductQuantity] = useState(0)

  const productName = "Fall Limited Edition Sneakers"
  const initialPrice = 250
  const discountPercentage = 50

  return (
    <section className={styles["hero"]}>
      <header className={styles["headers-wrapper"]}>
        <h2 className={styles["subheader"]}>SNEAKER COMPANY</h2>
        <h1 className={styles["header"]}>{productName}</h1>
      </header>
      <article className={styles["article"]}>
        There low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </article>
      <Price {...{ initialPrice, discountPercentage }} />
      <footer className={styles["footer"]}>
        <Counter value={productQuantity} setValue={setProductQuantity} />
        <Button
          onClick={() => {
            if (productQuantity > 0) {
              dispatchCart(
                addItem({
                  name: productName,
                  price: +getPrice(initialPrice, discountPercentage),
                  quantity: productQuantity,
                  thumbnailUrl: "",
                } as CartItem)
              )
            } else {
              alert("Select how many items of products you want to add to cart")
            }
          }}>
          <div className={styles["cart-btn"]}>
            <Figure src={cart} alt="cart" width="20px" />
            <span>Add to cart</span>
          </div>
        </Button>
      </footer>
    </section>
  )
}

export default Hero

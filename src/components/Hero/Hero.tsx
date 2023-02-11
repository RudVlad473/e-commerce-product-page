import cart from "../../assets/icon-white-cart.svg"
import Counter from "../Counter/Counter"
import Price from "../Price/Price"
import Button from "../UI/Button/Button"
import Figure from "../UI/FIgure/Figure"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <header className={styles["headers-wrapper"]}>
        <h2 className={styles["subheader"]}>SNEAKER COMPANY</h2>
        <h1 className={styles["header"]}>Fall Limited Edition Sneakers</h1>
      </header>
      <article className={styles["article"]}>
        There low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </article>
      <Price initialPrice={250} discountPercentage={50} />
      <footer className={styles["footer"]}>
        <Counter render={(value) => <div>{value}</div>} />
        <Button>
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

import React from "react"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <header className={styles["subheader"]}>SNEAKER COMPANY</header>
      <h1 className={styles["header"]}>Fall Limited Edition Sneakers</h1>
      <article className={styles["article"]}>
        There low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </article>
      <aside className={styles["price"]}></aside>
      <footer className={styles["cart-buttons"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus.
      </footer>
    </section>
  )
}

export default Hero

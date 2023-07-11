import { FC } from "react"

import { Price } from ".."
import { getPrice } from "../../../../entities/Gallery/lib/utils/getPrice"
import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import { AddItemSection } from "../../../AddItemSection/ui"
import styles from "./Hero.module.scss"

export const Hero: FC = () => {
  const heroRef = useAdaptive([
    { windowSize: "SMALL", className: styles["hero--small"] },
  ])

  return (
    <section ref={heroRef} className={styles["hero"]}>
      <header className={styles["headers-wrapper"]}>
        <h2 className={styles["subheader"]}>SNEAKER COMPANY</h2>
        <h1 className={styles["header"]}>Fall Limited Edition Sneakers</h1>
      </header>
      <article className={styles["article"]}>
        There low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </article>
      <Price initialPrice={250} discountPercentage={50} />
      <AddItemSection
        name="Fall Limited Edition Sneakers"
        price={+getPrice(250, 50)}
        quantity={0}
      />
    </section>
  )
}

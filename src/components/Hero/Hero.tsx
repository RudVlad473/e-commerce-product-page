import { FC } from "react"

import { useAdaptive } from "../../hooks/useAdaptive"
import { getPrice } from "../../utils/getPrice"
import AddItemSection from "../AddItemSection/AddItemSection"
import Price from "../Price/Price"
import styles from "./Hero.module.scss"

type HeroProps = {
  productName: string
  initialPrice: number
  discountPercentage: number
  company: string
  article: string
}

const Hero: FC<HeroProps> = ({
  productName,
  initialPrice,
  discountPercentage,
  company,
  article,
}) => {
  const heroRef = useAdaptive([
    { windowSize: "SMALL", className: styles["hero--small"] },
  ])

  return (
    <section ref={heroRef} className={styles["hero"]}>
      <header className={styles["headers-wrapper"]}>
        <h2 className={styles["subheader"]}>{company}</h2>
        <h1 className={styles["header"]}>{productName}</h1>
      </header>
      <article className={styles["article"]}>{article}</article>
      <Price {...{ initialPrice, discountPercentage }} />
      <AddItemSection
        name={productName}
        price={+getPrice(initialPrice, discountPercentage)}
        quantity={0}
      />
    </section>
  )
}

export default Hero
export type { HeroProps }

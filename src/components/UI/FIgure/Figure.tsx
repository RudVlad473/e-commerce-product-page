import React, { FC, HTMLProps } from "react"
import styles from "./Figure.module.scss"

const Figure: FC<HTMLProps<HTMLImageElement>> = (props) => {
  return (
    <figure className={styles["figure"]}>
      <img {...props} />
    </figure>
  )
}

export default Figure

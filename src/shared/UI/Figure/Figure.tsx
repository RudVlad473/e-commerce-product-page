import classNames from "classnames"
import React, { FC, HTMLProps } from "react"

import styles from "./Figure.module.scss"

export const Figure: FC<HTMLProps<HTMLImageElement>> = ({
  onClick,
  ...props
}) => {
  return (
    <figure className={classNames(styles["figure"])} onClick={onClick}>
      <img {...props} />
    </figure>
  )
}

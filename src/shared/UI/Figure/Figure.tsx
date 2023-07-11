import classNames from "classnames"
import { FC, HTMLProps } from "react"

import styles from "./Figure.module.scss"

export const Figure: FC<HTMLProps<HTMLImageElement>> = ({
  onTouchEnd,
  ...props
}) => {
  return (
    <figure className={classNames(styles["figure"])} onTouchEnd={onTouchEnd}>
      <img {...props} />
    </figure>
  )
}

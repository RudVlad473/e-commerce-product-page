import classNames from "classnames"
import React, { DetailedHTMLProps, FC } from "react"

import styles from "./Button.module.scss"

const Button: FC<
  DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, ...props }) => {
  return (
    <button {...props} className={classNames(className, styles["button"])}>
      {props.children}
    </button>
  )
}

export default Button

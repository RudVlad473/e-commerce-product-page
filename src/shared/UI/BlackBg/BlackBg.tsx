import { FC, HTMLProps } from "react"

import styles from "./BlackBg.module.scss"

export const BlackBg: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return <div {...props} className={styles["black-bg"]}></div>
}

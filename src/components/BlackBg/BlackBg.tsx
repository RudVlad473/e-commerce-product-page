import React, { FC, HTMLProps } from "react"

import styles from "./BlackBg.module.scss"

const BlackBg: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return <div {...props} className={styles["black-bg"]}></div>
}

export default BlackBg

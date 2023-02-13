import React, { FC } from "react"
import styles from "./Badge.module.scss"

const Badge: FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  return (
    <div className={styles["container"]}>
      <aside className={styles["badge"]}>{text}</aside>
      {children}
    </div>
  )
}

export default Badge

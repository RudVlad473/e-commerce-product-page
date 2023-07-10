import React, { FC } from "react"

import styles from "./Badge.module.scss"

export const Badge: FC<{
  text: string
  isActive: boolean
  children: React.ReactNode
}> = ({ text, isActive = true, children }) => {
  return (
    <>
      {isActive ? (
        <div className={styles["container"]}>
          <aside className={styles["badge"]}>{text}</aside>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  )
}


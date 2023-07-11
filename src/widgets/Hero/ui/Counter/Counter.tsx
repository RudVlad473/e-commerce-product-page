import React, { FC } from "react"

import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import { MinusIcon } from "../icons/MinusIcon"
import { PlusIcon } from "../icons/PlusIcon"
import styles from "./Counter.module.scss"

export const Counter: FC<{
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}> = ({ value, setValue }) => {
  const maxValue = 100

  const counterRef = useAdaptive<HTMLDivElement>([
    {
      windowSize: "MEDIUM",
      className: styles["counter--medium"],
    },
  ])

  return (
    <div ref={counterRef} className={styles["counter"]}>
      <div onClick={() => setValue((v) => (v > 0 ? v - 1 : v))}>
        <MinusIcon />
      </div>

      <span className={styles["value"]}>{value}</span>

      <div onClick={() => setValue((v) => (v < maxValue ? v + 1 : v))}>
        <PlusIcon />
      </div>
    </div>
  )
}

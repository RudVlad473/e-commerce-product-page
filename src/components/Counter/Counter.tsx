import React, { FC } from "react"

import minus from "../../assets/icon-minus.svg"
import plus from "../../assets/icon-plus.svg"
import { useAdaptive } from "../../hooks/useAdaptive"
import Figure from "../UI/Figure/Figure"
import styles from "./Counter.module.scss"

const Counter: FC<{
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
      <Figure
        src={minus}
        alt="-"
        onClick={() => setValue((v) => (v > 0 ? v - 1 : v))}
      />
      <span className={styles["value"]}>{value}</span>
      <Figure
        src={plus}
        alt="+"
        onClick={() => setValue((v) => (v < maxValue ? v + 1 : v))}
      />
    </div>
  )
}

export default Counter

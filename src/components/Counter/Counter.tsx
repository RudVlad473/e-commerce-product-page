import React, { FC, useState } from "react"
import Figure from "../UI/FIgure/Figure"
import minus from "../../assets/icon-minus.svg"
import plus from "../../assets/icon-plus.svg"
import styles from "./Counter.module.scss"

const Counter: FC<{
  initialValue?: number
  render(value: number): React.ReactNode
}> = ({ initialValue = 0, render }) => {
  const [value, setValue] = useState(initialValue)
  const maxValue = 100

  return (
    <div className={styles["counter"]}>
      <Figure
        src={minus}
        alt="-"
        onClick={() => setValue((v) => (v > 0 ? v - 1 : v))}
      />
      <span className={styles["value"]}>{render(value)}</span>
      <Figure
        src={plus}
        alt="+"
        onClick={() => setValue((v) => (v < maxValue ? v + 1 : v))}
      />
    </div>
  )
}

export default Counter

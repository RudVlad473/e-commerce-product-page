import { FC, useId } from "react"

import styles from "./MinusIcon.module.scss"

export const MinusIcon: FC = () => {
  const id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={12}
      height={4}
      className={styles["minus-icon"]}>
      <defs>
        <path
          id={id}
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
        />
      </defs>
      <use xlinkHref={`#${id}`} fill="#FF7E1B" />
    </svg>
  )
}

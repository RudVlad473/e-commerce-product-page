import { FC, useId } from "react"

import styles from "./PlusIcon.module.scss"

export const PlusIcon: FC = () => {
  const id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={12}
      height={12}
      className={styles["plus-icon"]}>
      <defs>
        <path
          id={id}
          d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
        />
      </defs>
      <use xlinkHref={`#${id}`} fill="#FF7E1B" />
    </svg>
  )
}

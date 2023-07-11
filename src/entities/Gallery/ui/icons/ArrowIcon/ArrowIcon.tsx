import classNames from "classnames"
import { FC } from "react"

import { TArrowType } from "../../../lib/types"
import styles from "./ArrowIcon.module.scss"

type ArrowIconProps = {
  type?: TArrowType
}

const typeStyleMap: Record<TArrowType, string> = {
  [TArrowType.TO_LEFT]: styles["arrow-icon--to-left"],
  [TArrowType.TO_RIGHT]: styles["arrow-icon--to-right"],
}

export const ArrowIcon: FC<ArrowIconProps> = ({
  type = TArrowType.TO_LEFT,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={18}
      className={classNames(styles["arrow-icon"], typeStyleMap[type])}>
      <path fill="none" stroke="#1D2026" strokeWidth={3} d="M11 1 3 9l8 8" />
    </svg>
  )
}

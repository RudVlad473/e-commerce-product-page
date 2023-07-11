import classNames from "classnames"
import { FC } from "react"

import { TCrossIconType } from "../../../types"
import styles from "./CrossIcon.module.scss"

type CrossIconProps = {
  type?: TCrossIconType
}

const typeStylesMap: Record<TCrossIconType, string> = {
  [TCrossIconType.BLACK]: styles["cross-icon--black"],
  [TCrossIconType.WHITE]: styles["cross-icon--white"],
}

export const CrossIcon: FC<CrossIconProps> = ({
  type = TCrossIconType.WHITE,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={15}
      className={classNames(styles["cross-icon"], typeStylesMap[type])}>
      <path
        fillRule="evenodd"
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
      />
    </svg>
  )
}

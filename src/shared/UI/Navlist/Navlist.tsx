import classNames from "classnames"
import { FC } from "react"

import { TLinks } from "../../../widgets/Navbar/lib/types/link"
import { TListType } from "../../types"
import styles from "./Navlist.module.scss"

const listTypeStyleMap: Record<TListType, string> = {
  [TListType.HORIZONTAL]: styles["nav-list--horizontal"],
  [TListType.VERTICAL]: styles["nav-list--vertical"],
}

type NavlistProps = {
  links: TLinks
  display?: TListType
}

export const Navlist: FC<NavlistProps> = ({
  links,
  display = TListType.HORIZONTAL,
}) => {
  return (
    <ul className={classNames(styles["nav-list"], listTypeStyleMap[display])}>
      {links.map(({ displayName, link }) => (
        <li key={displayName}>
          <a href={link}>{displayName}</a>
        </li>
      ))}
    </ul>
  )
}

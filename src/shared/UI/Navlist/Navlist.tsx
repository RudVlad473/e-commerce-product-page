import classNames from "classnames"
import { FC } from "react"

import { TLinks } from "../../../widgets/Navbar/lib/types/link"
import styles from "./Navlist.module.scss"

type NavlistProps = {
  links: TLinks
  display?: "VERTICAL" | "HORIZONTAL"
}

export const Navlist: FC<NavlistProps> = ({
  links,
  display = "HORIZONTAL",
}) => {
  return (
    <ul
      className={classNames(styles["nav-list"], {
        [styles["nav-list--vertical"]]: display === "VERTICAL",
      })}
    >
      {links.map(({ displayName, link }) => (
        <li key={displayName}>
          <a href={link}>{displayName}</a>
        </li>
      ))}
    </ul>
  )
}

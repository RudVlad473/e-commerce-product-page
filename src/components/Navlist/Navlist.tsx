import classNames from "classnames"
import { FC } from "react"

import styles from "./Navlist.module.scss"

type Link = { displayName: string; link: string }

type NavlistProps = {
  links: Link[]
  display?: "VERTICAL" | "HORIZONTAL"
}

const Navlist: FC<NavlistProps> = ({ links, display = "HORIZONTAL" }) => {
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

export default Navlist
export type { Link }

import React, { FC } from "react"

import styles from "./Navlist.module.scss"

const Navlist: FC<{ links: { displayName: string; link: string }[] }> = ({
  links,
}) => {
  return (
    <ul className={styles["nav-list"]}>
      {links.map(({ displayName, link }) => (
        <li key={displayName}>
          <a href={link}>{displayName}</a>
        </li>
      ))}
    </ul>
  )
}

export default Navlist

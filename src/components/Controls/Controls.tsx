import classNames from "classnames"
import React, { FC } from "react"

import rightArrow from "../../assets/icon-next.svg"
import leftArrow from "../../assets/icon-previous.svg"
import Figure from "../UI/Figure/Figure"
import styles from "./Controls.module.scss"

const Controls: FC<{
  onLeftControlClick(): void
  onRightControlClick(): void
}> = ({ onLeftControlClick, onRightControlClick }) => {
  return (
    <div className={classNames(styles["controls"], "absolute-center")}>
      <div className={styles["controls__prev"]} onClick={onLeftControlClick}>
        <Figure src={leftArrow} alt="<" />
      </div>
      <div className={styles["controls__next"]} onClick={onRightControlClick}>
        <Figure src={rightArrow} alt=">" />
      </div>
    </div>
  )
}

export default Controls

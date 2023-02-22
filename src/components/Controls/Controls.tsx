import classNames from "classnames"
import { FC, HTMLProps } from "react"

import rightArrow from "../../assets/icon-next.svg"
import leftArrow from "../../assets/icon-previous.svg"
import Figure from "../UI/Figure/Figure"
import styles from "./Controls.module.scss"

type ControlsProps = {
  onLeftControlClick(): void
  onRightControlClick(): void
  containerProps?: HTMLProps<HTMLDivElement>
}

const Controls: FC<ControlsProps> = ({
  onLeftControlClick,
  onRightControlClick,

  containerProps,
}) => {
  return (
    <div
      className={classNames(
        containerProps?.className,
        styles["controls"],
        "absolute-center"
      )}>
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

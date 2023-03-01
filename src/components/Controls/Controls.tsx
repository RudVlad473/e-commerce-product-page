import classNames from "classnames"
import { FC, HTMLProps } from "react"

import rightArrow from "../../assets/icon-next.svg"
import leftArrow from "../../assets/icon-previous.svg"
import { useAdaptive } from "../../hooks/useAdaptive"
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
  const controlsRef = useAdaptive<HTMLDivElement>([
    { windowSize: "MEDIUM", className: styles["controls--medium"] },
    { windowSize: "SMALL", className: styles["controls--small"] },
  ])

  return (
    <div
      ref={controlsRef}
      className={classNames(
        containerProps?.className,
        styles["controls"],
        "absolute-center"
      )}>
      <div className={styles["prev"]} onPointerDown={onLeftControlClick}>
        <Figure src={leftArrow} alt="<" />
      </div>
      <div className={styles["next"]} onPointerDown={onRightControlClick}>
        <Figure src={rightArrow} alt=">" />
      </div>
    </div>
  )
}

export default Controls

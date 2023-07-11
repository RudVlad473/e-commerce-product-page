import classNames from "classnames"
import { FC, HTMLProps } from "react"

import { useAdaptive } from "../../../../shared/hooks/useAdaptive"
import { TArrowType } from "../../lib/types"
import { ArrowIcon } from "../icons/ArrowIcon"
import styles from "./Controls.module.scss"

type ControlsProps = {
  onLeftControlClick(): void
  onRightControlClick(): void
  containerProps?: HTMLProps<HTMLDivElement>
}

export const Controls: FC<ControlsProps> = ({
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
        <ArrowIcon type={TArrowType.TO_LEFT} />
      </div>
      <div className={styles["next"]} onPointerDown={onRightControlClick}>
        <ArrowIcon type={TArrowType.TO_RIGHT} />
      </div>
    </div>
  )
}

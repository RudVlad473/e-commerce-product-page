import { RefObject, useCallback } from "react"

import { useWindowEvent } from "./useWindowEvent"

const useAdaptive = ({
  windowSize,
  className,
  elemRef,
}: {
  windowSize: number
  className: string
  elemRef: RefObject<HTMLElement>
}) => {
  const onResize = useCallback(() => {
    const currentWidth = window.innerWidth

    const classList = elemRef.current?.classList as DOMTokenList
    console.log(elemRef)
    classList.toggle(className, currentWidth < windowSize)
  }, [className, elemRef, windowSize])

  useWindowEvent("resize", onResize)
  useWindowEvent("load", onResize)
}

export { useAdaptive }


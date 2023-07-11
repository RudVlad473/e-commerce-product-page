import { RefObject, useCallback, useRef } from "react"

import { Breakpoints } from "../consts/breakpoints"
import { useWindowEvent } from "./useWindowEvent"

type Props = {
  windowSize: keyof typeof Breakpoints
  className: string
}[]

const useAdaptive = <T extends HTMLElement>(
  medias: Props
): React.RefObject<T> => {
  const elemRef = useRef(null) as RefObject<T>

  const onResize = useCallback(() => {
    const currentWidth = window.innerWidth

    const classList = elemRef.current?.classList

    medias.forEach(({ className, windowSize }) => {
      classList?.toggle(
        className,
        currentWidth <= parseInt(Breakpoints[windowSize])
      )
    })
  }, [medias])

  useWindowEvent("resize", onResize)
  useWindowEvent("load", onResize)
  useWindowEvent("DOMContentLoaded", onResize)

  return elemRef
}

export { useAdaptive }

import { useLayoutEffect } from "react"

type WindowEventMapKeys = keyof WindowEventMap

function useWindowEvent<K extends WindowEventMapKeys>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) {
  useLayoutEffect(() => {
    window.addEventListener(type, listener, options)

    return () => {
      window.removeEventListener(type, listener, options)
    }
  }, [type, listener, options])
}

export { useWindowEvent }

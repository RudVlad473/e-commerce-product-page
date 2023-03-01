import { useCallback, useState } from "react"

const useBooleanState = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return { state, toggleState }
}

export { useBooleanState }

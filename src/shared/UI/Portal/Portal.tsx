import React, { FC } from "react"
import ReactDOM from "react-dom"

export const Portal: FC<{ children: React.ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body)
}

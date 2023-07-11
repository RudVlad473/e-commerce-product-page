import { ProductPage } from "../pages/ProductPage"
import "./index.scss"
import { withAppContext } from "./providers/withAppContext"

export const App = withAppContext(() => {
  return <ProductPage />
})

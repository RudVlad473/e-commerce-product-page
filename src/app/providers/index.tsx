import compose from "compose-function"

import { withAppContext } from "./withAppContext"

export const withProviders = compose(withAppContext)

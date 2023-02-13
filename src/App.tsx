import Navbar from "./components/Navbar/Navbar"
import styles from "./App.module.scss"
import Gallery from "./components/Gallery/Gallery"
import { getGalleryPictures } from "./utils/getGalleryPictures"
import Hero from "./components/Hero/Hero"
import { useReducer } from "react"
import { cartReducer } from "./reducers/Cart/cart"
import { CartContext } from "./context/CartContext"
import { GalleryContext } from "./context/GalleryContext"
import DesktopGallery from "./components/DesktopGallery/DesktopGallery"

const App = () => {
  const [cart, dispatchCart] = useReducer(cartReducer, [])

  return (
    <GalleryContext.Provider
      value={{
        galleryPictures: getGalleryPictures(),
      }}>
      <CartContext.Provider
        value={{
          cart,
          dispatchCart,
        }}>
        <main className={styles["main"]}>
          <Navbar />
          <div className={styles["main-grid"]}>
            <DesktopGallery />
            <Hero />
          </div>
        </main>
      </CartContext.Provider>
    </GalleryContext.Provider>
  )
}

export default App

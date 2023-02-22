import React, { useReducer, useRef, useState } from "react"

import styles from "./App.module.scss"
import AppContext from "./components/AppContext/AppContext"
import BlackBg from "./components/BlackBg/BlackBg"
import Hero, { HeroProps } from "./components/Hero/Hero"
import LoadingDesktopGallery from "./components/LoadingDesktopGallery/LoadingDesktopGallery"
import Navbar from "./components/Navbar/Navbar"
import { Breakpoints } from "./consts/breakpoints"
import { useAdaptive } from "./hooks/useAdaptive"
import { cartReducer } from "./reducers/Cart/cart"
import { Cart } from "./reducers/Cart/types"
import { getGalleryPictures } from "./utils/getGalleryPictures"

const DesktopGallery = React.lazy(
  () => import("./components/DesktopGallery/DesktopGallery")
)
const ModalGallery = React.lazy(
  () => import("./components/ModalGallery/ModalGallery")
)

const HeroPropsValues: HeroProps = {
  productName: "Fall Limited Edition Sneakers",
  initialPrice: 250,
  discountPercentage: 50,
  company: "SNEAKER COMPANY",
  article: `There low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they'll withstand everything the
  weather can offer.`,
}

const initialCart: Cart = []

const App = () => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart)
  const [isModalGallery, setIsModalGallery] = useState(false)

  const mainRef = useRef(null)
  useAdaptive({
    windowSize: Breakpoints.MEDIUM,
    elemRef: mainRef,
    className: styles["main--medium"],
  })

  return (
    <AppContext
      values={{ cart, dispatchCart, galleryPictures: getGalleryPictures() }}>
      <main  className={styles["main"]}>
        <Navbar />
        <div ref={mainRef} className={styles["main-grid"]}>
          <React.Suspense fallback={<LoadingDesktopGallery />}>
            <DesktopGallery openModalGallery={() => setIsModalGallery(true)} />
          </React.Suspense>
          <Hero {...HeroPropsValues} />
        </div>

        {isModalGallery && (
          <>
            <BlackBg onClick={() => setIsModalGallery(false)} />
            <React.Suspense fallback={<LoadingDesktopGallery />}>
              <ModalGallery closeModal={() => setIsModalGallery(false)} />
            </React.Suspense>
          </>
        )}
      </main>
    </AppContext>
  )
}

export default App

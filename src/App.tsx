import Navbar from "./components/Navbar/Navbar"
import styles from "./App.module.scss"
import Gallery from "./components/Gallery/Gallery"
import { getGalleryPictures } from "./utils/getGalleryPictures"
import Hero from "./components/Hero/Hero"

const App = () => {
  return (
    <main className={styles["main"]}>
      <Navbar />
      <div className={styles["main-grid"]}>
        <Gallery galleryPictures={getGalleryPictures()} />
        <Hero />
      </div>
    </main>
  )
}

export default App

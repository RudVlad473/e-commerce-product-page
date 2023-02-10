import Navbar from "./components/Navbar/Navbar"
import styles from "./App.module.scss"
import Gallery from "./components/Gallery/Gallery"

const App = () => {
  return (
    <div className={styles["main-grid"]}>
      <Navbar />
      <Gallery />
    </div>
  )
}

export default App

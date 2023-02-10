import Navbar from "./components/Navbar/Navbar"
import styles from "./App.module.scss"

const App = () => {
  return (
    <div className={styles["main-grid"]}>
      <Navbar />
    </div>
  )
}

export default App

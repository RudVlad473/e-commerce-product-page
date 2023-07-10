import React, { FC } from "react"

import {
  DesktopGallery,
  LoadingDesktopGallery,
  ModalGallery,
} from "../../entities/Gallery/ui"
import { BlackBg } from "../../shared/UI/BlackBg"
import { Portal } from "../../shared/UI/Portal"
import { useAdaptive, useBooleanState } from "../../shared/hooks"
import { Hero } from "../../widgets/Hero/ui"
import { Navbar } from "../../widgets/Navbar/ui"
import styles from "./ProductPage.module.scss"

export const ProductPage: FC = () => {
  const { state: showModalGallery, toggleState: toggleShowModalGallery } =
    useBooleanState(false)

  const mainRef = useAdaptive([
    {
      windowSize: "MEDIUM",
      className: styles["main--medium"],
    },
    {
      windowSize: "SMALL",
      className: styles["main--small"],
    },
  ])

  const mainGridRef = useAdaptive<HTMLDivElement>([
    {
      windowSize: "MEDIUM",
      className: styles["main-grid--medium"],
    },
    {
      windowSize: "SMALL",
      className: styles["main-grid--small"],
    },
  ])

  return (
    <main ref={mainRef} className={styles["main"]}>
      <Navbar />

      <div ref={mainGridRef} className={styles["main-grid"]}>
        <React.Suspense fallback={<LoadingDesktopGallery />}>
          <DesktopGallery openModalGallery={toggleShowModalGallery} />
        </React.Suspense>
        <Hero />
      </div>

      {showModalGallery && (
        <Portal>
          <BlackBg onClick={toggleShowModalGallery} />
          <React.Suspense fallback={<LoadingDesktopGallery />}>
            <ModalGallery closeModal={toggleShowModalGallery} />
          </React.Suspense>
        </Portal>
      )}
    </main>
  )
}

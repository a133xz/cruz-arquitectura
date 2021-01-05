import React, { useEffect } from "react"
import App from "../components/App"
import imageData from "../data/manifest"
import siteInfo from "../data/meta"
import HeadMeta from "../components/HeadMeta"

const images = imageData.slice()
images.pop()
images.reverse()

function HomePage() {
  useEffect(() => {
    let content: HTMLElement = document.body
    window.addEventListener("mousewheel", scrollHandler)

    function scrollHandler(e) {
      if (content === undefined) {
        content = document.body
      } else {
        content.scrollLeft += e.deltaY
        content.setAttribute("style", `--scroll-delta: ${content.scrollLeft}`)
        if (content.scrollLeft > 0) {
          content.getElementsByClassName("site-header")[0].setAttribute("style", `white-space: nowrap`)
        } else {
          content.getElementsByClassName("site-header")[0].setAttribute("style", `white-space: unset`)
        }
      }
    }

    return () => {
      window.removeEventListener("mousewheel", scrollHandler)
    }
  })

  return (
    <>
     <HeadMeta/>
      <App preface={siteInfo.fullDescription} images={images} />
    </>
  )
}

export default HomePage

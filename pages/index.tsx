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
          content.getElementsByClassName("site-title")[0].setAttribute("style", `white-space: nowrap; display: flex`);
          //   content.getElementsByClassName("site-title")[0].setAttribute("style", `white-space: nowrap;display: flex;justify-content: space-between;width: 90vw;`);
          content.getElementsByClassName("logo-wrapper")[0].setAttribute("style", `display: none`)
        } else {
          content.getElementsByClassName("site-title")[0].setAttribute("style", `display: none`);
          content.getElementsByClassName("logo-wrapper")[0].setAttribute("style", `display: block`)
          document.documentElement.style.setProperty('--background', 'white')
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
      <App preface={siteInfo.fullDescription} images={images} footer={siteInfo.footer} />
    </>
  )
}

export default HomePage

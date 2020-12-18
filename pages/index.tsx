import Head from "next/head"
import React, { useEffect } from "react"
import App from "../components/App"
import imageData from "../data/manifest"
import siteInfo from "../data/meta"

const images = imageData.slice().reverse()

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
      <Head>
        <title>{siteInfo.title}</title>
        <meta name="description" content={siteInfo.description} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={siteInfo.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={siteInfo.image}
        />
        <meta property="og:description" content={siteInfo.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"></link>
      </Head>

      <App preface={siteInfo.fullDescription} images={images} />
    </>
  )
}

export default HomePage

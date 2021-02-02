import App from "../components/App"
import imageData from "../data/manifest"
import siteInfo from "../data/meta"
import HeadMeta from "../components/HeadMeta"

const images = [imageData.slice()[0]]

function AboutPage() {
  return (
    <>
      <HeadMeta/>
      <App preface={siteInfo.about} images={images} footer={siteInfo.footer}/>
    </>
  )
}

export default AboutPage

import Head from "next/head"
import * as React from "react"
import { ReactElement } from "react"
import siteInfo from "../data/meta"

const HeadMeta = (): ReactElement => {
  return (
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
        <link href="https://fonts.googleapis.com/css2?family=Questrial:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default HeadMeta

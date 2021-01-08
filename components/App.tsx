import * as React from "react"
import { ReactElement, ReactNode } from "react"
import GlobalStyles from "./GlobalStyles"
import Header from "./Header"
import Image from "./Image"

export type ImageData = {
  fileName: string
  aspectRatio: number
  description: string
  title: string
  colors: {
    vibrant: string
    darkVibrant: string
    lightVibrant: string
  }
  width: number
  height: number
}

type Props = {
  preface?: ReactElement
  images: Array<ImageData>
  footer?: ReactElement
}

function Preface({ children }: { children: ReactNode }): ReactElement {
  return (
    <>
      <div className="pane pane--text">
        <GlobalStyles />
        <Header />
        {children}
      </div>
      <style jsx>{`
        @media (orientation: landscape) {
          .pane {
            position: sticky;
            left: 20px;
            top: 0;
            transform: translateY(
              calc(
                max(
                  min(var(--scroll-delta), 80) / 80 * var(--baseline) * -2,
                  -2rem
                )
              )
            );
          }
        }
      `}</style>
    </>
  )
}

function App(props: Props): ReactElement {
  return (
    <>
      <main className="site-content">
        <Preface>
          <div className="content">{props.preface}</div>
          {props.footer}
        </Preface>
        {props.images.map((img, i) => (
          <Image
            key={i}
            aspectRatio={img.aspectRatio}
            fileName={img.fileName}
            description={img.description}
            colors={img.colors}
            width={img.width}
            height={img.height}
          />
        ))}
      </main>
      <style jsx>{`
        .content {
          opacity: calc((200 - var(--scroll-delta)) / 200);
        }
      `}</style>
    </>
  )
}

export default App

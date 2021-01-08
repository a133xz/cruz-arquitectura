import React from "react"

export default function GlobalStyles() {
  return (
    <style jsx global>
      {`
        :root {
          --imgSize: 85vh;
          --baseline: 1.5rem;
          --dark: #202124;
          --light: #fefeff;
          --foreground: var(--dark);
          --background: var(--light);
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          position: relative;
        }

        html {
          -webkit-text-size-adjust: none;
          background-color: var(--background);
          color: var(--foreground);
          font: 120%/1.5 'Questrial', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          height: 100%;
          overflow: hidden;
          transition: 0.3s ease;
          transition-property: color, background-color;
        }

        @media (prefers-color-scheme: dark) {
          html {
            background-color: var(--foreground);
            color: var(--background);
          }
        }

        body {
          display: flex;
          height: 100%;
          align-items: center;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;
        }

        @media (orientation: portrait) {
          html {
            overflow: initial;
          }

          body {
            height: auto;
          }
        }

        a {
          color: inherit;
          text-decoration-color: black;
          text-decoration-skip-ink: auto;
          transition: 0.2s ease;
          transition-property: color, text-decoration-color;
        }

        a:hover,
        a:focus {
          text-decoration-color: currentColor;
        }

        p {
          margin-bottom: calc(var(--baseline) / 2);
        }

        .frac {
          font-variant-numeric: diagonal-fractions;
        }

        .site-title {
          font-size: 1.2rem;
          margin-bottom: 2em;
          display: none;
        }

        .site-title__social {
          display: flex;
          justify-content: space-around
        }

        .site-title__social span {
          margin 0 15px;
        }

        .logo-wrapper {
          margin-bottom: 35px;
        }

        @media screen and (max-width: 450px) {
          .logo-wrapper {
            text-align: center;
          }
        }

        @media screen and (min-width: 650px) {
          .about {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        #__next {
          display: flex;
          flex-flow: column nowrap;
          padding-bottom: var(--baseline);
        }

        .site-content {
          flex: 1 0 auto;
          display: grid;
          max-height: var(--imgSize);
          grid-auto-flow: column;
          align-items: stretch;
        }

        .pane {
          flex: 1 0 auto;
          width: auto;
          vertical-align: top;
          padding: calc(var(--baseline) / 2);
          display: flex;
          flex-direction: column;
        }

        @media (orientation: portrait) {
          .site-root {
            flex-flow: column wrap;
            max-height: unset;
          }

          .site-content {
            grid-auto-flow: row;
            width: 100px;
          }

          .pane {
            height: auto;
            width: auto;
            margin: 0;
            max-width: 100vw;
          }
        }

        .pane--text {
          align-self: flex-start;
          width: 32rem;
          max-width: 100%;
        }

        @media (orientation: portrait) {
          .pane--text {
            flex-basis: auto;
            width: 100vw;
          }
        }

        .placeholder,
        .image__img.ssr {
          --aspect-ratio: 1;
          background-color: rgba(0, 0, 0, 0.1);
          max-height: var(--imgSize);
          height: var(--imgSize);
          width: calc(var(--imgSize) * var(--aspect-ratio));
        }

        @media (orientation: portrait) {
          .placeholder,
          .image__img.ssr {
            --width: calc(100vw - var(--baseline));
            width: var(--width);
            height: calc(var(--width) / var(--aspect-ratio));
          }
        }
      `}
    </style>
  )
}

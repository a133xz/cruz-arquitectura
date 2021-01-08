import Document, { Head, Html, Main, NextScript } from "next/document"
class MyDocument extends Document {
  static getInitialProps ({ pathname, renderPage }) {
    const {html} = renderPage()
    return { pathname, html }
  }
  render() {
    return (
      <Html lang="es">
        <Head />
        <body className={this.props.pathname.replace("/", "")}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

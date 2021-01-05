import * as React from "react"
import { ReactElement } from "react"
import siteInfo from "../data/meta"

const Header = (): ReactElement => {
  return (
    <header className="site-header">
      <h1 className="site-title">
        CRUZ Arquitectura - {siteInfo.description}
      </h1>
    </header>
  )
}

export default Header

import * as React from "react"
import { ReactElement } from "react"
import siteInfo from "../data/meta"

const Header = (): ReactElement => {
  return (
    <header className="site-header">
      <h1 className="site-title">
        <a href={siteInfo.headerLink}>CRUZ Arquitectura</a> - {siteInfo.description}
      </h1>
    </header>
  )
}

export default Header

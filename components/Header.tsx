import * as React from "react"
import { ReactElement } from "react"
import siteInfo from "../data/meta"

const Header = (): ReactElement => {
  return (
    <header className="site-header">
      <div className="site-logo">
        <a href="/">
          <img alt="logo Cruz Arquitectura" src="/logo.png" width="290"></img>
        </a>
      </div>
      <div className="site-title">
        <h1>
          {siteInfo.title} - {siteInfo.description}
        </h1>
        <div className="site-social">
          <span>
            <a href="/about">Sobre mi</a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/juanfranciscocruzs%C3%A1nchez/">
              LinkedIn
            </a>
          </span>
          <span>
            <a href="https://instagram.com/cruz.arquitectura">Instagram</a>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header

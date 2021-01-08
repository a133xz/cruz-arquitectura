import * as React from "react"
import { ReactElement } from "react"
import siteInfo from "../data/meta"

const Header = (): ReactElement => {
  return (
    <header className="site-header"> 
      <div className="logo-wrapper">
      <img alt="logo Cruz Arquitectura" src="/logo.png" width="320"></img>
      </div>
      <h1 className="site-title">
       <div>
        CRUZ Arquitectura - {siteInfo.description} 
       </div>
       {/* <div className="site-title__social">
         <span>
          Sobre mi
         </span>
         <span>
          Instagram
         </span>
       </div> */}
      </h1>
    </header>
  )
}

export default Header

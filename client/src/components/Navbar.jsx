import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'><img src="https://raw.githubusercontent.com/kashfr/top-shottas/6fb98168d259df3338018998f3915e3e6c80b460/NBA_75th_anniversary_logo.svg.png.svg" alt="logo" height="110px" width="130px"></img></Link>
    </div>
  )
}

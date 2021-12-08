import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/teams'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'><img src={logo.name} alt="logo" height="100px" width="100px"></img></Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'><h2>Home</h2></Link>
    </div>
  )
}

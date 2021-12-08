import React from 'react'
import { faFontAwesome, faGithub, faGoogle, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <faFontAwesome icon={faGithub}></faFontAwesome>
      <faFontAwesome icon={faWhatsapp}></faFontAwesome>
      <faFontAwesome icon={faLinkedin} className="hover:text-blue-500"></faFontAwesome>
      <faFontAwesome icon={faGoogle}></faFontAwesome>
    </div>
  )
}

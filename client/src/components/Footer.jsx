import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faCoffee, faWhatsapp, faLinkedin, faGoogle } from "@fortawesome/fontawesome-free-solid";

// import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faFacebook, faTwitter, faWhatsapp, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faGithub, faCoffee,  } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faGithub, faCoffee, faWhatsapp, faLinkedin, faGoogle)

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="flex text-5xl"> */}
      <FontAwesomeIcon icon={faFacebook} size="3x"/>
      {/* <FontAwesomeIcon icon={faInstagram} size="3x"/> */}
      {/* <FontAwesomeIcon icon={faYoutube} size="3x"/> */}
      <FontAwesomeIcon icon={faTwitter} size="3x" className="hover:text-green-500"/>
      {/* <FontAwesomeIcon icon={faWhatsapp} size="3x" className="hover:text-green-500"/> */}
      <FontAwesomeIcon icon={faLinkedin} size="3x" className="hover:text-blue-500"/>
        {/* </div> */}
    </div>
  )
}

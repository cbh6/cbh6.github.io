import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './style.css'

const SocialLinks = () => {
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cbh6"
      >
        <FontAwesomeIcon className="social-icons animate-icons" icon={faGithub} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/cribh6"
      >
        <FontAwesomeIcon className="social-icons animate-icons" icon={faTwitter} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cristian-botella-hurtado-5aba55140/"
      >
        <FontAwesomeIcon className="social-icons animate-icons" icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@cri.bh6"
      >
        <FontAwesomeIcon className="social-icons animate-icons" icon={faMedium} />
      </a>
    </div>
  )
}

export default SocialLinks

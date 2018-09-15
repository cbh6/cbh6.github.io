import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faMedium,
  faLinkedin,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import './style.css'

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cbh6"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/cribh6"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cristian-botella-hurtado-5aba55140/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@cri.bh6"
      >
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/8938708/cbh6"
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
    </div>
  )
}

export default SocialLinks

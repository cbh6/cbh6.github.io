import React from 'react'
import './style.css'

const SocialLinks = () => {
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cbh6"
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/cribh6"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cristian-botella-hurtado-5aba55140/"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@cri.bh6"
      >
        <i className="fab fa-medium" />
      </a>
    </div>
  )
}

export default SocialLinks

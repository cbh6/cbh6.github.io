import React from 'react'
import SocialLinks from '../../components/SocialLinks'
import './style.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hi, I`m Cristian Botella</div>
          <div className="tagline">A software web developer</div>
          <SocialLinks />
        </div>
      </main>
    </div>
  )
}

export default LandingPage

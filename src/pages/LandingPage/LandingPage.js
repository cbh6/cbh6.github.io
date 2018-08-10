import React from 'react'
import SocialLinks from '../../components/SocialLinks'
import './style.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I´m Cristian!</div>
          <div className="tagline">Web developer</div>
          <SocialLinks />
        </div>
      </main>
    </div>
  )
}

export default LandingPage

import React from 'react'
import SocialLinks from '../../components/SocialLinks'
import './style.css'

const LandingPage = () => {
  return (
    <section className="landing-page">
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hi, I`m Cristian Botella</div>
          <div className="tagline">
            A <span className="highlight">software web developer</span>{' '}
            passionated about <span className="highlight">JavaScript</span>{' '}
            ecosystem
          </div>
          <SocialLinks />
        </div>
      </main>
    </section>
  )
}

export default LandingPage

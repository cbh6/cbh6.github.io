import React, { Component } from 'react'
import StarsBackground from './components/StarsBackground'
import LandingPage from './pages/LandingPage'
import PublicationsPage from './pages/PublicationsPage'
class App extends Component {
  render() {
    return (
      <div>
        <StarsBackground />
        <LandingPage />
        <PublicationsPage />
      </div>
    )
  }
}

export default App

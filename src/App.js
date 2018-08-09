import React, { Component } from 'react'
import StarsBackground from './components/StarsBackground'
import LandingPage from './pages/LandingPage'
class App extends Component {
  render() {
    return (
      <div>
        <StarsBackground />
        <LandingPage />
      </div>
    )
  }
}

export default App

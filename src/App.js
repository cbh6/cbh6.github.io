import React, { Component } from 'react'
import StarsBackground from './components/StarsBackground'
import LandingPage from './pages/LandingPage'
import PostsPage from './pages/PostsPage'
class App extends Component {
  render() {
    return (
      <div>
        <StarsBackground />
        <LandingPage />
        <PostsPage />
      </div>
    )
  }
}

export default App

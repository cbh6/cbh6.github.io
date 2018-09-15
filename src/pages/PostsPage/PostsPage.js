import React, { Component } from 'react'
import './style.css'

class PostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // fetch(
    //   'https://cors-anywhere.herokuapp.com/https://medium.com/@cri.bh6/latest'
    // )
    //   .then(response => response.json())
    //   .then(posts => {
    //     console.log(posts)
    //     this.setState({ posts })
    //   })
  }

  render() {
    return (
      <div className="portfolio-page">
        <div className="content-grid">
          <h1>Posts</h1>
          <div className="portfolio-wrapper">
            {/* <PortfolioItem /> */}
            {/* {portfolioItems.map((item, i) => (
              <PortfolioItem render={item.render} key={i} />
            ))} */}
          </div>
        </div>
      </div>
    )
  }
}

export default PostsPage

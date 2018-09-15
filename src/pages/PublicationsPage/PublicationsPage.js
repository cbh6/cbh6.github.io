import React, { Component } from 'react'
import RSSParser from 'rss-parser'
import './style.css'

class PublicationsPage extends Component {
  state = {
    publications: []
  };

  componentDidMount() {
    let parser = new RSSParser()
    parser.parseURL(
      'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@cri.bh6',
      (err, feed) => {
        if (err) console.log(err)
        console.log(feed)
        const publications = feed.items
        this.setState({ publications })
      }
    )
  }

  render() {
    return (
      <div className="publications-page">
        <div className="content-grid">
          <h1>Publications</h1>
          <div className="publications-wrapper">
            {this.state.publications.map((item, i) => {
              return (
                <div key={i} className="publication-item">
                  <div className="publication-item__title">{item.title}</div>
                  <img
                    src={
                      item['content:encoded']
                        .split(' ')
                        .find(element => element.includes('src='))
                        .split('"')[1]
                    }
                    alt=""
                  />
                  <div className="publication-item__desc">
                    {item.categories}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PublicationsPage

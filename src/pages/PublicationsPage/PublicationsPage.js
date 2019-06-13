import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RSSParser from 'rss-parser'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Tag from '../../components/Tag/Tag'
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
      <Grid fluid className="content-grid">
        <Row center="xs">
          <SectionHeader>Publications</SectionHeader>
        </Row>
        <Row center="xs" xs={6} lg={6}>
          {!this.state.publications.length ? (
            <p>Loading publications ...</p>
          ) : (
            this.state.publications.map((item, i) => {
              return (
                <Col key={i} className="publication-item">
                  <h2 className="publication-item__title">{item.title}</h2>
                  <img
                    className="publication-item__img"
                    src={
                      item['content:encoded']
                        .split(' ')
                        .find(element => element.includes('src='))
                        .split('"')[1]
                    }
                    alt="Publication covers"
                  />
                  <Row center="xs">
                    {item.categories.map((category, index) => (
                      <Col key={index} className="publication-item__tag">
                        <Tag text={category} />
                      </Col>
                    ))}
                  </Row>
                </Col>
              )
            })
          )}
        </Row>
      </Grid>
    )
  }
}

export default PublicationsPage

import React, { Component } from 'react';
import Card from './card'
class News extends Component {

  state = {
    news: []
  }


  componentDidMount() {
    const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-28&sortBy=publishedAt&apiKey=b2c04a557c9a440b9c08d7682cba9d9c"
    const config = {
      header: { accept: "application/json" },
      method: 'GET'
    }

    fetch(url, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        this.Save(data)
      })
      .catch((err) => { console.log(err) });


  }
  Save = (data) => {
    this.setState({
      news: data.articles
    })
  }
  render() {

    return (
      <div>
        {
          this.state.news.map((item) => {
            return <Card img={item.urlToImage} title={item.title} description={item.description} />
          })
        }
      </div>

    )

  }
}
export default News;
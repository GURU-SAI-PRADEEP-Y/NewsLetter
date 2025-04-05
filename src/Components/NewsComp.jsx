import React, { Component } from 'react'
import NewLetter from './NewLetter'

export default class NewsComp extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aee2e184d5ac4e6facb45cc282f6d7af"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <center><h1>Vartha Samachar - Top Headlines</h1></center>
                    <div className="row my-3">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewLetter title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage} url={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

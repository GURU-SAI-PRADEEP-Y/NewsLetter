import React, { Component } from 'react'
import NewLetter from './NewLetter'

export default class NewsComp extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2025-04-04&to=2025-04-04&sortBy=popularity&apiKey=aee2e184d5ac4e6facb45cc282f6d7af&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }

    handlePrevClick = async () => {
        console.log("Prev");
        let url = `https://newsapi.org/v2/everything?q=apple&from=2025-04-04&to=2025-04-04&sortBy=popularity&apiKey=aee2e184d5ac4e6facb45cc282f6d7af&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
        this.setState({ page: this.state.page - 1 });


    }
    handleNextClick = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResult / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=apple&from=2025-04-04&to=2025-04-04&sortBy=popularity&apiKey=aee2e184d5ac4e6facb45cc282f6d7af&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ articles: parsedData.articles });
            this.setState({ page: this.state.page + 1 });
        }
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
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

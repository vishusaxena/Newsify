import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'

export default class News extends Component {
   static defaultProps={
          country:'in',
          pageSize:12,
          category:'science'
   }
   static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
   }


    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading:false
        }
    }
    async componentDidMount() {
        this.setState({
            loading:true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91af72335abf4498a8a495f6bfb2d0fb&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading:false})
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) 
        {this.setState({
            loading:true
        })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91af72335abf4498a8a495f6bfb2d0fb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        }
    }
    handlePrevClick = async () => {
        this.setState({
            loading:true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91af72335abf4498a8a495f6bfb2d0fb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })

    }
    render() {
        return (
            <div className="container my-3">
                <h2>Newsify-Top Headlines</h2>
               { this.state.loading&&<Loading/>}
                <div className="row">
                    {!this.state.loading&&this.state.articles.map((element) => {

                        return <div className="col" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>


                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page <= 1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button type="button" class="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

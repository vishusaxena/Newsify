import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    


    constructor() {
        super();
        this.state = {
            articles: [],
            page:1
        }
    }
   async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=91af72335abf4498a8a495f6bfb2d0fb&pageSize=20";
        let data=await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
    handleNextClick=async()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=91af72335abf4498a8a495f6bfb2d0fb&page=${this.state.page+1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData= await data.json();
     
             this.setState({
                page:this.state.page+1,
                articles:parsedData.articles
             })
            }
    }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=91af72335abf4498a8a495f6bfb2d0fb&page=${this.state.page-1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData= await data.json();
     
             this.setState({
                page:this.state.page-1,
                articles:parsedData.articles
             })

    }
    render() {
        return (
            <div className="container my-3">
                <h2>Newsify-Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element) => {
                   
                     return   <div className="col" key={element.url}>
                            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>

                    
                })}
                </div>
                 <div className='container d-flex justify-content-between'>
                 <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                 <button type="button" class="btn btn-dark" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} onClick={this.handleNextClick}>Next &rarr;</button>
                 </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "A peek inside Alphabet's $7 billion growth-stage investing arm, CapitalG | TechCrunch",
            "description": "Almost a year ago, Alphabet’s growth stage venture arm, CapitalG, named partner Laela Sturdy as its new head, just as the unit's founder, David Lawee,",
            "url": "https://techcrunch.com/2024/02/16/a-peek-at-how-things-work-today-inside-alphabets-7-billion-growth-stage-investing-arm-capitalg/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/LaelaSturdy_CapitalG-2022-AJPHOTOGRAPHER.jpg?resize=1200,857",
            "publishedAt": "2024-02-17T06:21:48Z",
            "content": "Almost a year ago, Alphabets growth stage venture arm, CapitalG, named partner Laela Sturdy as its new head, just as the unit’s founder, David Lawee, stepped down.\r\nFew were surprised Sturdy was prom… [+9787 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Amazon and SpaceX are quietly trying to demolish national labor law | TechCrunch",
            "description": "Amazon alleged in a legal filing published Friday morning that the National Labor Relations Board (NLRB) is unconstitutional. SpaceX and Trader Joe's --",
            "url": "https://techcrunch.com/2024/02/16/amazon-and-spacex-are-quietly-trying-to-demolish-national-labor-law/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-535059003.jpg?w=1024",
            "publishedAt": "2024-02-16T23:44:46Z",
            "content": "Amazon alleged in a legal filing published Friday morning that the National Labor Relations Board (NLRB) is unconstitutional. SpaceX and Trader Joe’s — companies that, like Amazon, have repeatedly fa… [+1933 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Can't decide between Bluesky, Mastodon and Nostr? Nootti's new app lets you post to all three | TechCrunch",
            "description": "Managing a social presence these days can be tough. It's even tougher for those who are experimenting with the new wave of Twitter-like services, like",
            "url": "https://techcrunch.com/2024/02/16/cant-decide-between-bluesky-mastodon-and-nostr-noottis-new-app-lets-you-post-to-all-three/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/nootti-app-store.jpg?resize=1200,608",
            "publishedAt": "2024-02-16T22:13:14Z",
            "content": "Managing a social presence these days can be tough. It’s even tougher for those who are experimenting with the new wave of Twitter-like services, like Mastodon, Nostr, and Bluesky, where staying acti… [+3390 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Video game startups might be a bright spot for VC in 2024 | TechCrunch",
            "description": "Video game startups weren't immune to recent market pressures, but the industry heads into 2024 on better footing than some sectors.",
            "url": "https://techcrunch.com/2024/02/16/video-game-startups-venture-capital-2024/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-936151416.jpg?resize=1200,1200",
            "publishedAt": "2024-02-16T20:30:52Z",
            "content": "The global video game industry makes more money each year than movies and music combined. But that doesn’t mean the sector was immune to the macroeconomic impacts of the last few years. Gaming compan… [+5421 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Yes, Threads is running a fact-checking program, but the system isn't fully rolled out | TechCrunch",
            "description": "Threads, Meta's Twitter-like service and competitor to X, may be distancing itself from politics, but that doesn't mean it won't try to tackle the",
            "url": "https://techcrunch.com/2024/02/16/yes-threads-is-running-a-fact-checking-program-but-the-system-isnt-fully-rolled-out/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/Threads-GettyImages-1524134312.jpg?resize=1200,800",
            "publishedAt": "2024-02-16T20:16:31Z",
            "content": "Threads, Meta’s Twitter-like service and competitor to X, may be distancing itself from politics, but that doesn’t mean it won’t try to tackle the misinformation that spreads across social media — pa… [+4305 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "What we expect from MWC 2024 | TechCrunch",
            "description": "In a little over a week’s time (February 26-29) around 85,000 or so attendees will descend upon the Fira de Barcelona for Mobile World Congress 2024. Over",
            "url": "https://techcrunch.com/2024/02/16/what-we-expect-from-mwc-2024/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/20230228_163252.jpg?resize=1200,900",
            "publishedAt": "2024-02-16T20:14:37Z",
            "content": "In a little over a weeks time (February 26-29) around 85,000 or so attendees will descend upon the Fira de Barcelona for Mobile World Congress 2024. Over the past few years, the show has become argua… [+5555 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Tech giants sign voluntary pledge to fight election-related deepfakes | TechCrunch",
            "description": "A number of tech giants have signed an accord pledging to take measures to prevent the spread of deepfakes on their platforms and tools.",
            "url": "https://techcrunch.com/2024/02/16/tech-giants-sign-voluntary-pledge-to-fight-election-related-deepfakes/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1470340715.jpg?resize=1200,802",
            "publishedAt": "2024-02-16T19:56:13Z",
            "content": "Tech companies are pledging to fight election-related deepfakes as policymakers amp up pressure.\r\nToday at the Munich Security Conference, vendors including Microsoft, Meta, Google, Amazon, Adobe and… [+3507 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Alex Wilhelm, Theresa Loconsolo, Mary Ann Azevedo and Karyne Levy",
            "title": "Foundry is shutting down in slow motion | TechCrunch",
            "description": "The Equity crew is highlighting deals of the week, YC's new call for startups, Foundry Group's exit, and venture capital's year of transition.",
            "url": "https://techcrunch.com/2024/02/16/foundry-shutting-down/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/GettyImages-BF1180-001.jpg?resize=1200,956",
            "publishedAt": "2024-02-16T19:52:16Z",
            "content": "For episode transcripts and more, head to Equitys Simplecast website.\r\nEquity drops at 7 a.m. PT every Monday, Wednesday and Friday, so subscribe to us on Apple Podcasts, Overcast, Spotify and all th… [+34176 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aria Alamalhodaei",
            "title": "The hard tech renaissance accelerates as YC spotlights space, manufacturing and defense | TechCrunch",
            "description": "Y Combinator puts hard tech in the spotlight in its new request for startups list.",
            "url": "https://techcrunch.com/2024/02/16/the-hard-tech-renaissance-accelerates-as-yc-spotlights-space-manufacturing-and-defense/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/yc-space-manufacturing.jpg?resize=1200,675",
            "publishedAt": "2024-02-16T19:16:01Z",
            "content": "Y Combinator is putting hard-tech in the spotlight. On Wednesday, the accelerator released an updated list of ideas it would like to see in applications with categories like space, manufacturing and … [+4318 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Haje Jan Kamps",
            "title": "Poor people need not apply for this dating app | TechCrunch",
            "description": "Just when you thought the dating scene couldn't get any more exclusive, along comes Score, the dating app for those with good to excellent credit.",
            "url": "https://techcrunch.com/2024/02/16/poor-people-need-not-apply-for-this-dating-app/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1131615694.jpg?resize=1200,800",
            "publishedAt": "2024-02-16T01:29:53Z",
            "content": "Welcome to Startups Weekly your weekly recap of everything you cant miss from the world of startups. Sign up here to get it in your inbox every Friday.\r\nIm having one of those weeks where Im just con… [+8252 chars]"
        }
    ]


    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Newsify-Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element) => {
                   
                     return   <div className="col" key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>

                    
                })}
                </div>

            </div>
        )
    }
}

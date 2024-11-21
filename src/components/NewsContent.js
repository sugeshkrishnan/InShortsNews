import React from 'react'
import Container from '@mui/material/Container';
import './NewsContent.css';

const NewsContent = ({ newsArray, newsResult, loadmore, setLoadmore }) => {
  return (
    <Container>
      <div className='content'>
        <div className='downloadMsg'>
          <span className='downloadText'>
            For the best experience use <a target="_blank" href="https://inshorts.com/mobile" >inshorts</a> app on your smartphone
          </span>
          <img style={{ cursor: "pointer" }} src='https://assets.inshorts.com/website_assets/images/appstore.png' height="80%" />
          <img style={{ cursor: "pointer" }} src='https://assets.inshorts.com/website_assets/images/playstore.png' height="80%" />

        </div>
        <div>
          {
            newsArray.map((newsItem) => {
              console.log(newsItem); // Debugging
              const date = new Date(newsItem.publishedAt);
              return (
                <div className='newscard'>
                  <img className='newsImage'
                    key={newsItem.title} // Ensure each item has a unique key for React
                    alt={newsItem.title}
                    src={newsItem.urlToImage}
                  />
                  <div className='newsText'>
                    <div classname='newsheading'>
                      <div>
                        <a href={newsItem.url} target="_blank">
                          <span className='title'>
                            {newsItem.title}

                          </span>
                        </a>
                      </div>
                      <div>
                        <span className='author'>

                          <b>short</b>{" "}by {newsItem.author ? newsItem.author : "unknown"} on {date.toLocaleString()}

                        </span>
                      </div>
                    </div>
                    <div className='lowerNews'>
                      <div className='description'>
                        {newsItem.description}
                      </div>

                      <span className='readmore'>
                        read more at {" "}
                        <a href={newsItem.url} target="_blank">
                          <b>{newsItem.source.name}</b>
                        </a>
                      </span>

                    </div>

                  </div>

                </div>


              );
            })
          }
        </div>
        {
          loadmore <= newsResult &&(

            <>
           
            <button className='loadMore' 
            onClick={() => setLoadmore(loadmore +20)}> Load More</button>
             <hr />
            
            </>
          )
        }


      </div>

    </Container>
  )
}

export default NewsContent
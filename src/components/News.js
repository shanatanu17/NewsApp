import React from 'react'
import Newsitem from './Newsitem'

import Mspinner from './Mspinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react'
import { useState } from 'react'



const News  =(props)=>{

  const [articles,setArticles]  =useState([]);
  const [loading,setLoading] =useState(true);
  const [page,setPage] =useState(1);
  const [totalResults,setTotalResults] =useState(0);




  const capitalize =(string) =>{
    let update=  string.toLowerCase();
    return update.charAt(0).toUpperCase() + update.slice (1)
}

// document.title = `${capitalize(props.category)} - NewsMonkey`;
  
 
  


  const  updateNews=async()=>{

        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);

        
        let parsedata =  await data.json();
        props.setProgress(70);

        // console.log(parsedata);

        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults);
        setLoading(false)
        props.setProgress(100);
  }
  
  useEffect(()=>{
    updateNews();

  },[])
  


   const fetchMoreData =async()=>{
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}}`;
     setPage(page+1);

    let data = await fetch(url);
    
    let parsedata =  await data.json();
    // console.log(parsedata);

    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  };


  
    return (

      <>

            <h1 className='text-center my-5'> NewsMonkey - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Mspinner/>}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults &&articles.length <totalResults }
          loader={<Mspinner/>}
>

            
                <div className="container">
                    <div className="row ">
                        {articles.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem  title={element.title}  description ={element.description} imageurl={element.urlToImage} newsurl ={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                            </div>
                         })}
                    </div>
             </div>
      </InfiniteScroll>
    
</>

)
}

News.defaultProps = {
  country : 'in',
  pagesize : 8,
  category:'general'
}
  

News.propTypes = {
  country : PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

export default News

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import HeadlinesNews from "./HeadlinesNews"

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(2)
  const [totalResults, setTotalResults] = useState(0)



  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };



  const updateNews = async () => {

    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
     
    setPage(page + 1);
    props.setProgress(100);
  }

 

  useEffect(() => {
    document.title = `${capitalizeFirst(props.category)} - EnewsDelta`;
    updateNews();
    setPage(page + 1);
  }, [])


  const fetchMoreData = async () => {
     setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    


  };

  return (

    <>  
        <div className="" style={{ background: "url(https://img.freepik.com/premium-photo/pastel-watercolor-texture-abstract-background_34268-33.jpg?size=626&ext=jpg&ga=GA1.2.637354507.1690955929&semt=ais)no-repeat center center/cover" , paddingBottom:"18px"}}>
      <h1 className="text-center " style={{ padding: "72px 0px 10px 0px" ,fontFamily:"'Lobster', cursive" }}>
        {" "}
        News Hub - Top {capitalizeFirst(props.category)} Headlines
      </h1>
            {loading && <Spinner />}
         <HeadlinesNews apikey={props.apikey} category={props.category}/>
         </div>
         <div style={{background:"url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg) no-repeat center center/cover"}}>
         <h2 className="text-center " style={{ padding: "30px 0px", marginTop: "30px" }}> <hr className="p-1" style={{marginTop:"-48px" ,backgroundColor:"#050210"}}/>
        {" "}
       More {capitalizeFirst(props.category)} News
      </h2>

 
    
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container"  >


          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : "unknown"}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>

        </div>

      </InfiniteScroll>
      </div>
    </>
  );

}


News.defaultProps = {
  country: "in",
  pageSize: 0,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;

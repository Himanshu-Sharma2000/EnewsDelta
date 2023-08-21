import React, { useEffect, useState } from "react";
import Headlines from "./Headlines";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const HeadlinesNews = (props) => {

   const[articles , setArticles]=useState([]);
   const [loading, setLoading] = useState(true)


  const updateNews = async () => {

 
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=6`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    setArticles(parseData.articles);
    setLoading(false);
  }



  useEffect(() => {
 
    updateNews();
   
  }, [])




  return (

    <>
        <div className="container">
        <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
             
            {articles.map((element) => {
              return (
                <div className="slider" key={element.url}>
                  <Headlines
                    title={element.title ? element.title.slice(0, 45) : ""}
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
          
          </Carousel>

        </div>


    </>
  );

}





export default HeadlinesNews;

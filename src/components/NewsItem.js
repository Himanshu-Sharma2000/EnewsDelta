import React from "react";

const NewsItem =(props)=> {
  
    let {title , description , imageUrl ,newsUrl ,author ,date , source } = props;
    return (
      <div className="my-4">
        <div className="card" >
           <span className="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{left: "75%",zIndex:"1" }}>
             {source}
            </span>
          <img src={!imageUrl?"https://indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png":imageUrl} className="card-img-top"  id="ant"  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...   </h5>
            <p className="card-text" >
             {description}....
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-info" style={{fontFamily:" 'Dancing Script', cursive"}}>
             <strong> Read More...</strong>
            </a>
          </div> 
        </div>
      </div>
    );
  
}

export default NewsItem;

import React from 'react'

const Headlines = (props) => {
    let {title , description , imageUrl ,newsUrl} = props;
    return (
      <>
  

   <div className="carousel-item active">
      <img src={imageUrl?imageUrl:"https://indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png"} className="rounded mx-auto d-block" style={{width:"900px" ,height:"500px"}} alt="..."/>
      <div className="carousel-caption  d-none d-md-block ">
        <h2 >{title}...</h2>
        <p className='fs-5'>{description}...</p>
        <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-info ">
              Read More...
            </a>
      </div>
    </div>
    </>
    );
}

export default Headlines
import React from 'react'


const About = () => {
  return (
    <>
    <div style={{ background: "url(https://t3.ftcdn.net/jpg/03/45/04/82/360_F_345048267_avDiFyLxvHTqoL47X54tKPlX06im8X9Z.jpg)no-repeat center center/cover" ,paddingBottom:"18px" }}>
   
    <div className="container" >
        <h1 style={{color:"#05053e" , fontSize:"80px",fontFamily: " Ruwudu , cursive",paddingTop:"100px"}}>
            EnewsDelta     
        </h1>
        <p className='fs-5 mb-4' style={{marginTop:"-30px"}}>
        EnewsDelta is a leading online news platform dedicated to bringing you the most up-to-date, relevant, and impactful stories from around the world. Founded in 2023, our team of experienced journalists, writers, and editors strive to uphold the highest standards of journalistic integrity while delivering comprehensive and unbiased news to our global audience.
        </p>
        <h2 style={{color:"#05053e"}}>
            OUR MISSION
        </h2>
        <p>
        To empower our readers with accurate and in-depth information that encourages informed decision-making, fosters conversation, and promotes a more connected global community.
        </p>
    </div>

<div className="container">
    <h2 style={{color:"#05053e"}}>
        What set us apart
    </h2>

      <div className="d-flex flex-column justify-content-evenly my-2 " style={{ fontFamily: "'Edu SA Beginner', cursive" }}>
        <div className=" d-flex container mx-1 text-center mb-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhbrD0SygRG4xaEkiUdB8ePk3JuHGIpH3h-1GCuf2nZYmmJ8TA9OSK2GIhoTv46sHvcI&usqp=CAU" className="img-thumbnail ms-3 mt-3 rounded-circle border border-info" alt="..." width="100" height="100" />
          <div className="mx-3">
            <h3 className='mt-3' style={{ color: "#05053e" }}>Unbiased Reporting </h3>
            <p className='my-2'>Our commitment is to the truth. We approach every story with an open mind and aim to present all sides of an issue.</p>
          </div>
        </div>

        <div className="container d-flex mx-1 text-center mb-3">
          <img src="https://img.freepik.com/premium-vector/process-business-illustration-design-vector-illustration_8499-5037.jpg?w=740" className="img ms-3 rounded-circle border border-info mt-3" alt="..." width="100" height="100" />
          <div className="mx-3">
            <h3 className='mt-3'style={{ color: "#05053e" }}>Global Coverage</h3>
            <p className='my-2'> With correspondents stationed in key locations worldwide, we ensure that no significant story goes untold.</p>
          </div>

        </div>

        <div className="container d-flex mx-1 text-center">
          <img src="https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?size=626&ext=jpg&ga=GA1.2.637354507.1690955929&semt=sph" className="img ms-3 rounded-circle border border-info mt-3" alt="..." width="100" height="100" />
          <div  className="mx-3">
            <h3 className='mt-3'style={{ color: "#05053e" }}>Innovative Storytelling</h3>
            <p className='my-2'>We embrace the digital age, utilizing multimedia, interactive graphics, and data journalism to bring stories to life.</p>
          </div>

        </div>

        <div className="container d-flex mx-1 text-center">
          <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon.png" className="img ms-3 rounded-circle border border-info mt-3" alt="..." width="100" height="100" />
          <div  className="mx-3">
            <h3 className='mt-3'style={{ color: "#05053e" }}>Community Engagement</h3>
            <p className='my-2'> We believe in the power of community. Our platform facilitates dynamic discussions, and we regularly feature perspectives from our readers.</p>
          </div>

        </div>



      </div>
      </div>
<div className="container mt-4">
    <h2 style={{color:"#05053e"}}>
        Contact us &#9742;
    </h2>
    <p>
    For general inquiries, story tips, or feedback, please reach out to us at<span style={{color:"blue", cursor:"pointer"}}> &#9993; EnewsDelta@email.com.</span>  Visit our Contact page for more specific inquiries or to get in touch with our individual departments.
    </p>
</div>
</div>


    </>
  )
}

export default About
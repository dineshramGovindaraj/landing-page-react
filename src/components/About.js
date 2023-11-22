import React from 'react'
import "./styles/About.css"
const About = () => {
  return (
    <section id="about" >
    <div className="container">
      <h1 className="common-head about-head">About <span className="text-red">Us</span> </h1>
     <p className="about-text"> We Will Help You To Learn Easily With The Guidance Of A Professional Teacher</p>
    <br />
     <p className="about-text">
      Welcome to Our Learen Education Centre</p>
       <div className="d-flex justify-content-evenly row">
        <div className="col-lg-4">
          <div className="card about-card-content">
            <center>
              <img
                className="product-img"
                width="80"
                height="80"
                src={"https://kinforce.net/learen/wp-content/uploads/2022/08/online-education-icons-7G7MVE-1.png"}/>
            </center>
            <h2 className="about-card-body about-card-head">Learn More Anywhere</h2>
            <p className="about-card-body about-card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </div>
        </div>
         <div className="col-lg-4">
          <div className="card about-card-content">
            <center>
              <img
                className="product-img"
                width="80"
                height="80"
                src={"https://kinforce.net/learen/wp-content/uploads/2022/08/online-education-icons-7G7MVE-2.png"}
              />
            </center>
            <h2 className="about-card-body about-card-head">24/7 Strong Support</h2>
            <p className="about-card-body about-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing               </p>
          </div>
        </div>
    </div>
    </div>
  </section>
  )
}

export default About
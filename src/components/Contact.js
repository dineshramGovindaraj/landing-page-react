import React from 'react'
import "./styles/Contact.css"
const Contact = () => {
  return (
    <section id="contact">
      <h1 className="common-head about-head">Contact <span className="text-red">Us</span> </h1>
      <div className="container">
        <div className="d-flex justify-content-evenly row">
          <div className="col-lg-4">
            <div className="card card-content">
              <center>
                <img
                  className="product-img"
                  width="80"
                  height="80"
                  src={"    https://kinforce.net/learen/wp-content/uploads/2022/08/online-education-icons-7G7MVE-2.png"}
                />
              </center>
              <h2 className="card-body card-head">Phone Number</h2>
              <p className="card-body card-text">
                Phone : +88 (0) 101 0000 000 Fax : +88 (0) 202 0000 001
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-content">
              <center>
                <img
                  className="product-img"
                  width="80"
                  height="80"
                  src={"https://kinforce.net/learen/wp-content/uploads/2022/12/online-education-icons-7G7MVE-13.png"}
                />
              </center>
              <h2 className="card-body card-head">Phone Number</h2>
              <p className="card-body card-text">
                75/23 Folsom Ave, Suite 600 San Francisco, CA 94107
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-content">
              <center>
                <img
                  className="product-img"
                  width="80"
                  height="80"
                  src={"https://kinforce.net/learen/wp-content/uploads/2022/08/online-education-icons-7G7MVE-3.png"}
                />
              </center>
              <h2 className="card-body card-head">Phone Number</h2>
              <p className="card-body card-text">
                info@yourdomain.com name@yourdomain.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
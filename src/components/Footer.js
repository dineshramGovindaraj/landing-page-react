import React from 'react'
import "./styles/Footer.css"
const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <br />
        <div class="d-flex justify-content-around fotter-link">
          <div class="footer-card">
            <a class="fotter-text" href="#">Learn Bussiness</a> <br /><br />
            <a class="fotter-text" href="#">Teach on learn</a><br /><br />
            <a class="fotter-text" href="#">Get the app</a>
          </div>
          <div class="footer-card">
            <a class="fotter-text" href="#">Help & Support</a><br /><br />
            <a class="fotter-text" href="#">Careers</a><br /><br />
            <a class="fotter-text" href="#">Investor Relationship</a>
          </div>
          <div class="footer-card">
            <a class="fotter-text" href="#">Terms and Services</a><br /><br />
            <a class="fotter-text" href="#">Privacy Policy</a><br /><br />
            <a class="fotter-text" href="#">Disclosures</a>
          </div>
        </div>

        <hr />
        <div class="fotter-right">
          <p>Copyright © 2023 <span class="footer-green">Learen</span> All rights reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer  
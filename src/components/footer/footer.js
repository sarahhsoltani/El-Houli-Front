import React from 'react'
import './footer.css'

const Footer = () => {
  return(
    <footer className="mt-5">
        <div className="col-md-12 p-4">
            <div className="row">
                <div className="col-md-3">
                    <h5>A propos El Houli</h5>
                    <img src="/image/logBrand.png "  alt="log" className="my-4"/> 
                    <p>El Khomssa est une équipe passionée par la création artisanale et traditionnelle.24 Rue de Golf Megrine la Perle, Ben Arous, Tunisie TEL:(+216) 24 193 830</p>
                </div>
                <div className="col-md-3">
                    <h5>Informations</h5>
                    <ul>
                        <li>Acceuil</li>
                        <li>À propos </li>
                        <li>Collections</li>
                        <li>Blog</li>
                        <li>Cart</li>
                        <li>Contact</li>
                       
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>contacter nous</h5>
                    <p> <i class="fas fa-map-marker-alt"></i> Address: Michael I. Days 3756 Preston Street Wichita,KS 67213 </p>
                    <p> <i class="fas fa-phone-volume"></i> Phone: +1-888 705 770</p>
                    <p><i class="fas fa-envelope-open-text"></i>  Email: contactinfo@gmail.com</p>
                 </div>
                <div className="col-md-3">
                    <h5>newsletter</h5>
                    <form className='d-flex mb-5 mt-3'>
                      <input  type="text" className="form-control  " />
                      <button className="btn btn-descover">S'abonner</button>
                      </form>
                      <div className="col-md-3 col-sm-6 col-6 text-center d-flex ">
                       <p ><i class="fab fa-facebook-f   me-4 footer-icon "></i></p>
                       <p ><i class="fab fa-google-plus-g  me-4 footer-icon "></i></p>
                      <p > <i class="fab fa-youtube  me-4  footer-icon"></i></p>
                     <p > <i class="fab fa-twitter  me-4 footer-icon"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   )

 }

export default Footer
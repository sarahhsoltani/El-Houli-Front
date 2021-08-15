import React from 'react'
import './header.css'

import {Form, FormControl,Nav} from 'react-bootstrap'
import {Link} from "react-router-dom"
function Header() {
    return (
      <div>
           {/* *********** Strat Section 1  *********/}
              
           <div className="level bg-dark">
            <div className="col-md-12">
                <div className="row pt-2">
                    <div className="col-md-3 col-sm-6 col-6 level-box "><p> <i className="fas fa-phone-volume lev"></i>Appeler-nous +216 25505632</p></div>
                    <div className="col-md-3 col-sm-6 col-6 level-box "> <p><i className="fab fa-opencart lev "></i>   Livraison GRATUITE à partir de 200 dt </p></div>
                    <div className="col-md-3 col-sm-6 col-6 level-box "> <p><i className="fas fa-user-circle lev "></i>  Se Connecter</p> </div>
                    <div className="col-md-3 col-sm-6 col-6 level-box  d-flex ">
                       <i className="fab fa-facebook-f  level-icon me-4"></i>
                       <i className="fab fa-google-plus-g level-icon  me-4"></i>
                       <i className="fab fa-youtube level-icon  me-4"></i>
                       <i className="fab fa-twitter  level-icon me-4"></i>
                    </div>
                </div>
            </div>
        </div>
         {/*********** End Section 1  ********/}
         {/*********** Start Section 2 Navbar  ********/}
         <Nav className="navbar navbar-expand-lg navbar-light bg-nav">
           <div className="container-fluid">
              <a className="navbar-brand" href="nn"><img className="logBrand" src="/image/logBrand.png" alt="logo"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
              <Form inline className="d-flex ms-5  me-6">
                <FormControl  className="input-search" type="text" placeholder="Type movie or tv show name to find it"  />
                <button className="btnn search btn-red"> <i className="fas fa-search"></i></button>
              </Form>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="nav-item ">
                     <Link to="/" className="nav-link active" aria-current="page" href="nnn">Boutique</Link>
                  </li>
                  <li className="nav-item ms-4">  
                      <Link to="/propos" className="nav-link" href="nnn">À propos</Link>
                  </li>
                  <li className="nav-item ms-4">
                      <Link to="/collection" className="nav-link" aria-current="page" href="nnn">Collections</Link>
                  </li>
                  <li className="nav-item ms-4">
                      <Link to="/blog"  className="nav-link " aria-current="page" href="nnn">Blog</Link>
                  </li>
                  <li className="nav-item ms-4"> 
                      <a className="nav-link " aria-current="page" href="nnn">Cart  <i className="fas fa-shopping-basket"></i></a>
                  </li>
                  <li className="nav-item ms-4">
                      <a className="nav-link " aria-current="page" href="nnn">Contact</a>
                  </li>
              </ul>
           
            </div>
           </div>
        </Nav>
       
        
      </div>
    )
}
export default Header
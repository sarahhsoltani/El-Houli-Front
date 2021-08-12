import React from 'react'
import './header.css'

import {Form, FormControl,Nav} from 'react-bootstrap'
function Header() {
    return (
      <div>
           {/* *********** Strat Section 1  *********/}
              
           <div className="level bg-dark">
            <div className="col-md-12">
                <div className="row pt-2">
                    <div className="col-md-3 col-sm-6 col-6 level-box "><p>Appeler-nous +216 25505632</p></div>
                    <div className="col-md-3 col-sm-6 col-6 level-box "> <p><i class="fab fa-opencart  level-icon level-icon "></i>   Livraison GRATUITE à partir de 200 dt </p></div>
                    <div className="col-md-3 col-sm-6 col-6 level-box "> <p><i class="fas fa-user-circle level-icon level-icon "></i>  Se Connecter</p> </div>
                    <div className="col-md-3 col-sm-6 col-6 level-box  d-flex ">
                       <i class="fab fa-facebook-f  level-icon me-4"></i>
                       <i class="fab fa-google-plus-g level-icon  me-4"></i>
                       <i class="fab fa-youtube level-icon  me-4"></i>
                       <i class="fab fa-twitter  level-icon me-4"></i>
                    </div>
                </div>
            </div>
        </div>
         {/*********** End Section 1  ********/}
         {/*********** Start Section 2 Navbar  ********/}
         <Nav class="navbar navbar-expand-lg navbar-light bg-nav">
           <div class="container-fluid">
              <a class="navbar-brand" href="nn"><img className="logBrand" src="/image/logBrand.png" alt="logo"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <Form inline className="d-flex ms-5  me-6">
                <FormControl  className="input-search" type="text" placeholder="Type movie or tv show name to find it"  />
                <button className="btnn search btn-red"> <i className="fas fa-search"></i></button>
              </Form>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0">
                  <li class="nav-item ">
                      <a class="nav-link active" aria-current="page" href="nnn">Boutique</a>
                  </li>
                  <li class="nav-item ms-4">  
                      <a class="nav-link" href="nnn">À propos</a>
                  </li>
                  <li class="nav-item ms-4">
                      <a class="nav-link " aria-current="page" href="nnn">Collections</a>
                  </li>
                  <li class="nav-item ms-4">
                      <a class="nav-link " aria-current="page" href="nnn">Blog</a>
                  </li>
                  <li class="nav-item ms-4"> 
                      <a class="nav-link " aria-current="page" href="nnn">Cart  <i class="fas fa-shopping-basket"></i></a>
                  </li>
                  <li class="nav-item ms-4">
                      <a class="nav-link " aria-current="page" href="nnn">Contact</a>
                  </li>
              </ul>
           
            </div>
           </div>
        </Nav>
       
        
      </div>
    )
}
export default Header
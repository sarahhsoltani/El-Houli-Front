import React from 'react'
import Header from '../header/header'
import "./collection.css"
import {Form} from "react-bootstrap" 
import Footer from '../footer/footer'

const Collection = () => {
  return(
    <div>
        <Header/> 
        <div className="col-md-12">
            <div className="row vedette ">
                <div className="col-md-6 col-sm-6 col-6 pt-5 vedette-two">
                    <h3 className="mb-4 pt-5 ">PRODUITS EN VEDETTE</h3>
                    <p className="paraa">Inspiré par notre vie multiethnique,nous créons <br/> des bijoux  fins  pour
                         partager nos merveilleuses <br/> histoires…</p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 ">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./image/11.jpg" class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Des anneaux</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./image/8.jpg " class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Des colliers</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./image/12.jpg " class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>des boucles d'oreilles</h3>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="container text-center d-flex ms-6">
            <Form.Control className="mt-5 input-search" type="email" placeholder="Enter email"  />
            <i class="fal fa-search mt-5 fa-2x searchh" ></i>
            </div>
            <Footer/>
        </div>
    </div>
   )

 }

export default Collection
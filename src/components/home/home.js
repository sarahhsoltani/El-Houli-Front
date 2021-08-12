import React from 'react'
import Header from '../header/header'
import "./home.css"
 function Home() {
    return (
        <div>
            <Header/>
            <menu>
               {/*********** End Section 2 Navbar  ********/}
                <div className="col-md-12 text-left">
                  
                      <div className="fond text-left">
                         <h1 className="title-one">Des bijous pour tous les couts</h1>
                         <h1 className="title-two">fascinaux,originals</h1>
                         <ul className="pt-3 list">
                            <li><p>Artisanat 100% tunisien</p></li>
                            <li><p>Envoi dans les 24h</p></li>
                            <li><p>Produits de trés haute qualité</p></li>
                            <li><p>Suivi rapproché de nos clients</p></li>
                         </ul>
                         <button className="btn btn-houli mt-3">Profiter & découvrir</button>
                      </div>
                    
                      
                 
                </div>
               {/*********** Start Section 3 menu  ********/}
               {/***********Start Section 4  **************************/}
               <div className="container ">
                  <div className="col-md-12 mt-4">
                      <div className='text-center ' >
                         <h3>Solde de 20% sur tous les produits </h3>
                         <h3> Nouvelle collection tendance</h3>
                         <p>Nous pensons qu'un bon design est toujours de saison</p>
                         <button className="btn btn-achat">ACHETER MAINTENANT</button>
                      </div>
                  </div>
              
                {/*********** End  Section 4  **************************/}
                {/*********** Start  Section 5  **************************/}
                    <div className="row mt-5">
                       <div className="col-md-4 col-sm-12 col-12 box">
                           <div className="d-flex mt-5">
                              <div>
                                  <h5>DESIGN SKETCHES</h5>
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                              <div>
                              <i class="fas fa-pencil-alt fa-2x"></i>
                              </div>
                           </div>
                           {/* ---------2----------- */}
                           <div className="d-flex mt-4">
                              <div>
                                  <h5>DESIGN SKETCHES</h5>
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                              <div>
                              <i class="fab fa-buffer fa-2x"></i>
                              </div>
                           </div>
                           {/* --------------3--------- */}
                           <div className="d-flex mt-4">
                              <div>
                                  <h5>DESIGN SKETCHES</h5>
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                              <div>
                              <i class="far fa-box-full fa-2x"></i>
                              </div>
                           </div>
                       </div>
                       <div className="col-md-4 col-sm-12 col-12">
                           <img src="/image/hand.png" alt="hand"/>
                       </div>
                       <div className="col-md-4 col-sm-12 col-12 box">
                           <div className="d-flex mt-5">
                              <div>
                              <i class="fas fa-hourglass-half fa-2x"></i>
                              </div>
                              <div>
                                  <h5>POTERIE FAIT MAIN</h5>
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                             
                           </div>
                           {/* ---------2----------- */}
                           <div className="d-flex mt-4">
                           <div>
                              <i class="far fa-gem fa-2x "></i>
                              </div>
                              <div>
                                  <h5>DESIGN SKETCHES</h5>
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                             
                           </div>
                           {/* --------------3--------- */}
                           <div className="d-flex mt-4">
                              <div>
                              <i class="fas fa-heart fa-2x"></i>
                              </div>
                              <div>
                                  <h5>DESIGN SKETCHES</h5>
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                              
                           </div>
                       </div>
                    </div>
                  {/*********** End  Section 5  **************************/}
                  {/*********** Start  Section 6  **************************/}
                    <div>
                        <h2>Nos Nouveautés</h2>
                        <p> Découvrez nos tous derniers articles</p>
                        <p>Des bijoux & Accessoires originales avec des prix imbattables</p>
                    </div>
                            {/*********** Our Cards *************/}
                  {/*********** End  Section 6  **************************/}
                </div>
                   {/*********** Start  Section 7  **************************/}
                   <div className="box-item text-left mt-5 p-4">
                      <h3>EMBALLAGE SPÉCIAL </h3>
                      <p>Un emballage en bois avec un design authentique qui  <br/>  pourrait êtreréutiliser pour vos accessoires et bijoux</p>
                      <button className="btn btn-explore ">exploiter nos produits</button>
                  </div>
                  {/*********** End  Section 7  **************************/}
                  {/*********** Start  Section 8  **************************/}
                   <div className="container">
                       <div>
                           <img src="" alt="tof"/> 
                       </div>
                   </div>
                  {/*********** End  Section 8 **************************/}
         </menu>
        </div>
    )
}
export default Home
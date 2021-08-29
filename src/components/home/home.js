import React ,{useEffect}from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import "./home.css"
import { useDispatch, useSelector } from 'react-redux'
import {Card,Button} from "react-bootstrap"
import { getRecentPubs } from '../../redux/actions/produit'
 function Home() {
    const product = useSelector((state) => state.productReducer.pubs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecentPubs())
           }, [dispatch])
        console.log("products",product)
        
    return (
        <div>
            <Header/>
            <menu>
               {/*********** End Section 2 Navbar  ********/}
                {/* <div className="col-md-12 text-left">
                  
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
                    
                      
                 
                </div> */}
                <div className="col-md-12">
                    <div className='row'>
                        <div className="col-md-5">
                        <div className=" text-left">
                         <h1 className="title-one">Des bijous pour tous les couts fascinaux,originals</h1>
                         <ul className="pt-3 list">
                            <li><p>Artisanat 100% tunisien</p></li>
                            <li><p>Envoi dans les 24h</p></li>
                            <li><p>Produits de trés haute qualité</p></li>
                            <li><p>Suivi rapproché de nos clients</p></li>
                         </ul>
                         <button className="btn btn-houli mt-3">Profiter & découvrir</button>
                      </div>
                        </div>
                        <div className="col-md-7 fond">
                            
                        </div>
                    </div>
                </div>
               {/*********** Start Section 3 menu  ********/}
               {/***********Start Section 4  **************************/}
               <div className="container ">
                  <div className="col-md-12 mt-4">
                      <div className='text-center ' >
                         <h3>Solde de 20% sur tous les produits 
                        Nouvelle <br/> collection tendance</h3>
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
                    <div className="text-center">
                        <h1>Nos Nouveautés</h1>
                        <p> Découvrez nos tous derniers articles
                        Des bijoux & Accessoires <br/> originales avec des prix imbattables</p>
                    </div>
                            {/*********** Our Cards *************/}
                        <div className="d-flex">
                        {
                              product.map((el,key)=>(
                                <Card style={{ width: '18rem' }} key={key}>
                                <Card.Img variant="top"  className="w-50 h-50"  src={el.image} />
                                <Card.Body>
                                  <Card.Title>{el.title}</Card.Title>
                                  <Card.Text>
                                    {el.price}
                                  </Card.Text>
                                  <Button variant="primary">Voir détails</Button>
                                </Card.Body>
                              </Card>
                              ))
                          }
                        </div>
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
                   <div className="row mt-5 section-eight">
                       <div className="col-md-7 col-sm-6 col-6 photo-women">
                          <img className="p w-75" src="/image/2.jpg" alt="hand"/> 
                       </div>
                       <div className="col-md-5 col-sm-6 col-6 mt-5">
                          <h1 >Antique Colliers de diamants</h1>
                          <h6>belles couleurs. Excellente qualité.</h6>
                          <button className="btn btn-descover px-5">Découvrir</button>
                       </div>
                    </div>
                  {/*********** End  Section 8 **************************/}
                     {/*********** Start  Section 9  **************************/}
                     <div className="row mt-5 section-eight">
                        <div className="col-md-5 col-sm-6 col-6 mt-5">
                           <h1 className="match">Match parfait pour chaque occasion...</h1>
                           <h6>Coordonner avec d'autres pièces de la collection pour un look classique.</h6>
                           <button className="btn btn-descover px-5">Découvrir</button>
                       </div>
                       <div className="col-md-7 col-sm-6 col-6 photo-women">
                           <img className="p w-75" src="/image/1.jpg" alt="hand"/> 
                       </div>
                     
                    </div>
                  {/*********** End  Section 9 **************************/}
                   {/*********** Start  Section 10  **************************/}
                   <div className="mt-5">
                       <h1>Coups De <i class="fas fa-heart"></i>  L'houli</h1>
                       <p>Inspiré par notre vie multiethnique,nous créons des bijoux fins pour partager <br/> nos merveilleuses histoires…</p>
                   </div>
                   <div className="section-ten mt-5">
                      <div className='row'>
                         <div className="col-md-5 col-sm-6 col-6">
                            <img src="/image/4.jpg" alt="collection"/>
                         </div>
                         <div className="col-md-7 col-sm-6 col-6"> 
                            <img  src="/image/5.png" className="w-50 img-five " alt="collection"/>
                            <h2 className="collection-title">Collection de bijoux anciens</h2>
                            <ul className="d-flex text-center ms-6">
                                <li>Léger </li>
                                <li className="ms-5">Or 14 carats    </li>
                                <li className="ms-5"> Opale</li>
                            </ul>
                            <button className="btn btn-descover px-5 mt-4">profiter</button>
                         </div>
                      </div>
                   </div>
                  {/*********** End  Section 10 **************************/}
                  {/*********** Start  Section 11 **************************/}
                  <div className="section-eleven mt-5 text-center pt-5">
                      <h6>Inscrivez vous à notre Newsletter</h6>
                      <h1>ET RECEVEZ DES COUPONS DE RÉDUCTION</h1>
                      <form className='d-flex mb-5 mt-3'>
                      <input  type="text" className="form-control ms-6 " />
                      <button className="btn btn-descover">S'abonner</button>
                      </form>
                      <p>* Offre valable dans la limite des stocks disponibles</p>

                  </div>
                  {/*********** End  Section 11 **************************/}
                  {/*********** Start  Section 12 **************************/}
                  <div className="section-twelve mt-5">
                      <h1>Nos atouts</h1>
                      <div className="row mt-5">
                          <div className="col-md-3 col-sm-6 col-6">
                             
                                  <p ><i class="fas fa-history fa-2x icons"></i></p>
                                    <h5>LIVRAISON RAPIDE</h5>
                                     <p> En 48 à 72 H dans toute la Tunisie</p>
                              
                          </div>
                          {/* ---------- 2 ------------- */}
                        <div className="col-md-3 col-sm-6 col-6">
                                  
                             <p ><i class="fas fa-truck fa-2x icons"></i></p>
                             <h5>LIVRAISON RAPIDE</h5>
                             <p> En 48 à 72 H dans toute la Tunisie</p>
                        </div>
                          {/*------------- 3 --------------*/}
                          <div className="col-md-3 col-sm-6 col-6">
                             <p><i class="fas fa-lock fa-2x icons"></i></p>                           
                             <h5>LIVRAISON RAPIDE</h5>
                              <p> En 48 à 72 H dans toute la Tunisie</p>
                                
                          </div>
                          {/*-------------4 --------------- */}
                          <div className="col-md-3 col-sm-6 col-6">
                         
                              <p><i class="fas fa-phone-volume fa-2x icons"></i></p>
                              <h5>LIVRAISON RAPIDE</h5>
                              <p> En 48 à 72 H dans toute la Tunisie</p>
                        
                      </div>
                  </div>
                  </div>
                  {/*********** End  Section 12 **************************/}
         </menu>
         <Footer/>
        </div>
    )
}
export default Home
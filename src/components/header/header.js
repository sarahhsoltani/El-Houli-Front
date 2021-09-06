import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import {Form, FormControl,Nav , InputGroup} from 'react-bootstrap'
import {Link} from "react-router-dom"
import {logoutUser } from '../../redux/actions/authentification'

function Header() {
  
    const user = useSelector((state) => state.authReducer.user) 
    console.log("home user",user)
    const dispatch = useDispatch()
    const logout =()=>{ 
        dispatch (logoutUser())
    }
       
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
         <Nav className="navbar navbar-expand-lg navbar-light ">
           <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                  <img className="logBrand" src="/image/myLog.png" alt="logo"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
              <Form inline className="d-flex   formm">
              <InputGroup className="mb-2">
       
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
        <InputGroup.Text><i className="fas fa-search"></i></InputGroup.Text>
      </InputGroup>
                {/* <FormControl  className="input-search" type="text" placeholder="Type movie or tv show name to find it"  />
                <button className="btnn search btn-red"> <i className="fas fa-search"></i></button> */}
              </Form>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">    
              <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="nav-item ">
                     <Link to="/" className="nav-link " aria-current="page" >Boutique</Link>
                  </li>
                  <li className="nav-item ">  
                      <Link to="/propos" className="nav-link" >À propos</Link>
                  </li>
                  <li className="nav-item ">
                      <Link to="/collection" className="nav-link" aria-current="page" >Collections</Link>
                  </li>
                  <li className="nav-item ">
                      <Link to="/blog"  className="nav-link " aria-current="page" >Blog</Link>
                  </li>
                  <li className="nav-item "> 
                      <Link to="/card" className="nav-link " aria-current="page" >Cart  <i className="fas fa-shopping-basket"></i></Link>
                  </li>
                  <li className="nav-item ">
                      <Link to="/contact" className="nav-link " aria-current="page" >Contact</Link>
                  </li>
                  {!user ? ( 
                <li className="nav-item ">
                         
                <Link to="/login">  
                 <button
                  className=" btn connexion">se Connecter</button>
                 </Link> 
             </li>):(
              <div>  
                   {user.role === "Vendeur" && (
            <li className="level-box  nav-item  d-flex ">
            <Link className="nav-item nav-link" to="/MyPublication">Mes publications</Link>
             <button className="btn connexion ms-3"><i className="fas fa-user-circle lev" onClick={logout}></i> déconnecter</button>
  
            </li>)}
               {user.role === "Client" && (
            <li className="level-box mt-2 nav-item nav-linkk d-flex ">
            
             <button className="btn connexion ms-3"><i className="fas fa-user-circle lev" onClick={logout}></i> déconnecter</button>
  
            </li>)}
                </div>  
           
                  )}
               
              </ul>
           
            </div>
           </div>
        </Nav>
       
        
      </div>
    )
}
export default Header
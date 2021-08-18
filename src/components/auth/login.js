import React ,{useState} from 'react'
import { Button ,Form } from 'react-bootstrap'
import {FormFeedback} from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header/header'
import { Link,Redirect } from 'react-router-dom'
import { loginUser } from '../../redux/actions/authentification'
import AlertMsg from './alert'
import Footer from "../footer/footer"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState({emailState: "ok",passwordState: "ok"})
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated) 
    
    const loginForm=(e)=>{ 
        e.preventDefault()
        validateEmail()
        validatePassword()
        dispatch(loginUser(email,password))
    }
   const validateEmail = () => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        if (emailRex.test(email)) {
          validate.emailState = "ok";
        } else {
          validate.emailState = "bad";
        }
        setValidate({ validate });
      };
  const validatePassword = () => {
    
        if (!password) {
          validate.passwordState = "bad";
        } else {
          validate.passwordState = "ok";
        }
        setValidate({ validate });
      };
  return(
    <div>
         {isAuthenticated  ? <Redirect to="/" />:
       <>

        <Header/>
         {/* <div className="container">
             <AlertMsg/>
             <h1>Connectez-Vous À Votre Compte</h1>
             <h3>Profitez d'offres exceptionnelles en rejoignant la famille d'El Houli</h3>
         <Form className="mt-5" onSubmit={loginForm} >
             
                 <Form.Group className="mb-3 d-flex" controlId="formBasicEmail ">
                   <Form.Label>email </Form.Label>
                   <Form.Control type="text" name="nom" value={email} placeholder="Enter nom" 
                   onChange={(e) => setEmail(e.target.value)}
                     />
                
                 </Form.Group>
                 <FormFeedback iinvalid="true">Entrer email valide.</FormFeedback>

                 <Form.Group className="mb-3 d-flex" controlId="formBasicEmail ">
                   <Form.Label>Password </Form.Label>
                   <Form.Control type="password" name="nom" value={password} placeholder="Enter nom"
                   onChange={(e) => setPassword(e.target.value)} 
                 
                     />
                 
                 </Form.Group> 
                 <Button type="submit">Connecter</Button>
                 <p>Créer un compte présente de nombreux avantages: payer plus rapidement,  <br/>

conserver plusieurs adresses, suivre les commandes et plus encore.</p>
                 <p className="mt-3 text-cente ">
                 Vous n'avez pas un compte? 
            <Link to="/register" className="inscription">
            S'inscrire
            </Link>
          </p>
                 </Form>
         </div> */}
         <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="/image/logBrand.png" alt="logo"/>
              </div>
              <h4>Connectez-Vous À Votre Compte</h4>
              {/* <h6 class="font-weight-light">Profitez d'offres exceptionnelles en rejoignant la famille d'El Houli</h6> */}
              <form class="pt-3" onSubmit={loginForm} >
                <div class="form-group">
                  <input type="email" name="nom" value={email} placeholder="Enter nom" 
                   onChange={(e) => setEmail(e.target.value)}
                  class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                </div>
                <div class="form-group">
                  <input  type="password" name="nom" value={password} placeholder="Enter nom"
                   onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="mt-3">
                  <button type='submit' class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Login</button>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/>
                      Keep me signed in
                    </label>
                  </div>
                
                </div>
              
                <div class="text-center mt-4 font-weight-light">
                Vous n'avez pas un compte?  <Link to="/register" className="inscription"> S'inscrire</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  
  </div>
         </>}
         <Footer/>
    </div>
   )

 }

export default Login
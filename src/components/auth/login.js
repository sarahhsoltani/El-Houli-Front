import React ,{useState} from 'react'
import { Button ,Form } from 'react-bootstrap'
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
         <div className="container">
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
                 <Form.Group className="mb-3 d-flex" controlId="formBasicEmail ">
                   <Form.Label>Password </Form.Label>
                   <Form.Control type="text" name="nom" value={password} placeholder="Enter nom"
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
         </div>
         </>}
         <Footer/>
    </div>
   )

 }

export default Login
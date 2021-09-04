import React ,{useEffect}from 'react'
import Header from '../header/header'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {  getPub } from '../../redux/actions/produit'
    
 function CardOrder({props}) {
    const dispatch = useDispatch()   
    // const { id } = useParams()
   
    
    useEffect(() => {
        console.log(props.location.state.pub )
     }, [])
     
    return (

        <div>
             <Header/>
             <h1>add to card </h1>
             
             {/* {
                 pub.map((el.key)=>(

                 ))
             } */}
        </div>
    )
}
export default CardOrder
import React ,{useEffect}from 'react'
import Header from '../header/header'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {  getOrderById } from '../../redux/actions/cart'
    
 function CardOrder(props) {
    const dispatch = useDispatch()   
    // const { id } = useParams()
    const cards = useSelector((state) => state.addToCards.cards)
    const isloading = useSelector((state) => state.addToCards.isloading)
    
    useEffect(() => {
        dispatch(getOrderById(props.match.params.id)) 
     }, [dispatch])

     console.log('cards', !isloading?cards:[])
  

    return (

        <div>
             <Header/>
             <h1>add to card </h1>
            {
                cards.map((el,key)=>(
                    <div>
                        <h4>{el.title}</h4>
                        <h4>{el.price*el.qty}</h4>
                        <h4>{el.price}</h4>
                        <h4>{el.qty}</h4>
                        <img className="w-25 h-25" src={el.image}/>
                       
                    </div>
                ))
            }

             {/* { !isloading ? cards.map(el,key(

                 <div>

                 </div>
             ))
            :
                ""
                  
                } */}
            
        </div>
    )
}
export default CardOrder
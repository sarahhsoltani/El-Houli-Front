import React,{useEffect} from 'react'
 import { getPub } from '../../redux/actions/produit'
import Header from '../header/header'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {
    Row,
    Col
  
  } from "reactstrap";
 function ProductUser() {
    const dispatch = useDispatch()    
    const pub = useSelector((state) => state.productReducer.pub)
    const loading = useSelector((state) => state.productReducer.loading)
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)
    const { id } = useParams()
     useEffect(() => {
        dispatch(getPub(id))  
     }, [dispatch])
    console.log(`pub`, pub)
    return ( 
        <div>
            <Header/>
            <Row md="2" xs="1" className=" box-pub">
          <Col className="d-flex align-items-center">
            <img
              src={pub.image}
              width="100%"
              height="100%"
              alt="..."
            />
          </Col>
          <Col>
            <h2 className="ad-title text-center our-pubs titl">
              {pub.title}
            </h2>
            <div className="marque-pub">
              <h4 className="our-pubs"> Marque:</h4>
              <h6 className=" secondary ml-2 mr-1">{pub.category}</h6>
            </div>

            <div>
              <h4 className="our-pubs"> Description:</h4>
              <p className="desc">{pub.description}</p>
            </div>
            <div className="marque-pub">
              <Col className="mt-4 mb-4 d-flex justify-content-between ">
                <h4 className="our-pubs"> Prix:</h4>
                <p className="prixx">
                  {pub.price} <sup>DT</sup>
                </p>
              </Col>
            </div>

            {isAuthenticated && (
              <div className="m-2 p-3 ">
                <p>
                  <span className="mr-2 font-weight-bold our-pubs">
                    Publié par :
                  </span>
                  {pub.user.name}
                </p>
                <p>
                  <span className="mr-2 font-weight-bold  our-pubs">
                    Adresse email :
                  </span>
                  {pub.user.email}
                </p>
                <p>
                  <span className="mr-2 font-weight-bold our-pubs">
                    Numéro de téléphone :
                  </span>
                  {pub.user.phone}
                </p>
              </div>
            )}
          </Col> 
        </Row>
        </div>
    )
}
export default ProductUser
// import React, { Component } from 'react'
// import { connect } from "react-redux";
//  class ProductUser extends Component {
     
//     componentDidMount() {
//         this.props.getPub(this.props._id);
//       }
      
//     render() {

//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
// const mapStateToProps = state => ({
    
//     pub: state.pubReducer.pub,
//     isAuthenticated: state.authReducer.isAuthenticated,
//     user: state.authReducer.user
//   });
// export default connect(
//     null,
//     {
//       getPub,
     
//     }
//   )(ProductUser);

import React,{useEffect,useState} from 'react'
 import { addComment, getPub,deleteComment } from '../../redux/actions/produit'
import Header from '../header/header'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {
    Row,
    Col,
    ListGroup,
    ListGroupItemHeading,
  ListGroupItem,
  ListGroupItemText,
  Input,
  Button
} from "reactstrap";
import {Link} from "react-router-dom"
import Moment from "react-moment";
 function ProductUser() {
    const dispatch = useDispatch()     
    const pub = useSelector((state) => state.productReducer.pub)
    const loading = useSelector((state) => state.productReducer.loading)
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)
    const user = useSelector((state) => state.authReducer.user)
    console.log(`user`, user)
    const [comment, setComment] = useState("")
    const { id } = useParams()

     useEffect(() => {
        dispatch(getPub(id))  
     }, [dispatch])
    console.log(`pub`, pub)

   const changeHandler = e => {
      setComment(
        e.target.value
      );
      console.log(`event.target.value`, e.target.value)
    }; 

   
   
    return ( 
       <div> 
        <Header/>
    
        
           
            <Row md="2" xs="1" className=" box-pub">
          <Col className="d-flex align-items-center">
            <img
              src={pub?.image}
              width="100%"
              height="100%" 
              alt="..."
            />
          </Col>
          <Col>
            <h2 className="ad-title text-center our-pubs titl">
              {pub?.title}
            </h2>
            <div className="marque-pub">
              <h4 className="our-pubs"> category</h4>
              <h6 className=" secondary ml-2 mr-1">{pub?.category}</h6>
            </div>

            <div>
              <h4 className="our-pubs"> Description:</h4>
              <p className="desc">{pub?.description}</p>
            </div>
            <div className="marque-pub">
              <Col className="mt-4 mb-4 d-flex justify-content-between ">
                <h4 className="our-pubs"> Prix:</h4>
                <p className="prixx">
                  {pub?.price} <sup>DT</sup>
                </p>
              </Col>
            </div>

            {isAuthenticated && (
              <div className="m-2 p-3 ">
                <p>
                  <span className="mr-2 font-weight-bold our-pubs">
                    Publié par :
                  </span>
                  {pub?.user.name}
                </p>
                <p>
                  <span className="mr-2 font-weight-bold  our-pubs">
                    Adresse email :
                  </span>
                  {pub?.user.email}
                </p>
                <p>
                  <span className="mr-2 font-weight-bold our-pubs">
                    Numéro de téléphone :
                  </span>
                  {pub?.user.phone}
                </p>
              </div>
            )}
          </Col> 
        </Row>
        <ListGroupItem>
              <ListGroupItemHeading>
                {/* <p className="connexion">
                  <span className="connexion">
                    {pub?.Comments.length}
                  </span>{" "}
                  {pub?.Comments.length === 1
                    ? "Comment"
                    : "Comments"}
                </p> */}
              </ListGroupItemHeading>
            </ListGroupItem>
            {pub?.Comments.map(comment => (
              <ListGroupItem key={comment._id}>
                <ListGroupItemHeading className="d-flex justify-content-between">
                  <span className="font-size-bolder">{comment.user.name}</span>{" "}
                  {isAuthenticated &&
                    (user._id === comment.user._id ||
                      user.role === "Admin") && (
                      <span>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() =>
                          dispatch (deleteComment(
                              pub._id,
                              comment._id
                            ))
                          }
                        >
                          Supprimer
                        </button>
                      </span>
                    )}
                </ListGroupItemHeading>
                <ListGroupItemText>{comment.text}</ListGroupItemText>
                <ListGroupItemText
                  style={{ fontSize: "12px" }}
                  className="text-right text-secondary"
                >
                  Publié en:{" "}
                  <Moment
                   format="YYYY/MM/DD HH:mm" className="comment-date">
                    {comment.date} 
                 </Moment>
                </ListGroupItemText>
              </ListGroupItem>
            ))}
            <div>
            {isAuthenticated &&
              user.role === "Client" ? (
                <>
                  {" "}
                  <Input
                    type="textarea"
                   
                    value={comment}
                    id="exampleText"
                    onChange={changeHandler}
                    style={{ border: "solid 1px #EB9916" }}
                  />
                  <Button
                    onClick={() => {
                      dispatch (addComment(
                        pub._id,
                       comment
                      ));
                      setComment({ comment: " " });
                    }}
                    outline    
                    style={{ 
                      backgroundColor: "#EB9916",
                      border: "solid 2px #EB9916",
                      color: "white"
                    }}
                    className="mt-2"
                  >
                    Ajouter un commentaire
                  </Button>
                </>
              ) : (
                <p>
                  Connectez-vous ou inscrivez-vous pour écrire un commentaire{" "}
                  <Link to="/login" className="connexion">
                    {" "}
                    Se connecter
                  </Link>
                </p>
              )}
            </div>
        </div>
    )
}
export default ProductUser


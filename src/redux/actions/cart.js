import axios from "axios"
import { CART_ADD_PRODUCT } from "./type"




export const addToCard = (id, title,qty,image,price,product) => async dispatch => {
  try {
    const res = await axios.post(`http://localhost:4000/api/orders/postOrder/${id}`, { title, qty, image, price, product });
    dispatch({
      type: CART_ADD_PRODUCT,
      payload: res.data
    })
    console.log("res",res);
    } catch (error) {
    console.log(error);}};

  
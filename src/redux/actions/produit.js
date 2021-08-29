import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  
} from "./type";

export const getPubs = (vendeur_id, category) => async dispatch => {
  try {
    const res = vendeur_id
      ? await axios.get(`http://localhost:4000/api/produits/getPoducts?user_id=${vendeur_id}`)
      : category
      ? await axios.get(`http://localhost:4000/api/produits/getPoducts?category=${category}`)
      : await axios.get(`http://localhost:4000/api/produits/getPoducts`);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
    console.log("res.data",res.data)
  } catch (error) {
    console.log(error);
  }
};

export const getRecentPubs = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/produits/recent`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPub = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/produits/getProduitById/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
    console.log("getPub")
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = (
  title,
  category,
  description,
  image,
  price,
  countInStock
) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:4000/api/produits/newProduit", {
      title,
  category,
  description,
  image,
  price,
  countInStock
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    })
    console.log("add product")
    ;
  } catch (error) {
    console.log(error);
  }
};

export const updatePub = (
  id,
  title,
  category,
  description,
  image,
  price,
  countInStock
) => async dispatch => {
  try {
    const res = await axios.put(`/publications/${id}`, {
      title,
      category,
      description,
      image,
      price,
      countInStock
    });
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePub = id => async dispatch => {
  try {
    await axios.delete(`/publications/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });
    dispatch(getRecentPubs);
  } catch (error) {
    console.log(error);
  }
};

export const addComment = (id, text) => async dispatch => {
  try {
    await axios.post(`/publications/comment/${id}`, { text });

    dispatch(getPub(id));
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id, comment_id) => async dispatch => {
  try {
    await axios.delete(`/publications/comment/${id}/${comment_id}`);

    dispatch(getPub(id));
  } catch (error) {
    console.log(error);
  }
};

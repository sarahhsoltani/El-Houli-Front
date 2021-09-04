import {
    CART_ADD_PRODUCT
  } from "../actions/type";
   const initialState = {
   cards: [],  
  };

  const addToCards= (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {   
    case CART_ADD_PRODUCT:
        return {
          ...state,
          cards: [...state.cards, payload]
        };
       default:
        return state;
    }
  };
  
  export default addToCards;
  
import {
    CART_ADD_PRODUCT,GET_ORDER_BY_ID
  } from "../actions/type";
   const initialState = {
   cards: [],  
   isloading:true,
   card:[]
  };

  const addToCards= (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {   
    case CART_ADD_PRODUCT:
      const item = action.payload

      const existItem = state.cards.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cards: state.cards.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cards: [...state.cards, item],
        } 
      }
        case GET_ORDER_BY_ID:
          return {
            ...state,
            card: payload,
            isloading: false
            
          };
       default:
        return state;
    }
  };
  
  export default addToCards;
  
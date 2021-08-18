import {REGISTER_SUCCESS,FAILED_REGISTER,LOGIN_SUCCESS,fAILED_LOGIN,LOGOUT} from "../actions/type"
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
              localStorage.setItem("token", payload.token);
              return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: true
              };
        case FAILED_REGISTER:
        case fAILED_LOGIN:
        case LOGOUT:
         localStorage.removeItem("token");
         return {   
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
                    
                  };
    default:
        return state
    }
}
export default authReducer
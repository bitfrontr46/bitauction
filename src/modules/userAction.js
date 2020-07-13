const { combineReducers } = require("redux");

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const user_login = () => ({type : LOGIN});
const user_logout = () => ({type : LOGIN});

const initailState = {
    is_login : false,
}

const login_reducer = (state = initailState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                is_login : true,
            }
        case LOGOUT:
            return{
                is_login : false,
            }
        default:
            return state;
    }
}

export const stateToProps = (state) => {
    return {
        is_login : state.userAction.is_login
    }
}

export const dispatchToProps = (dispatch) => ({
    
})
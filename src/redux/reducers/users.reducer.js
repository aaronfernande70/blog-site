import { initializeConnect } from "react-redux/es/components/connect";
import { GET_USERS,GET_MY_USERS, GET_USER} from "../actionType";

let initailState={
    users:[],
    users_loaded:false,
    user:{},
    user_loaded:false
}

export const usersReducer=(state=initailState,action)=>{
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users:action.payload,
                USERS_loaded:true
                
            }
        case GET_USER:
            return{
                ...state,
                user:action.payload,
                user_loaded:true
            }
        default:
            return state
    }

}


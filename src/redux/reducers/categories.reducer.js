import { GET_CATEGORIES} from "../actionType";

let initailState={
    categories:[],
    categories_loaded:false,
}

export const categoriesReducer=(state=initailState,action)=>{
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.payload,
                categories_loaded:true
                
            }

        default:
            return state
    }

}


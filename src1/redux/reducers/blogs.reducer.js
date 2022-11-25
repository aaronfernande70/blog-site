import { initializeConnect } from "react-redux/es/components/connect";
import { GET_BLOGS,GET_MY_BLOGS,STORE_BLOGS } from "../actionType";

let initailState={
    blogs:[],
    blogs_loaded:false,
    myBlogs_loaded:false
}

export const blogsReducer=(state=initailState,action)=>{
    switch(action.type){
        case GET_BLOGS:
            return{
                ...state,
                blogs:action.payload,
                blogs_loaded:true
                
            }
        case GET_MY_BLOGS:
            return{
                ...state,
                blogs:action.payload,
                myBlogs_loaded:true
            }
        default:
            return state
    }

}


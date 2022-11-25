
import { GET_BLOGS,GET_MY_BLOGS,GET_CATEGORY_BLOGS, GET_BLOG } from "../actionType";

let initailState={
    blogs:[],
    blogs_loaded:false,
    myBlogs_loaded:false,
    blog: {},
    blog_loaded: false
}

export const blogsReducer=(state=initailState,action)=>{
    switch(action.type){
        case GET_BLOGS:
            return{
                ...state,
                blogs:action.payload,
                blogs_loaded:true
                
            }
            case GET_BLOG:
                return{
                    ...state,
                    blog:action.payload,
                    blog_loaded:true
                    
                }
        case GET_MY_BLOGS:
            return{
                ...state,
                blogs:action.payload,
                mblogs_loaded:true
            }
            case GET_CATEGORY_BLOGS:
                return{
                    ...state,
                    blogs:action.payload,
                    blogs_loaded:true
                }
        default:
            return state
    }

}


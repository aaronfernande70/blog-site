import { GET_CATEGORIES } from "../actionType";
import { baseUrl } from "../../config";
import { fetchData } from "../../utils/fetchData";



export const getCategories=()=>async dispatch=>{
    
   let {data,loading,error}= await fetchData(`${baseUrl}categories`,"GET")
//    console.log(data,loading,error)

    dispatch({
        type:GET_CATEGORIES,
        payload:data
    })
    
}



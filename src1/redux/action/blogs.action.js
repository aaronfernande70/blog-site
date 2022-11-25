import useFetch from "../../utils/useFetch";
import { GET_BLOGS,STORE_BLOGS } from "../actionType";
import { baseUrl } from "../../config";

// let [data,loading,error]= useFetch(`${baseUrl}blogs`,"GET")

const fetchData=async (url,method,body)=>{
    let data
    let loading
    let error

  
      try {

        let response = await fetch(url,{method:method,headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
        let json = await response.json();
  
        data=json;
        loading=false;
        // return [data,loading]
      } catch (err) {
        error=err;
        loading=false;
        // return [error,loading]
      }
return {data,loading,error}

}

export const getBlogs=()=>async dispatch=>{
    
   let {data,loading,error}= await fetchData(`${baseUrl}blogs`,"GET")
//    console.log(data,loading,error)

    dispatch({
        type:GET_BLOGS,
        payload:data
    })
    
}

// let id=1;

export const getMyBlogs=()=>async dispatch=>{
    let id=1;
   let {data,loading,error}= await fetchData(`${baseUrl}blogs?blogger_id=${id}`,"GET")
//    console.log(data,loading,error)

    dispatch({
        type:GET_BLOGS,
        payload:data
    })
    
}


import { GET_USERS,GET_USER } from "../actionType";
import { baseUrl } from "../../config";
import { fetchData } from "../../utils/fetchData";

// let [data,loading,error]= useFetch(`${baseUrl}USERS`,"GET")

// const fetchData=async (url,method,body)=>{
//     let data
//     let loading
//     let error

  
//       try {

//         let response = await fetch(url,{method:method,headers:{
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       });
  
//         let json = await response.json();
  
//         data=json;
//         loading=false;
//         // return [data,loading]
//       } catch (err) {
//         error=err;
//         loading=false;
//         // return [error,loading]
//       }
// return {data,loading,error}

// }

export const getUsers=()=>async dispatch=>{
    
   let {data,loading,error}= await fetchData(`${baseUrl}users`,"GET")
//    console.log(data,loading,error)

    dispatch({
        type:GET_USERS,
        payload:data
    })
    
}

// let id=1;

export const getUser=(id)=>async dispatch=>{
    // let id=1;
   let {data,loading,error}= await fetchData(`${baseUrl}users?id=${id}`,"GET")
//    console.log(data,loading,error)

    dispatch({
        type:GET_USER,
        payload:data
    })
    
}


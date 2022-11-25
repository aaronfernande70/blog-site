import React, { useEffect } from "react";

export default function useFetch(url,method,body) {
  let [data, setData] = React.useState([]);

  let [loading, setLoading] = React.useState(true);

  let [error, setError] = React.useState(null);

 

  

  const callApi = async () => {
    try {
      let response = await fetch(url,{method:method,headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

      let json = await response.json();

      setData(json);

      setLoading(false);
     
    } catch (error) {
      setError(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return [data, loading, error];
}

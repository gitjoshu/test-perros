import { useState, useEffect } from "react";

export function useSelectAPI(APIService) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    APIService()
      .then((response) => {
        setOptions(response);
      })
      .catch((error) => console.log(error));
  }, [APIService]);
  return { options };
}

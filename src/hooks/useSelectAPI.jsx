import { useState, useEffect } from "react";

export function useSelectAPI(APIService) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    APIService()
      .then((response) => {
        setOptions([...options, ...response]);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { options };
}

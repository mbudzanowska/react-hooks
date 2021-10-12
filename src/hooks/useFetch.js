import { useEffect, useState } from "react";

const useFetch = (url, initialState) => {

  // console.log("this should be called 2 times per use!")
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setResult(json));
  }, [url]);

  return result;
};

export default useFetch;

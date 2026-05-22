import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setIsLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    doFetch();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;

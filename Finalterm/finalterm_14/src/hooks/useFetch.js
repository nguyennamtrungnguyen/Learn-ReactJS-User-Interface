import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((rawData) => setData(rawData));
      setLoading(false);
    };

    doFetch();
  }, [url]);

  return { data, loading };
};

export default useFetch;

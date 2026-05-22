import { useEffect, useMemo, useState } from "react";

const useFetch = (url, methodName = "GET", bodyData = null) => {
  const [receviedData, setReceviedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const modifiedBody = useMemo(() => {
    if (bodyData) {
      return JSON.stringify(bodyData);
    }
  }, [bodyData]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(url, {
        method: methodName,
        headers: { "Content-Type": "application/json" },
        body: modifiedBody && methodName !== "GET" ? modifiedBody : null,
      })
        .then((res) => res.json())
        .then((rawReceviedData) => setReceviedData(rawReceviedData))
        .catch((err) => console.error(err));
      setIsLoading(false);
    };

    fetchData();
  }, [url, methodName, modifiedBody]);

  return { receviedData, isLoading };
};

export default useFetch;

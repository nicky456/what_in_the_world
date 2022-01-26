import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log("Error: " + error);
      });
  }, [url]);

  return { data, loading, error };
}

import { useState, useEffect } from "react";

const useStatus = (url: string, payload?: any) => {
  const [status, setState] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
      setState(0);
      try {
        const response = await fetch(url, {
          method: payload ? "POST" : "GET",
          body: payload ? JSON.stringify(payload) : null,
        });
        setState(response.status);
      } catch (error) {
        throw new Error("Error fetching");
      }
    };

    handleFetch();
    const intervalId = setInterval(handleFetch, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [url, payload]);

  return status;
};

export default useStatus;

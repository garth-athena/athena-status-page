import { useState, useEffect } from "react";

const useStatus = (url: string, payload?: any) => {
  const [status, setState] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
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
  }, []);

  return status;
};

export default useStatus;

import { useState, useEffect } from "react";

const useStatus = (url: string) => {
  const [status, setState] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
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

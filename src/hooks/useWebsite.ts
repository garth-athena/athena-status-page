import { useState, useEffect } from "react";
import { production } from "../constants/origin";

const useWebsite = () => {
  const [status, setState] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
         `${production}`,
          {
            method: "GET",
          }
        );
        setState(response.status);
      } catch (error) {
        throw new Error("Error fetching");
      }
    };

    handleFetch();
  }, []);

  return status;
};

export default useWebsite;

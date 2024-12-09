import { useState, useEffect } from "react";

const useRates = () => {
  const [state, setState] = useState({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://www.athena.com.au/rates/api/v1/direct-extras`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setState({
          status: "success",
          data,
        });
      } catch (error) {
        setState({
          status: "error",
          data: null,
        });
        throw new Error("Error fetching");
      }
    };

    handleFetch();
  }, []);

  return state;
};

export default useRates;

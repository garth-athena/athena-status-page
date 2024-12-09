import { useState, useEffect } from "react";
import { origin } from "../constants/origin";

const useRates = () => {
  const [state, setState] = useState({
    data: null,
    fetch: "pending",
    status: null as number | null,
  });

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `${origin}/rates/api/v1/direct-extras`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setState({
          data,
          fetch: "success",
          status: response.status,
        });
      } catch (error) {
        setState({
          fetch: "error",
          data: null,
          status: null,
        });
        throw new Error("Error fetching");
      }
    };

    handleFetch();
  }, []);

  return state;
};

export default useRates;

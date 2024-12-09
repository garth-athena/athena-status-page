import { useState, useEffect } from "react";

const useAddressAutocomplete = () => {
  const [state, setState] = useState({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://www.athena.com.au/property/api/v1/address/autocomplete?term=81%20grandview%20dr`,
          {
            cache: "no-cache",
            credentials: "include",
            method: "GET",
            mode: "no-cors",
          }
        );
        console.log(response);
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

export default useAddressAutocomplete;

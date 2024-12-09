import { useState, useEffect } from "react";
import { origin } from "../constants/origin";

const useAddressAutocomplete = () => {
  const [status, setState] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
         `${origin}/property/api/v1/address/autocomplete?term=81%20grandview%20dr`,
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

export default useAddressAutocomplete;

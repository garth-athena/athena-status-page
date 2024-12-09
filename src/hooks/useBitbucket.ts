import { useState, useEffect } from "react";

const useBitbucket = () => {
  const [state, setState] = useState({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    const fetchBitbucketapi = async () => {
      try {
        const response = await fetch(
          `https://bitbucket.status.atlassian.com/api/v2/status.json`,
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

    fetchBitbucketapi();
  }, []);

  return state;
};

export default useBitbucket;

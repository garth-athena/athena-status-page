import { useState, useEffect } from "react";

interface BitbucketStatus {
  description: string;
}

interface BitbucketData {
  status: BitbucketStatus;
}

interface BitbucketState {
  status: "pending" | "success" | "error";
  data: BitbucketData | null;
}

const useBitbucket = () => {
  const [state, setState] = useState<BitbucketState>({
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
        const data: BitbucketData = await response.json();
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
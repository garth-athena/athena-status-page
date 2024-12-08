import { useState, useEffect } from 'react';

const useGithubStars = () => {
  const [state, setState] = useState({
    status: 'pending',
    stars: null,
  });

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/garth-athena/athena-status-page`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setState({
          status: 'success',
          stars: data.stargazers_count,
        });
      } catch (error) {
        setState({
          status: 'error',
          stars: null,
        });
        throw new Error('Error fetching');
      }
    };

    fetchStars();
  }, []);

  return state;
};

export default useGithubStars;
import useGithubStars from "../hooks/useGithubStars";

export const Header = () => {
  const { stars } = useGithubStars();
  return (
    <header>
      <h1>Athena Status Page {stars}</h1>
    </header>
  );
};

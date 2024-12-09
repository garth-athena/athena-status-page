import { Image } from "../components/Image";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Header = () => {
  const goToPathname = useGoToPathname()
  return (
    <header>
      <a
        title="Athena Status Page"
        href="/"
        style={{ display: "block", width: 54 }}
      >
        <Image src="./athena.png" alt="athena" aspectRatio="540 / 480"></Image>
      </a>
      <a href="/athena-status-page/internal/" onClick={goToPathname}>Internal</a>
    </header>
  );
};

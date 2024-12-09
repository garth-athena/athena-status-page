import { Image } from "../components/Image";
import { useGoToHash } from "../hooks/useGoToHash";

export const Header = () => {
  const goToHash = useGoToHash();
  return (
    <header style={{ display: "flex" }}>
      <a
        title="Athena Status Page"
        href="/athena-status-page/"
        style={{ display: "block", width: 54 }}
      >
        <Image src="./athena.png" alt="athena" aspectRatio="540 / 480"></Image>
      </a>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: 16 }}>
          <li>
            <a href="#/" onClick={goToHash}>
              External
            </a>
          </li>
          <li>
            <a href="#/internal/" onClick={goToHash}>
              Internal
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

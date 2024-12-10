import { Image } from "../components/Image";
import { ModeButton } from "../components/ModeButton";
import { useGoToHash } from "../hooks/useGoToHash";

export const Header = () => {
  const goToHash = useGoToHash();
  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "space-between",
      }}
    >
      <a
        title="Athena Status Page"
        href="/athena-status-page/"
        style={{ display: "block", width: 54 }}
      >
        <Image src="./athena.png" alt="athena" aspectRatio="540 / 480"></Image>
      </a>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: 16, padding: 0 }}>
          <li>
            <a href="#/" onClick={goToHash} style={{ textDecoration: "none" }}>
              External
            </a>
          </li>
          <li>
            <a
              href="#/internal/"
              onClick={goToHash}
              style={{ textDecoration: "none" }}
            >
              Internal
            </a>
          </li>
          <li>
            <ModeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

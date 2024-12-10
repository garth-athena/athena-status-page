import { Image } from "../components/Image";
import { ModeButton } from "../components/ModeButton";
import { useGoToHash } from "../hooks/useGoToHash";

export const Header = () => {
  const goToHash = useGoToHash();
  return (
    <header
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "space-between",
      }}
    >
      <a
        title="Athena Status Page"
        href="/athena-status-page/"
        style={{ display: "block", height: 54, minWidth: 54, width: 54 }}
      >
        <Image src="./athena.png" alt="athena" aspectRatio="540 / 480"></Image>
      </a>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: 16,
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ display: "block" }}>
            <a
              href="#/"
              onClick={goToHash}
              style={{
                display: "block",
                lineHeight: 20 / 16,
                textDecoration: "none",
              }}
            >
              External
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              href="#/internal/"
              onClick={goToHash}
              style={{
                display: "block",
                lineHeight: 20 / 16,
                textDecoration: "none",
              }}
            >
              Internal
            </a>
          </li>
          <li style={{ display: "block" }}>
            <ModeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

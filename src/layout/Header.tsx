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
        style={{ display: "block", height: 62, minWidth: 72, width: 72 }}
      >
        <svg viewBox="0 0 72 62">
          <path fill="none" d="M0 0h71.461v61.883H0V0z" />
          <path
            fill="#a02529"
            d="M43.73 41.616h1.369L43.755.853 43.73.106l-8.187 45.032 10.556 16.745-.493-20.267"
          />
          <path
            fill="#d9252a"
            stroke="null"
            d="m43.688 0 1.435 61.883h26.338L43.688 0z"
          />
          <path fill="#da2e83" d="M43.688 0-.026 61.883h32.734L43.688 0" />
          <path fill="#a02529" d="m24.974 26.883 20.018 35h25.982l-46-35" />
        </svg>
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
                padding: 16,
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
                padding: 16,
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

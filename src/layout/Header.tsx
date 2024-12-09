import { Image } from "../components/Image";

export const Header = () => {
  return (
    <header>
      <a
        title="Athena Status Page"
        href="/"
        style={{ display: "block", width: 54 }}
      >
        <Image src="./athena.png" alt="athena" aspectRatio="540 / 480"></Image>
      </a>
    </header>
  );
};

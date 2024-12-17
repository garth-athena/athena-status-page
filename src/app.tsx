import { WindowLocationHashContextProvider } from "./contexts/WindowLocationHashContext";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Routes } from "./Routes";

export const App = () => (
  <div
    style={{
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      padding: 32,
    }}
  >
    <WindowLocationHashContextProvider>
      <Header />
      <main style={{ maxWidth: 1216, marginLeft: "auto", marginRight: "auto" }}>
        <Routes />
      </main>
      <Footer />
    </WindowLocationHashContextProvider>
  </div>
);

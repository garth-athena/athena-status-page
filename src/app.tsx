import { WindowLocationHashContextProvider } from "./contexts/WindowLocationHashContext";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Routes } from "./Routes";

export const App = () => (
  <div style={{ padding: 16 }}>
    <WindowLocationHashContextProvider>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </WindowLocationHashContextProvider>
  </div>
);

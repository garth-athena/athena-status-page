import { WindowLocationPathnameContextProvider } from "./contexts/WindowLocationPathnameContext";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Routes } from "./Routes";

export const App = () => (
  <WindowLocationPathnameContextProvider>
    <Header />
    <main>
      <Routes />
    </main>
    <Footer />
  </WindowLocationPathnameContextProvider>
);

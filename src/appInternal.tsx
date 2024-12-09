import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Internal } from "./pages/Internal";

export const App = () => (
  <div>
    <Header />
    <main>
      <Internal />
    </main>
    <Footer />
  </div>
);

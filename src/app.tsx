import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { External } from "./pages/External";

export const App = () => (
  <div>
    <Header />
    <main>
      <External />
    </main>
    <Footer />
  </div>
);

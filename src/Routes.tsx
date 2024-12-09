import { Router } from "./components/Router";

import { Internal } from "./pages/Internal";
import { External } from "./pages/External";
import { NotFound } from "./pages/NotFound";

export const Routes = () => {
  return (
    <Router>
      {{
        "#/": <External />,
        "#/internal/": <Internal />,
        "#/not-found/": <NotFound />,
      }}
    </Router>
  );
};

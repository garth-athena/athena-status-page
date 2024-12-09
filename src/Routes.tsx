import { Router } from "./components/Router";

// import { NotFound } from "./pages/NotFound";
import { Internal } from "./pages/Internal";
import { External } from "./pages/External";
import { NotFound } from "./pages/NotFound";

export const Routes = () => {
  return (
    <Router>
      {{
        "/athena-status-page/": <External />,
        "/athena-internal-status-page/": <Internal />,
      //  "/athena-status-page/internal/": <Internal />,
        "/athena-status-page/not-found/": <NotFound />,
      }}
    </Router>
  );
};
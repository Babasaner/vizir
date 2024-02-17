import Accueil from "./pages/accueil/accueil";
import Services from "./pages/services/services";
import About from './pages/apropos/about'
import Reseau from "./pages/reseau/reseau";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="services" element={<Services />}>
          <Route path="a-propos" element={<About />} />
          <Route path="Reseau" element={<Reseau/>} />
        </Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Grado1 from "./pages/Grado1.jsx";
import Grado2 from "./pages/Grado2.jsx";
import Grado3 from "./pages/Grado3.jsx";
import Grado4 from "./pages/Grado4.jsx";
import ClaseDetalle from "./pages/ClaseDetalle.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/grado1" element={<Grado1 />} />
          <Route path="/:grado/bimestre/:bid/clase/:cid" element={<ClaseDetalle />} />
          <Route path="/grado2" element={<Grado2 />} />
          <Route path="/grado3" element={<Grado3 />} />
          <Route path="/grado4" element={<Grado4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
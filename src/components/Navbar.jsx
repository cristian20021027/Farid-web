// components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 flex justify-center space-x-4 rounded-b-2xl shadow-lg">
      <Link className="bg-yellow-300 px-4 py-2 rounded-xl font-bold text-lg" to="/">🏠 Inicio</Link>
      <Link className="bg-green-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado1">1° Grado</Link>
      <Link className="bg-pink-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado2">2° Grado</Link>
      <Link className="bg-purple-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado3">3° Grado</Link>
      <Link className="bg-orange-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado4">4° Grado</Link>
    </nav>
  );
}

export default Navbar;

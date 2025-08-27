// components/Navbar.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 flex items-center justify-between rounded-b-2xl shadow-lg">
      <div className="flex items-center space-x-4">
        <Link className="bg-yellow-300 px-4 py-2 rounded-xl font-bold text-lg" to="/">🏠 Inicio</Link>
        <Link className="bg-green-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado1">1° Grado</Link>
        <Link className="bg-pink-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado2">2° Grado</Link>
        <Link className="bg-purple-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado3">3° Grado</Link>
        <Link className="bg-orange-300 px-4 py-2 rounded-xl font-bold text-lg" to="/grado4">4° Grado</Link>
      </div>
      <div className="flex items-center space-x-3">
        <span className="font-bold text-lg text-white">Farid Huelva</span>
        <img
          src={Logo}
          alt="Logo"
          className="h-9 w-9 rounded-full border-2 border-white object-cover"
        />
      </div>
    </nav>
  );
}

export default Navbar;

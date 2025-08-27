// components/Navbar.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between  shadow-lg">
      <div className="flex flex-wrap items-center gap-2">
        <Link className="bg-yellow-300 px-3 py-2 md:px-4 rounded-xl font-bold text-sm md:text-lg" to="/">🏠 Inicio</Link>
        <Link className="bg-green-300 px-3 py-2 md:px-4 rounded-xl font-bold text-sm md:text-lg" to="/grado1">1° Grado</Link>
        <Link className="bg-pink-300 px-3 py-2 md:px-4 rounded-xl font-bold text-sm md:text-lg" to="/grado2">2° Grado</Link>
        <Link className="bg-purple-300 px-3 py-2 md:px-4 rounded-xl font-bold text-sm md:text-lg" to="/grado3">3° Grado</Link>
        <Link className="bg-orange-300 px-3 py-2 md:px-4 rounded-xl font-bold text-sm md:text-lg" to="/grado4">4° Grado</Link>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-3">
        <span className="font-bold text-base md:text-lg text-white">Farid Huelva</span>
        <img
          src={Logo}
          alt="Logo"
          className="h-8 w-8 md:h-9 md:w-9 rounded-full border-2 border-white object-cover"
        />
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const grados = [
    {
      id: 1,
      titulo: "1° Grado",
      descripcion: "¡Aprende lo básico de la computadora!",
      color: "from-red-400 to-red-500",
      icono: "🖥️",
      temas: ["Partes de la computadora", "Uso del mouse", "Colores y formas"]
    },
    {
      id: 2,
      titulo: "2° Grado",
      descripcion: "¡Descubre el teclado y más!",
      color: "from-teal-400 to-teal-500",
      icono: "⌨️",
      temas: ["Teclado básico", "Dibujo digital", "Juegos educativos"]
    },
    {
      id: 3,
      titulo: "3° Grado",
      descripcion: "¡Explora internet seguro!",
      color: "from-blue-400 to-blue-500",
      icono: "🌐",
      temas: ["Navegación segura", "Búsquedas básicas", "Correo electrónico"]
    },
    {
      id: 4,
      titulo: "4° Grado",
      descripcion: "¡Crea y programa!",
      color: "from-green-400 to-green-500",
      icono: "💻",
      temas: ["Programación básica", "Presentaciones", "Proyectos digitales"]
    }
  ];

  return (
    <div className="min-h-screen   bg-gradient-to-br from-indigo-500 to-purple-600 font-['Comic_Sans_MS'] text-gray-800">
      {/* Header con título principal */}
      <header className="text-center py-8 px-4 bg-white/95 backdrop-blur-sm rounded-b-[30px] mb-8 shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-teal-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
          <span className="inline-block animate-bounce mx-2">🚀</span>
          Informática para Niños
          <span className="inline-block animate-bounce mx-2">🚀</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-4 font-semibold">
          ¡Aprende tecnología de manera divertida y segura!
        </p>
      </header>

      {/* Sección de bienvenida */}
      <section className="text-center py-8 px-4 mx-4 mb-8 bg-white/90 rounded-[20px] shadow-2xl">
        <div>
          <h2 className="text-3xl md:text-4xl text-red-400 mb-4 font-bold">¡Bienvenido a tu aventura digital! 🎉</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
            Aquí aprenderás todo sobre computadoras, internet y tecnología 
            de una manera súper divertida. ¡Elige tu grado y comienza a explorar!
          </p>
        </div>
      </section>

      {/* Grid de grados */}
      <section className="py-8 px-4">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-8 font-bold drop-shadow-lg">
          Selecciona tu Grado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {grados.map((grado) => (
            <Link 
              to={`/grado${grado.id}`} 
              key={grado.id} 
              className="group bg-white rounded-[20px] p-8 text-decoration-none text-inherit transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-4 border-transparent hover:border-opacity-100 relative overflow-hidden shadow-xl"
            >
              {/* Barra de color superior */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${grado.color}`}></div>
              
              <div className="text-6xl text-center mb-4 animate-bounce">"{grado.icono}"</div>
              <h3 className={`text-2xl md:text-3xl bg-gradient-to-r ${grado.color} bg-clip-text text-transparent text-center mb-4 font-bold`}>
                {grado.titulo}
              </h3>
              <p className="text-lg text-gray-600 text-center mb-6 font-semibold">
                {grado.descripcion}
              </p>
              <div className="mb-6">
                <h4 className="text-lg text-gray-800 mb-2 font-semibold">Lo que aprenderás:</h4>
                <ul className="space-y-2">
                  {grado.temas.map((tema, index) => (
                    <li key={index} className="text-gray-600 text-sm">✨ {tema}</li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gradient-to-r ${grado.color} text-white text-center py-4 rounded-[15px] font-bold text-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer`}>
                ¡Empezar! 🚀
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-8 font-bold drop-shadow-lg">
          ¿Por qué aprender con nosotros? 🤔
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/95 p-8 rounded-[20px] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 animate-pulse">🎮</div>
            <h3 className="text-xl text-red-400 mb-4 font-bold">Aprendizaje Divertido</h3>
            <p className="text-gray-600 leading-relaxed">Juegos y actividades interactivas que hacen el aprendizaje emocionante</p>
          </div>
          <div className="bg-white/95 p-8 rounded-[20px] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 animate-pulse">🛡️</div>
            <h3 className="text-xl text-red-400 mb-4 font-bold">100% Seguro</h3>
            <p className="text-gray-600 leading-relaxed">Contenido apropiado para niños y navegación protegida</p>
          </div>
          <div className="bg-white/95 p-8 rounded-[20px] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 animate-pulse">📚</div>
            <h3 className="text-xl text-red-400 mb-4 font-bold">Progreso Gradual</h3>
            <p className="text-gray-600 leading-relaxed">Desde conceptos básicos hasta habilidades avanzadas</p>
          </div>
          <div className="bg-white/95 p-8 rounded-[20px] shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 animate-pulse">🏆</div>
            <h3 className="text-xl text-red-400 mb-4 font-bold">Logros y Recompensas</h3>
            <p className="text-gray-600 leading-relaxed">Gana puntos y certificados por tu progreso</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 bg-white/90 mx-4 mt-8 rounded-t-[20px]">
        <p className="text-xl md:text-2xl text-gray-800 mb-4 font-semibold">
          ¡Preparado para tu aventura digital? ¡Elige un grado y comienza! 🎯
        </p>
        <div className="text-4xl animate-pulse">
          🖥️ ⌨️ 🌐 💻 🎮 🚀
        </div>
      </footer>
    </div>
  );
};

export default Inicio;

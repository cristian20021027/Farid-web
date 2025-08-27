import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bimestresData from '../data/grado2';
import CardClase from "../components/CardClase";

function Grado2() {
  const [unidadActiva, setUnidadActiva] = useState(1);
  const [progreso, setProgreso] = useState({
    1: { completada: false, actividades: 0, total: 4 },
    2: { completada: false, actividades: 0, total: 4 },
    3: { completada: false, actividades: 0, total: 4 },
    4: { completada: false, actividades: 0, total: 4 }
  });
  const [mostrarJuego, setMostrarJuego] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mostrarFAQ, setMostrarFAQ] = useState(false);

  const bimestres = bimestresData;

  const bimestreActual = bimestres.find(b => b.id === unidadActiva);

  // Función para marcar actividad como completada
  const completarActividad = (bimestreId) => {
    setProgreso(prev => ({
      ...prev,
      [bimestreId]: {
        ...prev[bimestreId],
        actividades: Math.min(prev[bimestreId].actividades + 1, prev[bimestreId].total),
        completada: prev[bimestreId].actividades + 1 >= prev[bimestreId].total
      }
    }));
  };

  // Función para calcular progreso total
  const progresoTotal = () => {
    const totalActividades = Object.values(progreso).reduce((sum, bimestre) => sum + bimestre.total, 0);
    const actividadesCompletadas = Object.values(progreso).reduce((sum, bimestre) => sum + bimestre.actividades, 0);
    return Math.round((actividadesCompletadas / totalActividades) * 100);
  };

  // Mini-juego de memoria
  const iniciarJuego = () => {
    setMostrarJuego(true);
    setPuntuacion(0);
  };

  const finalizarJuego = () => {
    setMostrarJuego(false);
    if (puntuacion > 0) {
      completarActividad(unidadActiva);
    }
  };

  // Preguntas frecuentes
  const faqs = [
    {
      pregunta: "¿Es seguro que mi hijo use Internet en 2° grado?",
      respuesta: "Sí, siempre que esté supervisado, use sitios apropiados para su edad y siga las reglas de seguridad."
    },
    {
      pregunta: "¿Qué programas debe aprender mi hijo en 2° grado?",
      respuesta: "Word, Excel, PowerPoint, Paint avanzado y herramientas de Internet seguras."
    },
    {
      pregunta: "¿Cuánto tiempo debe pasar en la computadora?",
      respuesta: "Se recomienda máximo 1.5 horas por día para niños de 7-8 años, con descansos cada 30 minutos."
    },
    {
      pregunta: "¿Cómo puedo ayudar a mi hijo con la informática?",
      respuesta: "Practica junto con él, supervisa su uso de Internet y celebra sus logros en el aprendizaje."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-100 hover:text-white mb-4 transition-colors">
            <span className="mr-2">←</span> Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            🎓 2° Grado - Informática
          </h1>
          <p className="text-xl text-center text-green-100 max-w-3xl mx-auto">
            ¡Aprende herramientas avanzadas de computación e Internet seguro!
          </p>
          
          {/* Barra de Progreso */}
          <div className="mt-6 bg-white/20 rounded-full p-1">
            <div className="bg-green-400 h-3 rounded-full transition-all duration-500" 
                 style={{ width: `${progresoTotal()}%` }}></div>
          </div>
          <p className="text-center mt-2 text-green-100">
            Progreso: {progresoTotal()}% Completado
          </p>
        </div>
      </header>

      {/* Navegación de Bimestres */}
      <nav className="bg-white shadow-lg py-4 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Bimestres de Aprendizaje</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {bimestres.map((bimestre) => (
              <button
                key={bimestre.id}
                onClick={() => setUnidadActiva(bimestre.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 relative ${
                  unidadActiva === bimestre.id
                    ? `bg-gradient-to-r ${bimestre.color} text-white shadow-lg scale-105`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {bimestre.icono} {bimestre.titulo}
                {/* Indicador de progreso */}
                {progreso[bimestre.id].completada && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Bimestre Actual */}
        <section className="mb-12">
          <div className={`bg-gradient-to-r ${bimestreActual.color} text-white rounded-[20px] p-8 mb-8 shadow-2xl`}>
            <div className="text-center">
              <div className="text-6xl mb-4">{bimestreActual.icono}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{bimestreActual.titulo}</h2>
              <p className="text-xl text-white/90 mb-4">
                ¡Aprende paso a paso con actividades divertidas!
              </p>
              
              {/* Progreso del bimestre actual */}
              <div className="bg-white/20 rounded-full p-1 mb-4">
                <div className="bg-white h-2 rounded-full transition-all duration-500" 
                     style={{ width: `${(progreso[bimestreActual.id].actividades / progreso[bimestreActual.id].total) * 100}%` }}></div>
              </div>
              <p className="text-sm">
                {progreso[bimestreActual.id].actividades} de {progreso[bimestreActual.id].total} actividades completadas
              </p>
            </div>
          </div>

          {/* Clases del Bimestre */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bimestreActual.clases.map((clase, index) => (
              <Link key={index} to={`/grado2/bimestre/${bimestreActual.id}/clase/${index + 1}`} className="block bg-white rounded-[20px] p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-3">📖</span>
                  {clase.titulo}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{clase.descripcion}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-700 text-lg">Lo que aprenderás:</h4>
                  <ul className="space-y-2">
                    {clase.contenido.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tarea */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h5 className="font-bold text-yellow-800 mb-2">📝 Tarea:</h5>
                  <p className="text-yellow-700 text-sm">{clase.tarea}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mini-Juego Interactivo */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-[20px] p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎮 ¡Juego de Práctica!</h2>
            <p className="text-xl mb-6">
              Practica lo que aprendiste con este divertido juego de memoria
            </p>
            
            {!mostrarJuego ? (
              <button
                onClick={iniciarJuego}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors duration-300"
              >
                🚀 ¡Jugar Ahora!
              </button>
            ) : (
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">🎯 Juego de Memoria</h3>
                <p className="mb-4">Encuentra las parejas de iconos de computadora</p>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {['💻', '🌐', '📊', '🎨', '💻', '🌐', '📊', '🎨'].map((icono, index) => (
                    <button
                      key={index}
                      className="w-16 h-16 bg-white/30 rounded-lg text-2xl hover:bg-white/50 transition-colors duration-300"
                      onClick={() => setPuntuacion(prev => prev + 10)}
                    >
                      {icono}
                    </button>
                  ))}
                </div>
                <p className="text-xl mb-4">Puntuación: {puntuacion}</p>
                <button
                  onClick={finalizarJuego}
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold transition-colors duration-300"
                >
                  ✅ Finalizar Juego
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Actividades Prácticas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎯 Actividades Prácticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardClase 
              titulo="Navegación Segura" 
              descripcion="Practica navegando en sitios web educativos seguros" 
              icono="🌐" 
            />
            <CardClase 
              titulo="Documentos en Word" 
              descripcion="Crea documentos con formato y estilos" 
              icono="📝" 
            />
            <CardClase 
              titulo="Hojas de Cálculo" 
              descripcion="Organiza datos y crea gráficos en Excel" 
              icono="📊" 
            />
            <CardClase 
              titulo="Presentaciones" 
              descripcion="Crea presentaciones atractivas en PowerPoint" 
              icono="📽️" 
            />
            <CardClase 
              titulo="Edición de Imágenes" 
              descripcion="Edita y mejora fotos digitales" 
              icono="🖼️" 
            />
            <CardClase 
              titulo="Proyectos Integrados" 
              descripcion="Combina todas las herramientas en proyectos" 
              icono="🚀" 
            />
          </div>
        </section>

        {/* Recursos Descargables */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📥 Recursos Descargables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-gray-800 mb-2">Guía de Estudio</h3>
              <p className="text-gray-600 text-sm mb-4">Resumen de todos los temas</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Actividades</h3>
              <p className="text-gray-600 text-sm mb-4">Ejercicios imprimibles</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">Certificado</h3>
              <p className="text-gray-600 text-sm mb-4">Diploma de completado</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-800 mb-2">Biblioteca</h3>
              <p className="text-gray-600 text-sm mb-4">Recursos adicionales</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Ver Recursos
              </button>
            </div>
          </div>
        </section>

        {/* Consejos para Padres */}
        <section className="bg-gradient-to-r from-green-400 to-blue-400 rounded-[20px] p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">💡 Consejos para Padres y Maestros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-3">Supervisión Avanzada</h3>
              <ul className="space-y-2">
                <li>• Supervisa el uso de Internet y redes sociales</li>
                <li>• Establece límites de tiempo apropiados</li>
                <li>• Revisa el contenido que consume</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Motivación y Progreso</h3>
              <ul className="space-y-2">
                <li>• Celebra los logros tecnológicos</li>
                <li>• Ayuda con proyectos complejos</li>
                <li>• Fomenta la creatividad digital</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="mb-12">
          <div className="bg-white rounded-[20px] p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">❓ Preguntas Frecuentes</h2>
              <button
                onClick={() => setMostrarFAQ(!mostrarFAQ)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                {mostrarFAQ ? 'Ocultar FAQ' : 'Mostrar FAQ'}
              </button>
            </div>
            
            {mostrarFAQ && (
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{faq.pregunta}</h3>
                    <p className="text-gray-600">{faq.respuesta}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Evaluación */}
        <section className="bg-white rounded-[20px] p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📊 Evaluación del Aprendizaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Objetivos</h3>
              <p className="text-gray-600">Dominar herramientas básicas de Office e Internet seguro</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-bold text-gray-800 mb-2">Habilidades</h3>
              <p className="text-gray-600">Crear documentos, hojas de cálculo y presentaciones</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">Progreso</h3>
              <p className="text-gray-600">Navegar de manera segura y crear proyectos integrados</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl mb-4">
            ¡Felicidades por completar el 2° Grado de Informática! 🎉
          </p>
          <p className="text-gray-300 mb-6">
            Estás listo para continuar con el 3° Grado y aprender más sobre tecnología
          </p>
          
          {/* Estadísticas del progreso */}
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Tu Progreso</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-2xl font-bold text-green-400">{progresoTotal()}%</p>
                <p>Completado</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">
                  {Object.values(progreso).filter(u => u.completada).length}
                </p>
                <p>Bimestres</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">
                  {Object.values(progreso).reduce((sum, u) => sum + u.actividades, 0)}
                </p>
                <p>Actividades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">
                  {Object.values(progreso).reduce((sum, u) => sum + u.total, 0)}
                </p>
                <p>Total</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Volver al Inicio
            </Link>
            <button 
              onClick={() => window.print()}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              🖨️ Imprimir Certificado
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Grado2;

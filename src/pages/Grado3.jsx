import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardClase from "../components/CardClase";

function Grado3() {
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

  const bimestres = [
    {
      id: 1,
      titulo: "1ER BIMESTRE",
      color: "from-purple-400 to-purple-600",
      icono: "🚀",
      clases: [
        {
          titulo: "CLASE 1: Programación Básica - Conceptos",
          descripcion: "Aprenderemos los conceptos fundamentales de la programación: qué es, para qué sirve y cómo funciona.",
          contenido: [
            "¿Qué es la programación?",
            "Lenguajes de programación",
            "Algoritmos y secuencias",
            "Pensamiento computacional"
          ],
          tarea: "Crea un algoritmo simple para hacer tu sándwich favorito. Escribe los pasos en orden."
        },
        {
          titulo: "CLASE 2: Scratch - Introducción",
          descripcion: "Scratch es un lenguaje de programación visual que nos permite crear juegos y animaciones de manera divertida.",
          contenido: [
            "Interfaz de Scratch",
            "Bloques de programación",
            "Sprites y escenarios",
            "Crear tu primer proyecto"
          ],
          tarea: "Crea un sprite personalizado y haz que se mueva por la pantalla usando bloques de movimiento."
        },
        {
          titulo: "CLASE 3: Eventos y Controles en Scratch",
          descripcion: "Los eventos y controles nos permiten hacer que nuestros programas respondan a diferentes acciones.",
          contenido: [
            "Eventos (cuando se hace clic, cuando se presiona tecla)",
            "Controles (repetir, si-entonces)",
            "Condiciones y bucles",
            "Crear interacciones"
          ],
          tarea: "Crea un programa que cambie el color del sprite cuando presiones diferentes teclas."
        },
        {
          titulo: "CLASE 4: Variables y Datos en Scratch",
          descripcion: "Las variables nos permiten almacenar y manipular información en nuestros programas.",
          contenido: [
            "¿Qué son las variables?",
            "Crear y usar variables",
            "Operadores matemáticos",
            "Contadores y puntuaciones"
          ],
          tarea: "Crea un juego simple con un contador de puntos que aumente cuando toques un objeto."
        }
      ]
    },
    {
      id: 2,
      titulo: "2DO BIMESTRE",
      color: "from-pink-400 to-pink-600",
      icono: "🎮",
      clases: [
        {
          titulo: "CLASE 5: Creación de Juegos en Scratch",
          descripcion: "Aprenderemos a crear juegos completos usando todas las herramientas de Scratch.",
          contenido: [
            "Diseño del juego",
            "Mecánicas de juego",
            "Colisiones y detección",
            "Sistema de vidas y puntos"
          ],
          tarea: "Crea un juego de plataformas simple donde el personaje debe saltar obstáculos."
        },
        {
          titulo: "CLASE 6: Animaciones y Efectos",
          descripcion: "Crearemos animaciones atractivas y efectos visuales para hacer nuestros proyectos más interesantes.",
          contenido: [
            "Cambios de disfraz",
            "Efectos de transición",
            "Animaciones de personajes",
            "Efectos de sonido"
          ],
          tarea: "Crea una animación de un personaje que camine, salte y cambie de expresión."
        },
        {
          titulo: "CLASE 7: Proyectos Colaborativos",
          descripcion: "Aprenderemos a trabajar en equipo para crear proyectos más grandes y complejos.",
          contenido: [
            "Planificación en equipo",
            "División de tareas",
            "Comunicación efectiva",
            "Integración de componentes"
          ],
          tarea: "Forma un equipo de 3 personas y crea un cuento interactivo con animaciones."
        },
        {
          titulo: "CLASE 8: Presentación de Proyectos",
          descripcion: "Aprenderemos a presentar nuestros proyectos de manera efectiva y profesional.",
          contenido: [
            "Organización de la presentación",
            "Explicación del código",
            "Demostración del proyecto",
            "Recibir y dar feedback"
          ],
          tarea: "Prepara una presentación de 3 minutos sobre tu proyecto de Scratch para la clase."
        }
      ]
    },
    {
      id: 3,
      titulo: "3ER BIMESTRE",
      color: "from-indigo-400 to-indigo-600",
      icono: "🌐",
      clases: [
        {
          titulo: "CLASE 9: HTML Básico",
          descripcion: "HTML es el lenguaje que se usa para crear páginas web. Aprenderemos a crear contenido web básico.",
          contenido: [
            "¿Qué es HTML?",
            "Estructura básica de una página",
            "Etiquetas principales (h1, p, img)",
            "Crear tu primera página web"
          ],
          tarea: "Crea una página web simple sobre tu tema favorito usando HTML básico."
        },
        {
          titulo: "CLASE 10: CSS - Estilos Básicos",
          descripcion: "CSS nos permite dar estilo y color a nuestras páginas web para hacerlas más atractivas.",
          contenido: [
            "¿Qué es CSS?",
            "Colores y fondos",
            "Tipografías y tamaños",
            "Márgenes y espaciado"
          ],
          tarea: "Aplica estilos CSS a tu página web HTML para hacerla más atractiva."
        },
        {
          titulo: "CLASE 11: Multimedia en la Web",
          descripcion: "Aprenderemos a incluir imágenes, videos y audio en nuestras páginas web.",
          contenido: [
            "Insertar imágenes",
            "Videos de YouTube",
            "Audio y música",
            "Optimización de archivos"
          ],
          tarea: "Crea una página web multimedia con imágenes, un video y música de fondo."
        },
        {
          titulo: "CLASE 12: Navegación y Enlaces",
          descripcion: "Los enlaces nos permiten conectar diferentes páginas web y crear navegación.",
          contenido: [
            "Crear enlaces internos",
            "Enlaces externos",
            "Menús de navegación",
            "Enlaces de descarga"
          ],
          tarea: "Crea un sitio web de 3 páginas con menú de navegación entre ellas."
        }
      ]
    },
    {
      id: 4,
      titulo: "4TO BIMESTRE",
      color: "from-red-400 to-red-600",
      icono: "💻",
      clases: [
        {
          titulo: "CLASE 13: Proyecto Web Completo",
          descripcion: "Aplicaremos todo lo aprendido para crear un sitio web completo y funcional.",
          contenido: [
            "Planificación del sitio",
            "Diseño de páginas",
            "Implementación con HTML/CSS",
            "Pruebas y correcciones"
          ],
          tarea: "Crea un sitio web completo sobre un tema de tu elección con al menos 5 páginas."
        },
        {
          titulo: "CLASE 14: Publicación en Internet",
          descripcion: "Aprenderemos a publicar nuestros sitios web para que otros puedan verlos.",
          contenido: [
            "Servicios de hosting gratuitos",
            "Subir archivos al servidor",
            "Dominios y URLs",
            "Mantenimiento del sitio"
          ],
          tarea: "Publica tu sitio web en un servicio gratuito y comparte el enlace con la clase."
        },
        {
          titulo: "CLASE 15: Seguridad en la Web",
          descripcion: "Es importante aprender sobre seguridad cuando creamos contenido para Internet.",
          contenido: [
            "Protección de información personal",
            "Contraseñas seguras",
            "Derechos de autor",
            "Uso responsable de la web"
          ],
          tarea: "Crea una lista de 10 reglas de seguridad para usar Internet de manera responsable."
        },
        {
          titulo: "CLASE 16: Proyecto Final Integrador",
          descripcion: "Crearemos un proyecto final que combine programación, diseño web y creatividad.",
          contenido: [
            "Concepto del proyecto",
            "Desarrollo completo",
            "Documentación del código",
            "Presentación final"
          ],
          tarea: "Desarrolla un proyecto final que integre Scratch y HTML/CSS. Presenta tu trabajo a la clase."
        }
      ]
    }
  ];

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

  // Mini-juego de programación
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
      pregunta: "¿Es difícil aprender programación en 3° grado?",
      respuesta: "No, Scratch está diseñado específicamente para niños y hace que la programación sea divertida y visual."
    },
    {
      pregunta: "¿Qué beneficios tiene aprender programación?",
      respuesta: "Desarrolla el pensamiento lógico, la creatividad, la resolución de problemas y prepara para el futuro digital."
    },
    {
      pregunta: "¿Cuánto tiempo debe dedicar mi hijo a la programación?",
      respuesta: "Se recomienda 1-2 horas por semana, con proyectos prácticos y tiempo para experimentar."
    },
    {
      pregunta: "¿Cómo puedo apoyar el aprendizaje de programación?",
      respuesta: "Interésate por sus proyectos, celebra sus logros y ayúdalo a resolver problemas cuando se atore."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-purple-100 hover:text-white mb-4 transition-colors">
            <span className="mr-2">←</span> Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            🎓 3° Grado - Informática
          </h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            ¡Aprende programación básica y creación de páginas web!
          </p>
          
          {/* Barra de Progreso */}
          <div className="mt-6 bg-white/20 rounded-full p-1">
            <div className="bg-purple-400 h-3 rounded-full transition-all duration-500" 
                 style={{ width: `${progresoTotal()}%` }}></div>
          </div>
          <p className="text-center mt-2 text-purple-100">
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
              <div key={index} className="bg-white rounded-[20px] p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
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
                        <span className="text-purple-500 mr-2 mt-1">✓</span>
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
              </div>
            ))}
          </div>
        </section>

        {/* Mini-Juego de Programación */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[20px] p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎮 ¡Juego de Programación!</h2>
            <p className="text-xl mb-6">
              Practica la lógica de programación con este divertido juego
            </p>
            
            {!mostrarJuego ? (
              <button
                onClick={iniciarJuego}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-100 transition-colors duration-300"
              >
                🚀 ¡Jugar Ahora!
              </button>
            ) : (
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">🎯 Juego de Lógica</h3>
                <p className="mb-4">Ordena los bloques de código para completar el programa</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['🚀', '💻', '🌐', '🎨'].map((icono, index) => (
                    <button
                      key={index}
                      className="w-20 h-20 bg-white/30 rounded-lg text-3xl hover:bg-white/50 transition-colors duration-300"
                      onClick={() => setPuntuacion(prev => prev + 25)}
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
              titulo="Proyectos Scratch" 
              descripcion="Crea juegos y animaciones con programación visual" 
              icono="🎮" 
            />
            <CardClase 
              titulo="Páginas Web" 
              descripcion="Desarrolla sitios web con HTML y CSS" 
              icono="🌐" 
            />
            <CardClase 
              titulo="Programación Lógica" 
              descripcion="Resuelve problemas usando pensamiento computacional" 
              icono="🧩" 
            />
            <CardClase 
              titulo="Proyectos Colaborativos" 
              descripcion="Trabaja en equipo para crear proyectos grandes" 
              icono="👥" 
            />
            <CardClase 
              titulo="Presentaciones Digitales" 
              descripcion="Comparte tus proyectos de manera profesional" 
              icono="📊" 
            />
            <CardClase 
              titulo="Portfolio Digital" 
              descripcion="Crea una colección de tus mejores trabajos" 
              icono="📁" 
            />
          </div>
        </section>

        {/* Recursos Descargables */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📥 Recursos Descargables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-gray-800 mb-2">Guía de Programación</h3>
              <p className="text-gray-600 text-sm mb-4">Conceptos básicos de programación</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Proyectos Scratch</h3>
              <p className="text-gray-600 text-sm mb-4">Ideas y plantillas de proyectos</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">Certificado</h3>
              <p className="text-gray-600 text-sm mb-4">Diploma de completado</p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-800 mb-2">Biblioteca</h3>
              <p className="text-gray-600 text-sm mb-4">Recursos adicionales</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Ver Recursos
              </button>
            </div>
          </div>
        </section>

        {/* Consejos para Padres */}
        <section className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-[20px] p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">💡 Consejos para Padres y Maestros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-3">Apoyo en Programación</h3>
              <ul className="space-y-2">
                <li>• Interésate por sus proyectos de Scratch</li>
                <li>• Ayúdalo a resolver problemas lógicos</li>
                <li>• Celebra cada logro de programación</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
              <ul className="space-y-2">
                <li>• Revisa sus páginas web</li>
                <li>• Sugiere mejoras de diseño</li>
                <li>• Ayuda con la publicación online</li>
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
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                {mostrarFAQ ? 'Ocultar FAQ' : 'Mostrar FAQ'}
              </button>
            </div>
            
            {mostrarFAQ && (
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6">
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
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Objetivos</h3>
              <p className="text-gray-600">Dominar conceptos básicos de programación y desarrollo web</p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-bold text-gray-800 mb-2">Habilidades</h3>
              <p className="text-gray-600">Crear proyectos en Scratch y páginas web básicas</p>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">Progreso</h3>
              <p className="text-gray-600">Desarrollar pensamiento computacional y creatividad digital</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl mb-4">
            ¡Felicidades por completar el 3° Grado de Informática! 🎉
          </p>
          <p className="text-gray-300 mb-6">
            Estás listo para continuar con el 4° Grado y aprender más sobre tecnología
          </p>
          
          {/* Estadísticas del progreso */}
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Tu Progreso</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-2xl font-bold text-purple-400">{progresoTotal()}%</p>
                <p>Completado</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-400">
                  {Object.values(progreso).filter(u => u.completada).length}
                </p>
                <p>Bimestres</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-400">
                  {Object.values(progreso).reduce((sum, u) => sum + u.actividades, 0)}
                </p>
                <p>Actividades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-400">
                  {Object.values(progreso).reduce((sum, u) => sum + u.total, 0)}
                </p>
                <p>Total</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Volver al Inicio
            </Link>
            <button 
              onClick={() => window.print()}
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              🖨️ Imprimir Certificado
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Grado3;


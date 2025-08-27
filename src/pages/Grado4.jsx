import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardClase from "../components/CardClase";

function Grado4() {
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
      color: "from-red-400 to-red-600",
      icono: "🤖",
      clases: [
        {
          titulo: "CLASE 1: Programación Avanzada en Scratch",
          descripcion: "Profundizaremos en conceptos avanzados de programación usando Scratch para crear proyectos más complejos.",
          contenido: [
            "Clones y duplicación de objetos",
            "Listas y arrays",
            "Funciones personalizadas",
            "Proyectos multinivel"
          ],
          tarea: "Crea un juego de plataformas con al menos 3 niveles diferentes usando clones y listas."
        },
        {
          titulo: "CLASE 2: Introducción a la Robótica",
          descripcion: "Aprenderemos qué es la robótica y cómo los robots funcionan en nuestro mundo.",
          contenido: [
            "¿Qué es la robótica?",
            "Tipos de robots",
            "Sensores y actuadores",
            "Aplicaciones de la robótica"
          ],
          tarea: "Investiga sobre 3 robots diferentes y crea una presentación sobre sus funciones."
        },
        {
          titulo: "CLASE 3: Programación de Robots Virtuales",
          descripcion: "Usaremos simuladores de robots para aprender programación robótica básica.",
          contenido: [
            "Simuladores de robots",
            "Comandos básicos de movimiento",
            "Secuencias de programación",
            "Resolución de problemas"
          ],
          tarea: "Programa un robot virtual para que complete un laberinto simple."
        },
        {
          titulo: "CLASE 4: Algoritmos y Lógica",
          descripcion: "Desarrollaremos el pensamiento algorítmico para resolver problemas complejos.",
          contenido: [
            "Estructuras de control avanzadas",
            "Algoritmos de búsqueda",
            "Optimización de código",
            "Debugging y corrección de errores"
          ],
          tarea: "Crea un algoritmo para ordenar una lista de números y impleméntalo en Scratch."
        }
      ]
    },
    {
      id: 2,
      titulo: "2DO BIMESTRE",
      color: "from-yellow-400 to-orange-600",
      icono: "🎯",
      clases: [
        {
          titulo: "CLASE 5: JavaScript Básico",
          descripcion: "JavaScript es un lenguaje de programación real que se usa en las páginas web.",
          contenido: [
            "Sintaxis básica de JavaScript",
            "Variables y tipos de datos",
            "Condicionales y bucles",
            "Funciones simples"
          ],
          tarea: "Crea un programa en JavaScript que calcule el área de diferentes figuras geométricas."
        },
        {
          titulo: "CLASE 6: Interactividad en la Web",
          descripcion: "Aprenderemos a hacer páginas web interactivas usando JavaScript.",
          contenido: [
            "Eventos del DOM",
            "Manipulación de elementos",
            "Validación de formularios",
            "Animaciones con JavaScript"
          ],
          tarea: "Crea una página web con un formulario que valide los datos ingresados."
        },
        {
          titulo: "CLASE 7: Diseño Responsivo",
          descripcion: "Aprenderemos a crear páginas web que se vean bien en todos los dispositivos.",
          contenido: [
            "¿Qué es el diseño responsivo?",
            "Media queries en CSS",
            "Flexbox y Grid",
            "Adaptación a móviles"
          ],
          tarea: "Convierte tu página web existente en una versión responsiva que funcione en móviles."
        },
        {
          titulo: "CLASE 8: Optimización Web",
          descripcion: "Aprenderemos técnicas para hacer que nuestras páginas web sean más rápidas y eficientes.",
          contenido: [
            "Optimización de imágenes",
            "Minificación de código",
            "Caché del navegador",
            "Pruebas de rendimiento"
          ],
          tarea: "Optimiza una página web existente y mide la mejora en su velocidad de carga."
        }
      ]
    },
    {
      id: 3,
      titulo: "3ER BIMESTRE",
      color: "from-teal-400 to-teal-600",
      icono: "🔧",
      clases: [
        {
          titulo: "CLASE 9: Proyectos de Hardware",
          descripcion: "Exploraremos proyectos que combinan software y hardware básico.",
          contenido: [
            "Arduino básico",
            "LEDs y sensores",
            "Programación de microcontroladores",
            "Proyectos de automatización"
          ],
          tarea: "Construye un circuito simple con LEDs y programa un patrón de parpadeo."
        },
        {
          titulo: "CLASE 10: Internet de las Cosas (IoT)",
          descripcion: "Aprenderemos sobre la tecnología que conecta dispositivos a Internet.",
          contenido: [
            "¿Qué es el IoT?",
            "Dispositivos inteligentes",
            "Aplicaciones del IoT",
            "Seguridad en dispositivos conectados"
          ],
          tarea: "Investiga sobre 5 dispositivos IoT comunes y crea un diagrama de sus conexiones."
        },
        {
          titulo: "CLASE 11: Inteligencia Artificial Básica",
          descripcion: "Exploraremos conceptos básicos de inteligencia artificial y machine learning.",
          contenido: [
            "¿Qué es la IA?",
            "Tipos de inteligencia artificial",
            "Aplicaciones en la vida diaria",
            "Ética de la IA"
          ],
          tarea: "Crea una presentación sobre cómo la IA está cambiando diferentes industrias."
        },
        {
          titulo: "CLASE 12: Proyectos de IA",
          descripcion: "Aplicaremos conceptos de IA en proyectos prácticos usando herramientas simples.",
          contenido: [
            "Herramientas de IA para niños",
            "Reconocimiento de patrones",
            "Chatbots simples",
            "Proyectos de clasificación"
          ],
          tarea: "Crea un chatbot simple que pueda responder preguntas básicas sobre un tema."
        }
      ]
    },
    {
      id: 4,
      titulo: "4TO BIMESTRE",
      color: "from-blue-400 to-blue-600",
      icono: "🚀",
      clases: [
        {
          titulo: "CLASE 13: Proyecto Final Integrador",
          descripcion: "Crearemos un proyecto final que combine todas las habilidades aprendidas.",
          contenido: [
            "Planificación del proyecto",
            "Desarrollo de componentes",
            "Integración de tecnologías",
            "Documentación completa"
          ],
          tarea: "Desarrolla un proyecto final que integre programación, web, robótica y IA."
        },
        {
          titulo: "CLASE 14: Presentación y Demostración",
          descripcion: "Aprenderemos a presentar nuestros proyectos de manera profesional.",
          contenido: [
            "Preparación de presentaciones",
            "Demostración en vivo",
            "Preguntas y respuestas",
            "Feedback y mejoras"
          ],
          tarea: "Prepara una presentación de 5 minutos sobre tu proyecto final para la clase."
        },
        {
          titulo: "CLASE 15: Portafolio Digital",
          descripcion: "Crearemos un portafolio digital para mostrar todos nuestros proyectos.",
          contenido: [
            "Organización del portafolio",
            "Diseño atractivo",
            "Documentación de proyectos",
            "Publicación online"
          ],
          tarea: "Crea un portafolio digital con todos tus proyectos del año y publícalo en línea."
        },
        {
          titulo: "CLASE 16: Preparación para el Futuro",
          descripcion: "Exploraremos las carreras y oportunidades en tecnología para el futuro.",
          contenido: [
            "Carreras en tecnología",
            "Habilidades del futuro",
            "Continuar aprendiendo",
            "Proyectos personales"
          ],
          tarea: "Investiga sobre 3 carreras en tecnología que te interesen y crea un plan de estudio."
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

  // Mini-juego de programación avanzada
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
      pregunta: "¿Es muy difícil la programación en 4° grado?",
      respuesta: "No, avanzamos gradualmente desde conceptos básicos hasta proyectos más complejos, siempre adaptados a la edad."
    },
    {
      pregunta: "¿Qué beneficios tiene aprender robótica y IA?",
      respuesta: "Desarrolla pensamiento crítico, resolución de problemas y prepara para las carreras del futuro."
    },
    {
      pregunta: "¿Mi hijo necesita una computadora especial?",
      respuesta: "No, cualquier computadora moderna puede ejecutar las herramientas que usamos en clase."
    },
    {
      pregunta: "¿Cómo puedo apoyar el aprendizaje avanzado?",
      respuesta: "Interésate por sus proyectos, ayúdalo a investigar temas complejos y celebra sus logros tecnológicos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 to-blue-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-red-100 hover:text-white mb-4 transition-colors">
            <span className="mr-2">←</span> Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            🎓 4° Grado - Informática
          </h1>
          <p className="text-xl text-center text-red-100 max-w-3xl mx-auto">
            ¡Aprende programación avanzada, robótica e inteligencia artificial!
          </p>
          
          {/* Barra de Progreso */}
          <div className="mt-6 bg-white/20 rounded-full p-1">
            <div className="bg-red-400 h-3 rounded-full transition-all duration-500" 
                 style={{ width: `${progresoTotal()}%` }}></div>
          </div>
          <p className="text-center mt-2 text-red-100">
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
                        <span className="text-red-500 mr-2 mt-1">✓</span>
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

        {/* Mini-Juego de Programación Avanzada */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-[20px] p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎮 ¡Juego de Programación Avanzada!</h2>
            <p className="text-xl mb-6">
              Practica la lógica de programación avanzada con este divertido juego
            </p>
            
            {!mostrarJuego ? (
              <button
                onClick={iniciarJuego}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition-colors duration-300"
              >
                🚀 ¡Jugar Ahora!
              </button>
            ) : (
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">🎯 Juego de Lógica Avanzada</h3>
                <p className="mb-4">Resuelve problemas de programación complejos</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['🤖', '💻', '🔧', '🚀'].map((icono, index) => (
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
              titulo="Proyectos Scratch Avanzados" 
              descripcion="Crea juegos complejos con programación avanzada" 
              icono="🎮" 
            />
            <CardClase 
              titulo="Páginas Web Interactivas" 
              descripcion="Desarrolla sitios web con JavaScript y CSS avanzado" 
              icono="🌐" 
            />
            <CardClase 
              titulo="Proyectos de Robótica" 
              descripcion="Construye y programa robots básicos" 
              icono="🤖" 
            />
            <CardClase 
              titulo="Aplicaciones de IA" 
              descripcion="Crea proyectos usando inteligencia artificial básica" 
              icono="🧠" 
            />
            <CardClase 
              titulo="Proyectos de Hardware" 
              descripcion="Combina software y hardware en proyectos" 
              icono="🔧" 
            />
            <CardClase 
              titulo="Portafolio Digital" 
              descripcion="Crea una colección profesional de tus proyectos" 
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
              <h3 className="font-bold text-gray-800 mb-2">Guía Avanzada</h3>
              <p className="text-gray-600 text-sm mb-4">Conceptos avanzados de programación</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Proyectos Robótica</h3>
              <p className="text-gray-600 text-sm mb-4">Guías de proyectos de robótica</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">Certificado</h3>
              <p className="text-gray-600 text-sm mb-4">Diploma de completado</p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-800 mb-2">Biblioteca</h3>
              <p className="text-gray-600 text-sm mb-4">Recursos adicionales</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Ver Recursos
              </button>
            </div>
          </div>
        </section>

        {/* Consejos para Padres */}
        <section className="bg-gradient-to-r from-red-400 to-blue-400 rounded-[20px] p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">💡 Consejos para Padres y Maestros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-3">Apoyo en Tecnología Avanzada</h3>
              <ul className="space-y-2">
                <li>• Interésate por sus proyectos de robótica e IA</li>
                <li>• Ayúdalo a investigar conceptos complejos</li>
                <li>• Celebra sus logros tecnológicos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Preparación para el Futuro</h3>
              <ul className="space-y-2">
                <li>• Explora carreras en tecnología juntos</li>
                <li>• Fomenta la curiosidad tecnológica</li>
                <li>• Apoya proyectos personales</li>
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
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                {mostrarFAQ ? 'Ocultar FAQ' : 'Mostrar FAQ'}
              </button>
            </div>
            
            {mostrarFAQ && (
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-6">
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
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Objetivos</h3>
              <p className="text-gray-600">Dominar programación avanzada, robótica e IA básica</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-bold text-gray-800 mb-2">Habilidades</h3>
              <p className="text-gray-600">Crear proyectos complejos y aplicaciones web avanzadas</p>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">Progreso</h3>
              <p className="text-gray-600">Prepararse para carreras en tecnología del futuro</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl mb-4">
            ¡Felicidades por completar el 4° Grado de Informática! 🎉
          </p>
          <p className="text-gray-300 mb-6">
            ¡Has completado toda la educación básica en informática! Estás listo para el futuro tecnológico
          </p>
          
          {/* Estadísticas del progreso */}
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Tu Progreso Final</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-2xl font-bold text-red-400">{progresoTotal()}%</p>
                <p>Completado</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">
                  {Object.values(progreso).filter(u => u.completada).length}
                </p>
                <p>Bimestres</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-400">
                  {Object.values(progreso).reduce((sum, u) => sum + u.actividades, 0)}
                </p>
                <p>Actividades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">
                  {Object.values(progreso).reduce((sum, u) => sum + u.total, 0)}
                </p>
                <p>Total</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
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

export default Grado4;


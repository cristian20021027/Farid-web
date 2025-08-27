import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const bimestres = [
    {
      id: 1,
      titulo: "1ER BIMESTRE",
      color: "from-green-400 to-green-600",
      icono: "🌱",
      clases: [
        {
          titulo: "CLASE 1: Internet y Navegación Segura",
          descripcion: "Aprenderemos qué es Internet y cómo navegar de manera segura. Internet es una red mundial que conecta computadoras de todo el mundo.",
          contenido: [
            "¿Qué es Internet y para qué sirve?",
            "Navegadores web (Chrome, Firefox, Edge)",
            "Direcciones web y URLs",
            "Navegación segura para niños"
          ],
          tarea: "Con ayuda de tus papitos, visita 3 sitios web educativos y haz una lista de lo que aprendiste."
        },
        {
          titulo: "CLASE 2: Búsquedas en Internet",
          descripcion: "Aprenderemos a buscar información en Internet de manera efectiva y segura usando motores de búsqueda.",
          contenido: [
            "Motores de búsqueda (Google, Bing)",
            "Cómo hacer búsquedas efectivas",
            "Evaluar si la información es confiable",
            "Búsquedas seguras para niños"
          ],
          tarea: "Busca información sobre tu animal favorito y crea un pequeño reporte con imágenes."
        },
        {
          titulo: "CLASE 3: Correo Electrónico Básico",
          descripcion: "Conoceremos qué es el correo electrónico y cómo funciona para comunicarnos con otras personas.",
          contenido: [
            "¿Qué es el correo electrónico?",
            "Partes de un correo (destinatario, asunto, mensaje)",
            "Direcciones de correo electrónico",
            "Reglas de seguridad en el correo"
          ],
          tarea: "Con ayuda de tus papitos, crea una cuenta de correo educativa y envía un mensaje a un familiar."
        },
        {
          titulo: "CLASE 4: Redes Sociales Seguras",
          descripcion: "Aprenderemos sobre las redes sociales y cómo usarlas de manera segura y responsable.",
          contenido: [
            "¿Qué son las redes sociales?",
            "Redes sociales apropiadas para niños",
            "Reglas de seguridad en redes sociales",
            "Protección de información personal"
          ],
          tarea: "Crea una lista de 5 reglas de seguridad para usar redes sociales."
        }
      ]
    },
    {
      id: 2,
      titulo: "2DO BIMESTRE",
      color: "from-blue-400 to-blue-600",
      icono: "💻",
      clases: [
        {
          titulo: "CLASE 5: Word - Introducción",
          descripcion: "Microsoft Word es un programa para procesar texto. Aprenderemos a crear, editar y guardar documentos.",
          contenido: [
            "¿Qué es Microsoft Word?",
            "Interfaz del programa",
            "Crear un nuevo documento",
            "Guardar y abrir archivos"
          ],
          tarea: "Crea un documento en Word con tu nombre, edad y tu comida favorita. Guárdalo con el nombre 'Mi Información'."
        },
        {
          titulo: "CLASE 6: Formato de Texto en Word",
          descripcion: "Aprenderemos a dar formato al texto: cambiar el tipo de letra, tamaño, color y estilo.",
          contenido: [
            "Cambiar el tipo de letra (fuente)",
            "Cambiar el tamaño del texto",
            "Aplicar negrita, cursiva y subrayado",
            "Cambiar el color del texto"
          ],
          tarea: "Escribe un párrafo sobre tu día favorito y aplícale diferentes formatos de texto."
        },
        {
          titulo: "CLASE 7: Imágenes en Word",
          descripcion: "Aprenderemos a insertar y editar imágenes en nuestros documentos de Word.",
          contenido: [
            "Insertar imágenes desde el computador",
            "Insertar imágenes desde Internet",
            "Cambiar el tamaño de las imágenes",
            "Mover y posicionar imágenes"
          ],
          tarea: "Crea un documento con texto e imágenes sobre tu hobby favorito."
        },
        {
          titulo: "CLASE 8: Tablas en Word",
          descripcion: "Las tablas nos ayudan a organizar información de manera clara y ordenada.",
          contenido: [
            "Crear una tabla",
            "Agregar filas y columnas",
            "Escribir texto en las celdas",
            "Cambiar el diseño de la tabla"
          ],
          tarea: "Crea una tabla con los días de la semana y tus actividades favoritas de cada día."
        }
      ]
    },
    {
      id: 3,
      titulo: "3ER BIMESTRE",
      color: "from-purple-400 to-purple-600",
      icono: "📊",
      clases: [
        {
          titulo: "CLASE 9: Excel - Introducción",
          descripcion: "Microsoft Excel es un programa para crear hojas de cálculo. Aprenderemos a organizar información en filas y columnas.",
          contenido: [
            "¿Qué es Microsoft Excel?",
            "Interfaz del programa",
            "Celdas, filas y columnas",
            "Escribir texto y números"
          ],
          tarea: "Crea una hoja de cálculo con los nombres de 5 amigos y sus edades."
        },
        {
          titulo: "CLASE 10: Fórmulas Básicas en Excel",
          descripcion: "Las fórmulas nos permiten hacer cálculos automáticos en Excel.",
          contenido: [
            "Suma de números",
            "Resta de números",
            "Multiplicación",
            "División"
          ],
          tarea: "Crea una tabla de gastos semanales y calcula el total usando fórmulas."
        },
        {
          titulo: "CLASE 11: Gráficos en Excel",
          descripcion: "Los gráficos nos ayudan a visualizar la información de manera más clara y atractiva.",
          contenido: [
            "Tipos de gráficos (barras, líneas, circular)",
            "Crear un gráfico",
            "Cambiar colores y estilos",
            "Agregar títulos y etiquetas"
          ],
          tarea: "Crea un gráfico de barras con las calificaciones de tu último examen."
        },
        {
          titulo: "CLASE 12: Presentaciones con PowerPoint",
          descripcion: "PowerPoint nos permite crear presentaciones con diapositivas para mostrar información de manera atractiva.",
          contenido: [
            "¿Qué es PowerPoint?",
            "Crear una nueva presentación",
            "Agregar diapositivas",
            "Insertar texto e imágenes"
          ],
          tarea: "Crea una presentación de 3 diapositivas sobre tu animal favorito."
        }
      ]
    },
    {
      id: 4,
      titulo: "4TO BIMESTRE",
      color: "from-orange-400 to-orange-600",
      icono: "🎨",
      clases: [
        {
          titulo: "CLASE 13: Herramientas Avanzadas de Paint",
          descripcion: "Profundizaremos en las herramientas más avanzadas de Paint para crear dibujos más elaborados.",
          contenido: [
            "Herramientas de selección avanzada",
            "Capas y transparencias",
            "Efectos especiales",
            "Guardar en diferentes formatos"
          ],
          tarea: "Crea un dibujo complejo usando al menos 5 herramientas diferentes de Paint."
        },
        {
          titulo: "CLASE 14: Edición de Fotos Básica",
          descripcion: "Aprenderemos a editar fotos digitales para mejorar su apariencia.",
          contenido: [
            "Recortar fotos",
            "Cambiar brillo y contraste",
            "Aplicar filtros básicos",
            "Guardar cambios"
          ],
          tarea: "Edita una foto de tu familia aplicando diferentes mejoras."
        },
        {
          titulo: "CLASE 15: Creación de Videos Simples",
          descripcion: "Aprenderemos a crear videos básicos usando herramientas simples de edición.",
          contenido: [
            "¿Qué es la edición de video?",
            "Herramientas básicas de edición",
            "Agregar música y efectos",
            "Exportar el video final"
          ],
          tarea: "Crea un video de 30 segundos sobre tu actividad favorita."
        },
        {
          titulo: "CLASE 16: Proyecto Final Integrador",
          descripcion: "Aplicaremos todo lo aprendido en un proyecto final que integre diferentes herramientas.",
          contenido: [
            "Planificación del proyecto",
            "Uso de Word para textos",
            "Uso de Excel para datos",
            "Uso de PowerPoint para presentación"
          ],
          tarea: "Crea un proyecto completo sobre tu tema favorito usando todas las herramientas aprendidas."
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
              </div>
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

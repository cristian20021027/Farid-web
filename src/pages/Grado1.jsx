// pages/Grado1.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardClase from "../components/CardClase";

function Grado1() {
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
      color: "from-blue-400 to-blue-600",
      icono: "📚",
      clases: [
        {
          titulo: "CLASE 1: LA COMPUTADORA Y SUS PARTES",
          descripcion: "Una computadora es una máquina electrónica usada para procesar la información y podemos hacer un trabajo mas amplio con las computadoras que apenas calcular números o imprimir datos. Podemos dibujar cuadros, escribimos notas, informes, e incluso nos comunicamos con otros usuarios de computadoras alrededor del mundo.",
          contenido: [
            "CPU (Unidad central de procesos): Es la parte importante de la computadora sin ella no podríamos hacer algo dentro del computador",
            "Monitor (botón de encendido y pantalla): Sirve para ver todo lo que realicemos en la computadora",
            "Teclado (teclado en letras y teclado numérico): Sirve para digitar datos importantes",
            "Mouse (botón derecho, botón izquierdo y scroll): Sirve para hacer movimientos mas directos en el monitor"
          ],
          tarea: "Repaso de la clase 1 para la clase 2 se preguntará en aula sobre el tema de hoy."
        },
        {
          titulo: "CLASE 2: La computadora y sus dispositivos Hardware",
          descripcion: "El Hardware (equipo) es la parte física de una computadora.",
          contenido: [
            "Monitor",
            "Teclado",
            "Mouse",
            "Impresora",
            "Disquete",
            "USB",
            "CD",
            "DVD",
            "SD",
            "MICRO SD"
          ],
          tarea: "Con la ayuda del papito o la mamita dibujar los siguientes Hardware en el cuaderno: CD, Monitor, Teclado, mouse y usb, se revisará en clase."
        },
        {
          titulo: "CLASE 3: La computadora y sus dispositivos Software",
          descripcion: "El software (programas) es la parte lógica y se utiliza para identificar los programas, sólo pueden emplearse a través de la computadora instalándose e ingresando información ayudándonos en diversas tareas como son el redactar informes, cartas, hacer cuadros, fotos, etc",
          contenido: [
            "Word 2010 (para redactar cartas y demás)",
            "Excel 2010 (para cuadros de cálculos o matemáticos)",
            "Corel Draw y Photoshop (Para crear diseños gráficos)",
            "Media player (para escuchar música)"
          ],
          tarea: "Acompañado de tus papitos, traer para la clase 4 en una hoja word, 4 tipos de software"
        },
        {
          titulo: "CLASE 4: Partes del Teclado",
          descripcion: "El teclado es una herramienta importante en la computadora sirve para digitar o escribir cualquier tipo de información. Teclado es el nombre dado al periférico que utilizamos para introducir datos en el ordenador.",
          contenido: [
            "Teclado en letras",
            "Teclado numérico",
            "Teclas de función",
            "Teclas especiales"
          ],
          tarea: "Acompañado del papito: Dibuje las partes del teclado con colores presentar para la próxima clase, pegarlo en el cuaderno"
        }
      ]
    },
    {
      id: 2,
      titulo: "2DO BIMESTRE",
      color: "from-green-400 to-green-600",
      icono: "🌱",
      clases: [
        {
          titulo: "CLASE 5: Ventana de Windows",
          descripcion: "En Windows la comunicación con el ordenador se realiza a través de un elemento conocido como ventana. Una ventana es un rectángulo que aparece en la pantalla al ejecutar una aplicación o ver el contenido de un icono.",
          contenido: [
            "Elementos de una ventana",
            "Cómo abrir y cerrar ventanas",
            "Minimizar y maximizar ventanas",
            "Mover ventanas por la pantalla"
          ],
          tarea: "Repasar la clase 5 para la próxima clase con nota"
        },
        {
          titulo: "CLASE 6: Funciones del mouse",
          descripcion: "El ratón (o mouse en inglés) es el HARDWARE MAS FACIL DE MANEJAR, es decir, el mas rápido en cogerle el 'truquillo' y que casi todo el mundo se adapta con facilidad, en resumen, un gran invento.",
          contenido: [
            "Botón izquierdo del mouse: Para realizar una acción o colocarnos en un lugar",
            "Botón derecho del mouse: Para desplegar menús de opciones",
            "Rueda central: Para desplazarnos verticalmente por el programa"
          ],
          tarea: "Buscar con tu papito o mamita una imagen en el internet del ratón, imprimelo ponle las partes del mouse y pegalo en tu cuadernito. Se revisará en clase"
        },
        {
          titulo: "CLASE 7: La barra de tareas de Windows",
          descripcion: "Atravesando la parte inferior de la pantalla, vemos la Barra de Tareas. Normalmente se halla siempre a la vista. Además de contener el Menú de Inicio y la Bandeja, la principal función de la Barra de Tareas es de mostrar que tareas están corriendo en cada momento.",
          contenido: [
            "Botón de inicio: Identificado con el logo de Windows",
            "Botones de ventanas y aplicaciones abiertas",
            "Área de notificaciones",
            "Mostrar el escritorio"
          ],
          tarea: "Repasar la clase 8 para la siguiente clase, se tomará con nota en clase"
        },
        {
          titulo: "CLASE 8: Funcionalidad de la ventana de Windows y Personalización",
          descripcion: "Aprenderemos sobre las barras de las ventanas y cómo personalizarlas.",
          contenido: [
            "Barra de Título: Contiene el nombre del programa y botones de control",
            "Barra de Menú: Contiene las operaciones del programa agrupadas en menús",
            "Barra de Herramientas: Acceso rápido a funciones comunes",
            "Barra de Estado: Información sobre el documento actual"
          ],
          tarea: "Repasar la clase 8 para la siguiente clase, se tomará con nota en clase"
        }
      ]
    },
    {
      id: 3,
      titulo: "3ER BIMESTRE",
      color: "from-purple-400 to-purple-600",
      icono: "🎨",
      clases: [
        {
          titulo: "CLASE 9: Fondo de Pantalla",
          descripcion: "Aprenderemos a cambiar el fondo de pantalla de Windows.",
          contenido: [
            "Cómo acceder a las propiedades de pantalla",
            "Seleccionar imágenes del sistema",
            "Configurar la posición de la imagen",
            "Aplicar cambios"
          ],
          tarea: "Repasar la clase 9 para la siguiente clase, se tomará con nota en clase"
        },
        {
          titulo: "CLASE 10: Fondo de Pantalla externa",
          descripcion: "Aprenderemos a usar imágenes de internet como fondo de pantalla.",
          contenido: [
            "Búsqueda de imagen en Google",
            "Descargar imagen desde internet",
            "Guardar imagen en Mis Documentos",
            "Aplicar como fondo de pantalla"
          ],
          tarea: "Realizar este paso con el papá o la mamá"
        },
        {
          titulo: "CLASE 11: Paint - Introducción",
          descripcion: "Paint es un programa simple de dibujo gráfico desarrollado por Microsoft. Paint ha acompañado al sistema operativo Microsoft Windows desde la versión 1.0.",
          contenido: [
            "Botón pintar",
            "Barra de herramienta de acceso rápido",
            "Cinta",
            "Área de trabajo"
          ],
          tarea: "Repasar la clase 11 para la siguiente clase, se tomará con nota en clase"
        },
        {
          titulo: "CLASE 12: Paint - Herramientas básicas",
          descripcion: "Conoceremos las herramientas básicas del programa Paint.",
          contenido: [
            "Herramientas de selección",
            "Herramientas de dibujo",
            "Herramientas de color",
            "Herramientas de texto"
          ],
          tarea: "Repasar la clase 12 para la siguiente clase, se tomará con nota en clase"
        }
      ]
    },
    {
      id: 4,
      titulo: "4TO BIMESTRE",
      color: "from-orange-400 to-orange-600",
      icono: "🚀",
      clases: [
        {
          titulo: "CLASE 13: Herramientas de Paint",
          descripcion: "El programa tiene las siguientes herramientas: selección libre de dibujo, selección, borrador/borrador de color, rellenar con color, tomar color, lupa, lápiz, pincel, aerógrafo, texto, línea, curva, rectángulo, polígono, elipse, y rectángulo redondeado.",
          contenido: [
            "Herramientas de selección y edición",
            "Herramientas de dibujo libre",
            "Herramientas de formas geométricas",
            "Herramientas de color y relleno"
          ],
          tarea: "Realizar un dibujo libre utilizando principalmente la herramienta pincel"
        },
        {
          titulo: "CLASE 14: Guardado de archivos Paint",
          descripcion: "Una vez completado el dibujo, debemos guardar el archivo para no perder todo el trabajo realizado.",
          contenido: [
            "Opciones Guardar y Guardar como",
            "Cuadro de diálogo de guardado",
            "Nombre del archivo",
            "Ubicación y formato del archivo"
          ],
          tarea: "Practicar guardando diferentes dibujos con diferentes nombres"
        },
        {
          titulo: "CLASE 15: Herramientas avanzadas de Paint",
          descripcion: "Este software clásico de Windows se ha mejorado con nuevos efectos de pincel como acuarela, cera y caligrafía.",
          contenido: [
            "Efectos de pincel: acuarela, cera y caligrafía",
            "Cinta de opciones fácil de usar",
            "Pantalla touch para pintar con los dedos",
            "Formas personalizadas y colores"
          ],
          tarea: "Realizar un dibujo libre utilizando principalmente la herramienta pincel"
        },
        {
          titulo: "CLASE 16: Edición de texto en Paint",
          descripcion: "Para editar un texto o palabra debemos usar la herramienta de texto en primer lugar escribir la palabra o frase que se desea teclear.",
          contenido: [
            "Herramienta de texto",
            "Barra de edición de texto",
            "Formato del texto",
            "Colores y estilos"
          ],
          tarea: "Crear un dibujo con texto usando diferentes colores y estilos"
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
      pregunta: "¿Cuánto tiempo debe pasar mi hijo en la computadora?",
      respuesta: "Se recomienda máximo 1 hora por día para niños de 6-7 años, con descansos cada 20 minutos."
    },
    {
      pregunta: "¿Es seguro que mi hijo use Internet?",
      respuesta: "Sí, siempre que esté supervisado y use sitios web apropiados para su edad."
    },
    {
      pregunta: "¿Qué hago si mi hijo tiene problemas con la computadora?",
      respuesta: "Mantén la calma, explícale que es normal cometer errores y ayúdalo a solucionarlos paso a paso."
    },
    {
      pregunta: "¿Cuándo está listo mi hijo para el siguiente grado?",
      respuesta: "Cuando complete todas las actividades del grado actual y demuestre confianza en las habilidades básicas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-4 transition-colors">
            <span className="mr-2">←</span> Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            🎓 1° Grado - Informática
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            ¡Aprende los fundamentos de la computadora de manera divertida y segura!
          </p>
          
          {/* Barra de Progreso */}
          <div className="mt-6 bg-white/20 rounded-full p-1">
            <div className="bg-green-400 h-3 rounded-full transition-all duration-500" 
                 style={{ width: `${progresoTotal()}%` }}></div>
          </div>
          <p className="text-center mt-2 text-blue-100">
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
                  {['🖥️', '⌨️', '🖱️', '💾', '🖥️', '⌨️', '🖱️', '💾'].map((icono, index) => (
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
              titulo="Práctica con el Mouse" 
              descripcion="Ejercicios para mejorar el control del mouse" 
              icono="🖱️" 
            />
            <CardClase 
              titulo="Escribiendo en WordPad" 
              descripcion="Practica escribiendo con el teclado" 
              icono="📝" 
            />
            <CardClase 
              titulo="Dibujando en Paint" 
              descripcion="Crea dibujos usando las herramientas de Paint" 
              icono="🎨" 
            />
            <CardClase 
              titulo="Navegando en Internet" 
              descripcion="Visita sitios web educativos seguros" 
              icono="🌐" 
            />
            <CardClase 
              titulo="Organizando Carpetas" 
              descripcion="Aprende a crear y organizar carpetas" 
              icono="📁" 
            />
            <CardClase 
              titulo="Juegos Educativos" 
              descripcion="Juegos para practicar lo aprendido" 
              icono="🎮" 
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                Descargar PDF
              </button>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Actividades</h3>
              <p className="text-gray-600 text-sm mb-4">Ejercicios imprimibles</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
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
        <section className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-[20px] p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">💡 Consejos para Padres y Maestros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-3">Supervisión</h3>
              <ul className="space-y-2">
                <li>• Siempre supervisa el uso de la computadora</li>
                <li>• Establece límites de tiempo</li>
                <li>• Asegúrate de que el contenido sea apropiado</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Motivación</h3>
              <ul className="space-y-2">
                <li>• Celebra los logros del niño</li>
                <li>• Haz que el aprendizaje sea divertido</li>
                <li>• Practica junto con ellos</li>
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
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              >
                {mostrarFAQ ? 'Ocultar FAQ' : 'Mostrar FAQ'}
              </button>
            </div>
            
            {mostrarFAQ && (
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
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
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Objetivos</h3>
              <p className="text-gray-600">Identificar las partes básicas de la computadora</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-bold text-gray-800 mb-2">Habilidades</h3>
              <p className="text-gray-600">Usar el mouse y teclado correctamente</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">Progreso</h3>
              <p className="text-gray-600">Crear y guardar archivos básicos</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl mb-4">
            ¡Felicidades por completar el 1° Grado de Informática! 🎉
          </p>
          <p className="text-gray-300 mb-6">
            Estás listo para continuar con el 2° Grado y aprender más sobre tecnología
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
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Volver al Inicio
            </Link>
            <button 
              onClick={() => window.print()}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              🖨️ Imprimir Certificado
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Grado1;

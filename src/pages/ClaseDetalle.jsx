// pages/ClaseDetalle.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import grado1 from '../data/grado1';
import grado2 from '../data/grado2';
import grado3 from '../data/grado3';
import grado4 from '../data/grado4';

function ClaseDetalle() {
  const { grado, bid, cid } = useParams();
  const bimestreId = parseInt(bid, 10);
  const claseId = parseInt(cid, 10);

  const mapa = {
    'grado1': grado1,
    'grado2': grado2,
    'grado3': grado3,
    'grado4': grado4,
  };

  const lista = mapa[grado] || [];
  const bimestre = lista.find(b => b.id === bimestreId);
  const clase = bimestre ? bimestre.clases[claseId - 1] : null;

  if (!bimestre || !clase) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Clase no encontrada</h1>
        <Link to="/grado1" className="text-blue-600 underline">Volver al 1° Grado</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/grado1" className="inline-flex items-center text-blue-100 hover:text-white mb-4 transition-colors">
            <span className="mr-2">←</span> Volver al 1° Grado
          </Link>
          <h1 className="text-4xl font-bold">{clase.titulo}</h1>
          <p className="mt-2 text-blue-100">{bimestre.icono} {bimestre.titulo}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4">
        <section className="bg-white rounded-[20px] p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Descripción</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{clase.descripcion}</p>
        </section>

        <section className="bg-white rounded-[20px] p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Contenido de la Clase</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {clase.contenido.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Tarea</h2>
          <p className="text-yellow-700">{clase.tarea}</p>
        </section>

        <div className="flex gap-4">
          <Link to={`/grado1`} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">Volver</Link>
          <a href="#" onClick={() => window.print()} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold">Imprimir</a>
        </div>
      </main>
    </div>
  );
}

export default ClaseDetalle;



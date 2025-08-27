// components/CardClase.jsx
function CardClase({ titulo, descripcion, icono }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-64">
        <div className="text-5xl">{icono}</div>
        <h2 className="text-xl font-bold mt-2">{titulo}</h2>
        <p className="text-gray-600 mt-2">{descripcion}</p>
      </div>
    );
  }
  
  export default CardClase;
  
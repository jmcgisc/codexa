type Props = {
  titulo: string;
  descripcion: string;
  imagen: string;
};

export default function TarjetaProducto({ titulo, descripcion, imagen }: Props) {
  return (
    <div className="group relative bg-neutral-900 p-[2px] rounded-xl hover:shadow-[0_0_20px_4px_#00fff7] transition-all duration-300">
     
      <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden p-4 h-full
      
      ">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">
          {titulo}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{descripcion}</p>
      </div>
    </div>
  );
}

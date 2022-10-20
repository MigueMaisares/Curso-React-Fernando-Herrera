import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { imagenes, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifItem
            key={imagen.id}
            {...imagen} /* Esparcimos todas los atributos de imagen en props individuales, sino deberiamos pasarlas uno por uno title={imagen.title} img={imagen.img} */
          />
        ))}
      </div>
    </>
  );
};

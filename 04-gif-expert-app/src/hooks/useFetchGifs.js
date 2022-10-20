import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const nuevasImagenes = await getGif(category);
    setImagenes(nuevasImagenes);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagenes();
  }, []); //este efecto secundario se va a ejecutar solo una vez cuando se cree el componente GifGrid, por eso el []

  return {
    imagenes,
    isLoading,
  };
};

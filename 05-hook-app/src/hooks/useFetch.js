import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [estado, setEstado] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });

  const getFetch = async () => {
    setEstado({
      data: null,
      isLoading: true,
      hasError: false,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setEstado({
      data,
      isLoading: false,
      hasError: false,
    });
  };

  //usamos el efecto secundario para tener un control absoluto de nuestro custom hook para dispararlo
  useEffect(() => {
    getFetch();
  }, [url]); //cuando haya un cambio de url, se va a disparar la consulta http

  return estado;
};

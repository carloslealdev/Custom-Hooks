import { useEffect, useState } from "react";

//Incorporo caché para evitar volver a cargar data qur ya había cargado previamente
const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  //Pasamos el url como dependencia, de manera que si por algún motivo el url cambia, entonces,
  //se dispare de nuevo el useEffect y haga de nuevo la petición http
  useEffect(() => {
    getFetch();
  }, [url]);

  //Creo esta función para volver a establecer el estado con isLoading en True antes de realizar cualquier
  //petición http
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("Usando caché");
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();

    const resp = await fetch(url);

    //sleep para demorar la petición y poder mostrar un mensaje de Cargando...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    //almaceno la data en el objeto caché
    localCache[url] = data;

    // console.log({ data });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

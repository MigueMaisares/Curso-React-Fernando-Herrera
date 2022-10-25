// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );
//con async hacemos que la arrow funcion devuelva una promesa
const getImagen = async () => {
  try {
    const apiKey = "C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC";
    //con await hacemos que la respuesta del fetch (asincrono) se convierta en sincrono esperando que se termine de ejecutar esa linea y sigo con el resto como si todo fuese sincrono
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImagen();

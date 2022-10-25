const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};
//los console toman el primer valor que le pasa la arrow function
getHeroeByIdAsync(1)
  //desde aca llamamos/escuchamos el resolve/reject cuando se resuelva asincronicamente
  .then((heroe) => console.log("Heroe", heroe))
  .catch(console.warn);

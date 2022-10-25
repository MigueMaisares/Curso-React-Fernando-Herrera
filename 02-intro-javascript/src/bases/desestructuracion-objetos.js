//Desestructuracion

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  casa: {
    calle: "caracas",
    direccion: 5557,
  },
};

//del obj persona y la key nombre se la asignamos a una nueva const llamada nombre2
const { nombre: nombre2 } = persona;
console.log(nombre2); //a este punta no existe la const nombre

const { nombre, edad, clave } = persona;
console.log(nombre, edad, clave);

//                                    seteamos un valor por defecto como en SQL DEFAULT
const retornaNombre = ({ nombre, edad, rango = "Capitan", casa }) => {
  console.log(nombre, edad, rango);
  return {
    nombreRetornado: nombre,
    rangoRetornado: rango,
    casaRetornada: casa,
  };
};
const {
  nombreRetornado,
  rangoRetornado,
  //del obj busca las prop calle y direccion y asignalos en otras dos const separadas
  casaRetornada: { calle, direccion },
} = retornaNombre(persona);
console.log(nombreRetornado, rangoRetornado, calle, direccion);

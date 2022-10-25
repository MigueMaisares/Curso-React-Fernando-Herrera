const retornaArreglo = () => {
  return ["abc", 123];
};
//desestructura por orden
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola");
    },
  ];
};

const [nombre, setNombre] = useState("Migue");
console.log(nombre);
setNombre();

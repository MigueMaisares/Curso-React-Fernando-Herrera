//funciones en JS
function saludar(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar); //retorna la referencia a la funcion

saludar = 30;
console.log(saludar); //aca tenemos un problema ya que pisa esa refencia con una constante con el mismo nombre
//para evitar esto se recomienda usar la funcion con un const

const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

console.log(saludar2("goku"));

const getUser = () => ({
  campo1: "asd",
  campo2: "asd",
});
console.log(getUser());

const condicion = true;
const accion = () => console.log("Accion por una condicion");
condicion && accion();

const getImage = () => "Setear valor por defecto";
//                    ?? operador nullish
console.log(getImage() || "nodisponible.jpg");

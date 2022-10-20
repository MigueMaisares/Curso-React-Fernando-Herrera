import { Fragment } from "react";
import PropTypes from "prop-types"; //para definir los tipos de las props

const mensaje = {
  mensaje: "123",
  mensaje2: 123,
};
//el padre de mi FirstApp es <React.StrictMode>
export const FirstApp = ({ title, subTitle }) => {
  //las props siempre estan implicitas en nuestros componentes comunicandose del componente padre al hijo
  console.log(props);
  //Dentro del scope component se va a reprocesar/rerenderizar todo lo que quede adentro
  //React no va a procesar todo lo que este afuera del FirstApp
  //Solo pondremos comportamientos internos que esten relacionados con las props de este componente (title,subtitle)
  return (
    <>
      <div>{JSON.stringify(mensaje)}</div>
      <p>{title}</p>
      <p>{subTitle}</p>
    </>
  );
};
//Componente.paquete={prop: Paquete.tipado}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};
//Las default entran primero que las proptypes
FirstApp.defaultProps = {
  //Ctrl+Shift+P ascending
  title: "No hay un titulo",
  variableRandom: "algo",
};

import React from "react"; //imr
import ReactDOM from "react-dom/client"; //imrd
import { CounterApp } from "./CounterApp";
/* import { FirstApp } from "./FirstApp"; */
import { App } from "./HelloWorld"; //imp

/* import './Styles.css' */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Hola" subTitle={123} /> */}
    <CounterApp valor={10} />
  </React.StrictMode>
);

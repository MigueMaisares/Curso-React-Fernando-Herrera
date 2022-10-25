import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Piru",
    email: "migue@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    //propiedad computada, los corchetes hacen referencia al valor dinamico de la key del objeto
    setFormState({ ...formState, [name]: value });
  };

  //Si el useEffect no tiene dependencias se ejecutara cada vez que SimpleForm se renderize
  useEffect(() => {
    //Zona del callback que se ejecuta cada vez de un "efecto secundario" se dispare

    const onMouseMove = ({ x, y }) => {
      // window.addEventListener("mousemove", () => {} esta af no tiene una referencia para referenciarlo en el cleanup ya que es anonima)
      const coords = { x, y };
      console.log(coords);
    };

    // window.addEventListener("mousemove", onMouseMove);

    return () => {
      //Zona de cleanup, quitar observables, cancelar suscripcion, limpiar listener/referencias; todo para evitar que siga consumiendo memoria
      //Especial CUIDADO con los display:none; ya que sigue existiendo el componente
      // window.removeEventListener("mousemove", onMouseMove);
      //si llega a estar comentando la limpieza del listener, estariamos cambiando del estado de un componente que ya no existe, esta mal pero ya no nos tira error ni nos advierte
    };
  }, []); //Zona de dependencias que son las condiciones por las cuales queremos que el efecto se vuelva a disparar
  //Si [] queremos decir que solo se ejecute una sola vez cuando se cree el componente o sea montado

  return (
    <>
      <h1>Formulario simple</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="migue@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};

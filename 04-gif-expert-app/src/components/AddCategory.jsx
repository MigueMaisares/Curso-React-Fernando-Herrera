import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /* console.log(e.target[0].value); */
    /* setCategories((cat) => [...cat, e.target[0].value]); */
    /* setCategories((cat) => [inputValue, ...cat]); */
    if (inputValue.trim().length <= 2) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        /* onChange={event => onInputChange(event)} otra forma de enviar el evento pero se obvia porque cuando se envia y recibe los mismos parametros, en js por
        shorthand se puede obviar*/
      />
      {/* <button onClick={onAddcategory}>Agregar</button> */}
    </form>
  );
};

import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  //Como quiero manejar el estado, lo hago aca
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return { formState, ...formState, onInputChange, onResetForm };
};

import { useForm } from "../hooks/useForm";

const initialForm = {
  username: "",
  email: "",
  password: "",
};
export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, onResetForm } =
    useForm(initialForm);

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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
        placeholder="prueba@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="******"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  const { q = "" } = query;
  const heroes = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { onInputChange, searchText } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    /* if (searchText.trim().length < 2) return; */

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="row">
      <div className="col-5">
        <h4>Busqueda</h4>
        <hr />
        {/* Cuando hacemos submit en nuestro form, envia info adicional a este componente como query parameters (?searchText=busqueda) */}
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar un heroe"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button className="btn btn-outline-primary mt-1">Buscar</button>
        </form>
      </div>

      <div className="col-7">
        <h4>Resultados</h4>
        <hr />

        {showSearch && (
          <div className="alert alert-primary animate__animated animate__fadeIn">
            Buscar un heroe
          </div>
        )}

        {showError && (
          <div className="alert alert-danger animate__animated animate__fadeIn">
            No hay resultados para <b>{q}</b>
          </div>
        )}

        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

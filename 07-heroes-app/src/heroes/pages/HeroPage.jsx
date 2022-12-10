import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  //trae *: muestra el path entero al que estamos llegando
  //trae heroId: el que enviamos en el <Link> y pasa por el <Route>
  //queryParam: ?query=hola%mundo
  //con este hook podemos leer los parametros de la url
  const { heroId } = useParams();

  //TENER MUCHO CUIDADO CON ESTAS FUNCIONES POSIBLEMENTE PESADAS en la raiz de nuestro componente
  //Es buena practica memorizar los valores de una funcion por causa de una renderizacion no deseado de parte de padres
  //useMemo para memorizar valores, useCallback para memorizar funciones
  //useMemo se va a disparar su callback solo cuando sus dependecias cambien
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const navigate = useNavigate();
  const onReturnBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to={heroId.includes("dc") ? `/dc` : `/marvel`} />;

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h3 className="mt-3">Characters</h3>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onReturnBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

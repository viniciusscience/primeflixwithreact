import "./favoritos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) ?? []);
  }, []);

  return (
    <div className="meus-filmes">
      <h1>Meu Filmes Favoritos</h1>
      <ul>
        {filmes.map((filmes) => {
          return (
            <li key={filmes.id}>
              <span>{filmes.title}</span>
              <div>
                <Link to={`/filme/${filmes.id}`}>Ver detalhes</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

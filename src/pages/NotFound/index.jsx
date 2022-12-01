import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h2>Página nao encontrada!</h2>
      <p>
        <Link to="/">voltar para home</Link>
      </p>
    </div>
  );
}
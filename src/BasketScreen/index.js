import { Link } from "react-router-dom";

export default function BasketScreen() {
  return (
    <>
      <h1>CMyBeer</h1>
      <h2>BasketScreen</h2>
      <nav>
        <Link to="/">Revenir à la page d'accueil</Link>
      </nav>
    </>
  );
}

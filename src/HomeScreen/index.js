import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <>
      <h1>CMyBeer</h1>
      <h2>HomeScreen</h2>
      <nav>
        <Link to="/basket">Voir mon panier</Link>
      </nav>
    </>
  );
}

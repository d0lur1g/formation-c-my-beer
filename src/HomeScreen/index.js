import { Link } from "react-router-dom";
import Screen from "../Screen";

export default function HomeScreen() {
  return (
    <>
      <Screen
        title="HomeScreen"
        navigation={<Link to="/basket">Voir mon panier</Link>}
        isHome
      />
    </>
  );
}

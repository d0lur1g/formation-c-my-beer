import { Link } from "react-router-dom";
import Screen from "../Screen";

export default function BasketScreen() {
  return (
    <>
      <Screen
        title="BasketScreen"
        navigation={<Link to="/">Revenir à la page d'accueil</Link>}
      />
    </>
  );
}

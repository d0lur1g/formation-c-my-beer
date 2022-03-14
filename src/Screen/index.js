import Header from "../Header";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Screen.propTypes = {
  children: Node,
};

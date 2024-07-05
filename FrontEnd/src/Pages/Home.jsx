import MainHome from "../Components/Mains/MainHome";
import CrearVenta from "./Ventas/CrearVenta";

const Home = (props) => {

  return (
    <>
      <MainHome />
      <CrearVenta {...props} />
    </>
  );
};

export default Home;

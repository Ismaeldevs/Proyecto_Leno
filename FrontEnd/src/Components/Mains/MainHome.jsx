import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL_PRODUCTOS } from "../../Constats/endpoints";
import "../../CSS/Mains/Home.css";

const MainHome = () => {

  const [data, setData] = useState([]);
  const [productos, setProductos] = useState([])
  const [count,setCount] = useState(0)

  const getData = async () => {

    try {
      let response = await axios.get(URL_PRODUCTOS);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProducts = (products) => {

    const newProduct = {
      name: products.nombreProducto,
      price: products.precioProducto,
      type: products.tipoProducto
    }
      setProductos([...productos,newProduct])
      setCount(count + 1)
  } 
  console.log(productos)

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container-icon m-3'>
				<div
					className='container-cart-icon'
				>
					<div className='count-products'>
            <Link to={'/ventas/create'}>
						<span id='contador-productos'>{count}</span>
            </Link>
					</div>
				</div>
      </div>
      <div className="container-items">
        {data.map((producto) => (
        <div className="item" key={producto.id_Producto}>
          <figure>
            <img className="image"
              src={producto.imagenProducto}
              alt={producto.nombreProducto}
            />
          </figure>
          <div className="info-product">
            <h2>{producto.nombreProducto}</h2>
            <p className="price">{producto.precioProducto}</p>
          <button className="btn-add-cart" onClick={() => getProducts(producto)}>Añadir al carrito</button>
          </div>
        </div>
        ))}
      </div>
      </>
  );
};

export default MainHome;

import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { URL_PRODUCTOS, URL_SUCURSALES, URL_STOCK_CREAR } from "../../../../Constats/endpoints";
import { Tooltip } from "@mui/material";

const CreateStock = () => {
  const navigate = useNavigate();

  const initialState = {
    id_Producto: "",
    cantidadStock: "",
    fechaRegistroStock: "",
    id_Sucursal: "",
    descripcionStock: "",
  };

  // const [nombreCompleto, setNombreCompleto] = useState("")
  const [stock, setStock] = useState(initialState);
  const [products,setProducts] = useState([])
  const [local, setLocal] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(URL_PRODUCTOS)
    setProducts(response.data)
  }

  const getLocal = async () => {
    const response = await axios.get(URL_SUCURSALES);
    setLocal(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL_STOCK_CREAR}`, {
        id_Producto: stock.id_Producto,
        id_Sucursal: stock.id_Sucursal,
        cantidadStock: stock.cantidadStock,
        fechaRegistroStock: stock.fechaRegistroStock,
        descripcionStock: stock.descripcionStock,
      });
      if (response.status === 200) {
        alert("Stock Creado!");
        navigate("/stocks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getProducts()
    getLocal()
  },[])

  return (
    <div>
      <br />
      <div className='container-CRUD'>
      <br />
        <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">CREAR UN STOCK</p>
          <FormGroup>
            <Tooltip title="Nombre del Producto">
              <FormControl
                as="select"
                className="crud input"
                onChange={handleChange}
                name="id_Producto"
                required
              >
                <option hidden>Selecciona el Producto</option>
                {products.map((product) => (
                  <option
                    key={product.id_Producto}
                    name="id_Producto"
                    value={product.id_Producto}
                  >
                    {product.nombreProducto}
                  </option>
                ))}
              </FormControl>
            </Tooltip>
            <br />
            <Tooltip title="Nombre de la Sucursal">
            <FormControl
                as="select"
                className="crud input"
                onChange={handleChange}
                name="id_Sucursal"
                required
              >
            <option hidden>Selecciona la Sucursal</option>
              {local.map((sucursal) => (
                <option
                  key={sucursal.id_Sucursal}
                  name="id_Sucursal"
                  value={sucursal.id_Sucursal}
                >
                  {sucursal.nombreSucursal}
                </option>
              ))}


              </FormControl>
            </Tooltip>
            <br />
            <Tooltip title="Fecha Registro">
              <FormControl
                type="text"
                placeholder="Fecha de Hoy"
                value={stock.fechaRegistroStock}
                className="crud input"
                onChange={handleChange}
                name="fechaRegistroStock"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Cantidad Stock">
              <FormControl
                type="number"
                placeholder="Cantidad Stock"
                value={stock.cantidadStock}
                className="crud input"
                onChange={handleChange}
                name="cantidadStock"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Descripcion">
              <FormControl
                type="text"
                placeholder="descripcion"
                value={stock.descripcionStock}
                className="crud input"
                onChange={handleChange}
                name="descripcionStock"
                required
              />
            </Tooltip>
            <br />
          </FormGroup>
          <div>
          <Button type="submit" className="btnCRUD">
            Crear Stock
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/stocks'} className='text-decoration-none text-white'>Volver a Stocks</Link></button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateStock;

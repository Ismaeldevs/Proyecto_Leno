import { useState, useEffect } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  URL_STOCK,
  URL_STOCK_EDITAR,
  URL_SUCURSALES,
  URL_PRODUCTOS,
} from "../../../../Constats/endpoints";
import { Tooltip } from "@mui/material";

const EditStock = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    // nombreProducto:"",
    // nombreSucursal:"",
    id_Producto: 0,
    id_Sucursal: "",
    fechaRegistroStock: "",
    cantidadStock: "",
  };

  // const [nombreCompleto, setNombreCompleto] = useState("")
  const [stock, setStock] = useState(initialState);
  const [local, setLocal] = useState([]);
  const [products, setProducts] = useState([]);

  const getLocal = async () => {
    const response = await axios.get(URL_SUCURSALES);
    setLocal(response.data);
  };

  const getProducts = async () => {
    const response = await axios.get(URL_PRODUCTOS);
    setProducts(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${URL_STOCK_EDITAR}${id}`, {
        id_Producto: stock.id_Producto,
        id_Sucursal: stock.id_Sucursal,
        fechaRegistroStock: stock.fechaRegistroStock,
        cantidadStock: stock.cantidadStock,
        descripcionStock: stock.descripcionStock,
      });

      if (response.status === 200) {
        alert("Stock Actualizado!");
        navigate("/stocks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    const response = await axios.get(`${URL_STOCK}/${id}`);
    console.log(response.data);
    setStock(response.data[0]);
  };

  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getData();
    getLocal();
    getProducts();
  }, []);

  return (
    <div>
      <br />
      <div className="container-CRUD">
        <br />
        <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">EDITA UN STOCK</p>
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
            <Tooltip title="Nombre Sucursal">
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
            <Tooltip title="Cantidad Stock">
              <FormControl
                type="text"
                placeholder="Cantidad Stock"
                value={stock.cantidadStock}
                className="crud input"
                onChange={handleChange}
                name="cantidadStock"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Fecha Registro">
              <FormControl
                type="text"
                placeholder="FechaRegistro"
                value={stock.fechaRegistroStock}
                className="crud input"
                onChange={handleChange}
                name="fechaRegistroStock"
                required
              />
            </Tooltip>
            <br />
          </FormGroup>
          <div>
          <Button type="submit" className="btnCRUD">
            Actualizar Stock
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

export default EditStock;

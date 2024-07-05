import { useState, useEffect } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  URL_PRODUCTOS,
  URL_PRODUCTO_EDITAR,
} from "../../../../Constats/endpoints";
import { Tooltip } from "@mui/material";

const EditProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    nombreProducto: "",
    descripcionProducto: "",
    tipoProducto: "",
    precioProducto: "",
    imagenProducto: "",
  };

  const [productos, setProductos] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put(`${URL_PRODUCTO_EDITAR}${id}`, {
        nombreProducto: productos.nombreProducto,
        descripcionProducto: productos.descripcionProducto,
        tipoProducto: productos.tipoProducto,
        precioProducto: productos.precioProducto,
        imagenProducto: productos.imagenProducto,
      });
      if (response.status === 200) {
        alert("Producto Actualizado!");
        navigate("/productos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    let response = await axios.get(`${URL_PRODUCTOS}/${id}`);
    console.log(response.data);
    setProductos(response.data[0]);
  };

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <br />
      <div className="container-CRUD">
        <br />
        <br />
        <Form className="formCRUD" onSubmit={handleSubmit}>
          <p className="titleCRUD">EDITA UN PRODUCTO</p>
          <FormGroup>
            <Tooltip title="Nombre del Producto">
              <FormControl
                type="text"
                placeholder="Nombre Producto"
                value={productos.nombreProducto}
                className="crud input"
                onChange={handleChange}
                name="nombreProducto"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Descripcion del Producto">
              <FormControl
                type="text"
                placeholder="Descripcion"
                className="crud input"
                value={productos.descripcionProducto}
                onChange={handleChange}
                name="descripcionProducto"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Tipo de Producto">
              <FormControl
                type="text"
                placeholder="Tipo"
                className="crud input"
                value={productos.tipoProducto}
                onChange={handleChange}
                name="tipoProducto"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Precio Producto">
              <FormControl
                type="text"
                placeholder="Precio"
                className="crud input"
                value={productos.precioProducto}
                onChange={handleChange}
                name="precioProducto"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="URL Imagen">
              <FormControl
                type="text"
                placeholder="Url imagen"
                className="crud input"
                value={productos.imagenProducto}
                onChange={handleChange}
                name="imagenProducto"
                required
              />
            </Tooltip>
            <br />
          </FormGroup>
          <div>
            <Button type="submit" className="btnCRUD">
              Actualizar Producto
            </Button>
          </div>
          <div>
            <button className="btnBack">
              <Link
                to={"/productos"}
                className="text-decoration-none text-white"
              >
                Volver a Productos
              </Link>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProducto;

import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  URL_CLIENTES,
  URL_EMPLEADO,
  URL_PRODUCTOS,
  URL_VENTAS_CREAR,
} from "../../../../Constats/endpoints";

const CreateSale = () => {
  const navigate = useNavigate();

  const initialState = {
    id_Producto: 1,
    id_Cliente: 1,
    id_Empleado: 1,
    fechaVenta: "",
    cantidadVenta: 0,
    descuentoVenta: 0,
    tipoPagoVenta: "",
    totalVenta: 0,
  };


  const [sale, setSale] = useState(initialState);
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(`${URL_PRODUCTOS}`);
    console.log(response.data);
    setProducts(response.data);
  };

  const getClients = async () => {
    const response = await axios.get(`${URL_CLIENTES}`);
    console.log(response.data);
    setClients(response.data);
  };

  const getEmployees = async () => {
    const response = await axios.get(`${URL_EMPLEADO}`);
    console.log(response.data);
    setEmployees(response.data);
  };

  const handleChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    let total = sale.totalVenta * sale.cantidadVenta
    let totalDescuento = 0


    try {
      if(sale.descuentoVenta === "10" ) {

        totalDescuento = total * sale.descuentoVenta / 100;
        sale.totalVenta = total - totalDescuento

       }

      let response = await axios.post(`${URL_VENTAS_CREAR}`, {
        id_Producto: sale.id_Producto,
        id_Cliente: sale.id_Cliente,
        id_Empleado: sale.id_Empleado,
        fechaVenta: sale.fechaVenta,
        cantidadVenta: sale.cantidadVenta,
        descuentoVenta: sale.descuentoVenta,
        tipoPagoVenta: sale.tipoPagoVenta,
        totalVenta: sale.totalVenta,
      });

      if (response.status === 200) {
        alert("Venta Creada!");
        navigate("/ventas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getClients();
    getEmployees();
  }, []);

  return (
    <div>
      <h1 className="p-5 text-white text-center">CREAR VENTA</h1>
      <br />
      <div className="d-flex justify-content-center p-5">
        <br />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Form.Control
              as="select"
              name="id_Producto"
              onChange={handleChange}
            >
              {products.map((product) => (
                <option
                  key={product.id_Producto}
                  name="id_Producto"
                  value={product.id_Producto}
                >
                  {product.nombreProducto}
                </option>
              ))}
            </Form.Control>
            <br />
            <Form.Control as="select" onChange={handleChange} name="id_Cliente">
              {clients.map((client) => (
                <option
                  key={client.id_Cliente}
                  name="id_Cliente"
                  value={client.id_Cliente}
                >
                  {client.nombreCliente} {client.apellidoCliente}
                </option>
              ))}
            </Form.Control>
            <br />
            <Form.Control
              as="select"
              name="id_Empleado"
              onChange={handleChange}
            >
              {employees.map((employee) => (
                <option
                  key={employee.id_Empleado}
                  name="id_Empleado"
                  value={employee.id_Empleado}
                >
                  {employee.nombreEmpleado} {employee.apellidoEmpleado}
                </option>
              ))}
            </Form.Control>
            <br />
            <FormControl
              type="date"
              placeholder="Fecha de Hoy"
              onChange={handleChange}
              name="fechaVenta"
            />
            <br />
            <FormControl
              type="number"
              placeholder="Cantidad"
              onChange={handleChange}
              name="cantidadVenta"
            />
            <br />
            <FormControl
              type="number"
              placeholder="Descuento"
              onChange={handleChange}
              name="descuentoVenta"
            />
            <br />
            <FormControl
              type="text"
              placeholder="Tipo de Pago"
              onChange={handleChange}
              name="tipoPagoVenta"
            />
            <br />
            <FormControl
              type="number"
              placeholder="Total Facturado"
              onChange={handleChange}
              name="totalVenta"
            />
            <br />
          </FormGroup>
          <Button type="submit">Completar Venta</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateSale;

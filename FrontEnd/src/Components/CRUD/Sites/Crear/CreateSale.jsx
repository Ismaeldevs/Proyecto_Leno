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
    id_Producto: "",
    id_Cliente: "",
    id_Empleado: "",
    fecha: "",
    tipodepago: "",
    totalfacturado: "",
  };

  // const [nombreCompleto, setNombreCompleto] = useState("")

  const [test,setTest] = useState("")

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
    setTest(sale)
    console.log(test)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(sale.id_Cliente);
    try {
      let response = await axios.post(`${URL_VENTAS_CREAR}`, {
        id_Producto: sale.id_Producto,
        id_Cliente: sale.id_Cliente,
        id_Empleado: sale.id_Empleado,
        fecha: sale.fecha,
        tipodepago: sale.tipodepago,
        totalfacturado: sale.totalfacturado,
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
            <Form.Control as="select" onChange={handleChange}>
              {
                products.map((product) => (
                  <option key={product.id_Producto} value={product.id_Producto}>{product.nombreProducto}</option>
                ))
              }
            </Form.Control>
            <br />
            <Form.Control as="select" onChange={handleChange} name="id_Cliente">
              {
                clients.map((client) => (
                  <option key={client.id_Cliente} value="cliente">{client.nombreCliente} {client.apellidoCliente}</option>
                ))
              }
            </Form.Control>
            <br />
            <Form.Control as="select" onChange={handleChange}>
              {
                employees.map((employee) => (
                  <option key={employee.id_Empleado} value={employee.id_Empleado}>{employee.nombreEmpleado} {employee.apellidoEmpleado}</option>
                ))
              }
            </Form.Control>
            <br />
            <FormControl
              type="text"
              placeholder="Fecha de Hoy"
              onChange={handleChange}
              name="fecha"
            />
            <br />
            <FormControl
              type="text"
              placeholder="Tipo de Pago"
              onChange={handleChange}
              name="tipodepago"
            />
            <br />
            <FormControl
              type="text"
              placeholder="Total Facturado"
              onChange={handleChange}
              name="totalfacturado"
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
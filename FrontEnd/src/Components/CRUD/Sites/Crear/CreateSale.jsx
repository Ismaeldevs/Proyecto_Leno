import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
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
    setProducts(response.data);
  };

  const getClients = async () => {
    const response = await axios.get(`${URL_CLIENTES}`);
    setClients(response.data);
  };

  const getEmployees = async () => {
    const response = await axios.get(`${URL_EMPLEADO}`);
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

        totalDescuento = total * sale.descuentoVenta / 100;
        sale.totalVenta = total - totalDescuento     

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
      <br />
      <div className='container-CRUD'>
      <br />
        <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">CREAR UNA VENTA</p>
          <FormGroup>
            <Form.Control
              as="select"
              name="id_Producto"
              className="crud input"
              onChange={handleChange}
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
            </Form.Control>
            <br />
            <Form.Control as="select" className="crud input" onChange={handleChange} name="id_Cliente">
            <option hidden>Selecciona al Cliente</option>
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
              className="crud input"
              onChange={handleChange}
            >
              <option hidden>Selecciona el Empleado</option>
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
              className="crud input"
              onChange={handleChange}
              name="fechaVenta"
              required
            />
            <br />
            <FormControl
              type="number"
              placeholder="Cantidad"
              className="crud input"
              onChange={handleChange}
              name="cantidadVenta"
              required
            />
            <br />
            <FormControl
              as="select"
              placeholder="Descuento"
              className="crud input"
              onChange={handleChange}
              name="descuentoVenta"              
            >
              <option value={10}>10%</option>
              <option value={20}>20%</option>
              <option value={30}>30%</option>
              <option value={40}>40%</option>
              <option value={100}>Gratis</option>
              </FormControl>
            <br />
            <FormControl
              as="select"
              placeholder="Tipo de Pago"
              className="crud input"
              onChange={handleChange}
              name="tipoPagoVenta"
              required
           >

              <option value={'Efectivo'}>Efectivo</option>
              <option value={'Transferencia'}>Transferencia</option>
              <option value={'Debito'}>Debito</option>
              <option value={'Credito'}>Credito</option>
           
              </FormControl>
            <br />
            <FormControl
              type="number"
              placeholder="Total Facturado"
              className="crud input"
              onChange={handleChange}
              name="totalVenta"
              required
            />
            <br />
          </FormGroup>
          <div>
          <Button type="submit" className="btnCRUD">
            Completar Venta
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/ventas'} className='text-decoration-none text-white'>Volver a Ventas</Link></button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateSale;

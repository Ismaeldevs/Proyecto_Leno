import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTOS, URL_CLIENTES, URL_SUCURSALES, URL_EMPLEADO, URL_PEDIDO, URL_PEDIDO_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const EditPedido = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_Producto: "",
        id_Cliente: "",
        id_Sucursal: "",
        id_Empleado: "",
        fechaDetallePedido: ""
    }

    const [pedido, setPedido] = useState(initialState)
    const [products, setProducts] = useState([]);
    const [clients,setClients] = useState([])
    const [local, setLocal] = useState([]);
    const [employees, setEmployees] = useState([]);

    const getProducts = async () => {
        const response = await axios.get(URL_PRODUCTOS);
        setProducts(response.data);
      };

    const getClients = async () => {
        const response = await axios.get(URL_CLIENTES)
        setClients(response.data)
      }

    const getLocal = async () => {
        const response = await axios.get(URL_SUCURSALES);
        setLocal(response.data);
      };

    const getEmployees = async () => {
        const response = await axios.get(`${URL_EMPLEADO}`);
        setEmployees(response.data);
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.put(`${URL_PEDIDO_EDITAR}${id}`, {
                id_Producto: pedido.id_Producto,
                id_Cliente: pedido.id_Cliente,
                id_Sucursal: pedido.id_Sucursal,
                id_Empleado: pedido.id_Empleado,
                fechaDetallePedido: pedido.fechaDetallePedido
            })
            if (response.status === 200) {
                alert("Pedido Actualizado!")
                navigate('/pedidos')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async () => {
        const response = await axios.get(`${URL_PEDIDO}/${id}`)
        console.log(response.data)
        setPedido(response.data[0])


    }

    const handleChange = (e) => {
        setPedido({
            ...pedido, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()
        getProducts()
        getClients()
        getLocal()
        getEmployees()
    }, [])

    return (


        <div>
      <br />
      <div className="container-CRUD">
        <br />
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                <p className="titleCRUD">EDITA UN PEDIDO</p>
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
                        <Tooltip title="Nombre del Cliente">
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
                        </Tooltip>
                        <br />
                        <Tooltip title="Nombre de Sucursal">
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
                        <Tooltip title="Numero de Empleado">
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
                        </Tooltip>
                        <br />
                        <Tooltip title="Fecha">
                        <FormControl type='text' placeholder='Fecha' value={pedido.fechaDetallePedido} className="crud input" onChange={handleChange} name="fechaDetallePedido" required />
                        </Tooltip>
                        <br />
                      
                    </FormGroup>
                    <div>
          <Button type="submit" className="btnCRUD">
            Actualizar Pedido
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/pedidos'} className='text-decoration-none text-white'>Volver a Pedidos</Link></button>
          </div>
                </Form>
            </div>
        </div>
    )
}

export default EditPedido

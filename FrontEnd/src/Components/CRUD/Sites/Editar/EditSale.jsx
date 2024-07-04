import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_VENTAS, URL_PRODUCTOS, URL_CLIENTES, URL_EMPLEADO, URL_VENTAS_EDITAR } from '../../../../Constats/endpoints'

const EditSale = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_Producto: "",
        id_Cliente: "",
        id_Empleado: "",
        fechaVenta: "",
        tipoPagoVenta: "",
        totalVenta: "",
    }

    const [sale, setSale] = useState(initialState)
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


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_VENTAS_EDITAR}${id}`, {
                id_Producto: sale.id_Producto,
                id_Cliente: sale.id_Cliente,
                id_Empleado: sale.id_Empleado,
                fechaVenta: sale.fechaVenta,
                tipoPagoVenta: sale.tipoPagoVenta,
                totalVenta: sale.totalVenta
            })
            if(response.status === 200) {
                alert("Venta Actualizada!")
                navigate('/ventas')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const getData = async () => {
        const response = await axios.get(`${URL_VENTAS}/${id}`)
       console.log(response.data)
       setSale(response.data[0])
        
        
    }

    const handleChange = (e) => {
        setSale({
            ...sale, [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        getData()
        getProducts()
        getClients()
        getEmployees()
    }, [])

  return (


    <div>
      <h2 className="p-5 text-white text-center">EDITAR CLIENTE</h2>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <FormControl as="select" value={sale.id_Producto} name="id_Producto" onChange={handleChange}>
            <option hidden>Selecciona el Producto</option>
              {
                products.map((product) => (
                  <option key={product.id_Producto} name="id_Producto" value={product.id_Producto}>{product.nombreProducto}</option>
                ))
              }
            </FormControl>
            <br />
            <FormControl as="select" value={sale.id_Cliente} onChange={handleChange} name="id_Cliente">
            <option hidden>Selecciona el Cliente</option>
              {
                clients.map((client) => (
                  <option key={client.id_Cliente} name="id_Cliente" value={client.id_Cliente}>{client.nombreCliente} {client.apellidoCliente}</option>
                ))
              }
            </FormControl>
            <br />
            <FormControl as="select" value={sale.id_Empleado} name="id_Empleado" onChange={handleChange}>
            <option hidden>Selecciona el Empleado</option>
              {
                employees.map((employee) => (
                  <option key={employee.id_Empleado} name="id_Empleado" value={employee.id_Empleado}>{employee.nombreEmpleado} {employee.apellidoEmpleado}</option>
                ))
              }
            </FormControl>
            <br />
            <FormControl
              type="date"
              placeholder="Fecha de Hoy"
              onChange={handleChange}
              name="fechaVenta"
              defaultValue={sale.FechaVenta}
              required
            />
            <br />
            <FormControl
              type="text"
              placeholder={sale.TipoDePago}
              onChange={handleChange}
              name="tipoPagoVenta"
              defaultValue={sale.TipoDePago}
              required
            />
            <br />
            <FormControl
              type="number"
              placeholder={sale.TotalFacturado}
              onChange={handleChange}
              name="totalVenta"
              defaultValue={sale.TotalFacturado}
              required
            />
            <br />
            </FormGroup>
            <Button type='submit'>Actualizar Venta</Button>
        </Form>
</div>
    </div>
  )
}

export default EditSale

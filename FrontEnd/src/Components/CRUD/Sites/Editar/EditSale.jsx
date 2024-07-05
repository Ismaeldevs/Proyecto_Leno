import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate,Link} from 'react-router-dom'
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


    const handleSubmit = async (e) => {
        e.preventDefault()
  
        let total = sale.totalVenta * sale.cantidadVenta
        let totalDescuento = 0
    
    
        try {     
    
            totalDescuento = total * sale.descuentoVenta / 100;
            sale.totalVenta = total - totalDescuento    

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
      <br />
      <div className="container-CRUD">
        <br />
        <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">EDITA UNA VENTA</p>
        <FormGroup>
            <FormControl as="select" value={sale.id_Producto} name="id_Producto" className="crud input" onChange={handleChange} required>
            <option hidden>Selecciona el Producto</option>
              {
                products.map((product) => (
                  <option key={product.id_Producto} name="id_Producto" value={product.id_Producto}>{product.nombreProducto}</option>
                ))
              }
            </FormControl>
            <br />
            <FormControl as="select" value={sale.id_Cliente} className="crud input" onChange={handleChange} name="id_Cliente" required>
            <option hidden>Selecciona el Cliente</option>
              {
                clients.map((client) => (
                  <option key={client.id_Cliente} name="id_Cliente" value={client.id_Cliente}>{client.nombreCliente} {client.apellidoCliente}</option>
                ))
              }
            </FormControl>
            <br />
            <FormControl as="select" value={sale.id_Empleado} name="id_Empleado" className="crud input" onChange={handleChange} required>
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
              className="crud input"
              onChange={handleChange}
              name="fechaVenta"
              defaultValue={sale.FechaVenta}
              required
            />
            <br />
            <FormControl
              type="number"
              placeholder="Cantidad"
              className="crud input"
              onChange={handleChange}
              name="cantidadVenta"
              defaultValue={sale.Cantidad}
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
              placeholder={sale.TotalFacturado}
              className="crud input"
              onChange={handleChange}
              name="totalVenta"
              defaultValue={sale.TotalFacturado}
              required
            />
            <br />
            </FormGroup>
            <div>
          <Button type="submit" className="btnCRUD">
            Actualizar Venta
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/ventas'} className='text-decoration-none text-white'>Volver a Ventas</Link></button>
          </div>
        </Form>
</div>
    </div>
  )
}

export default EditSale

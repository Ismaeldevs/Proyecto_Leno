import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO, URL_PEDIDO_EDITAR } from '../../../../Constats/endpoints'
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
    }, [])

    return (


        <div>
            <h2 className="p-5 text-white text-center">EDITAR PEDIDO</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Tooltip title="Numero del Producto">
                        <FormControl type='text' placeholder='Numero Producto' value={pedido.NombreProducto} onChange={handleChange} name="id_Producto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero del Cliente">
                        <FormControl type='text' placeholder='Numero Cliente' value={pedido.NombreCompletoCliente} onChange={handleChange} name="id_Cliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero de Sucusal">
                        <FormControl type='text' placeholder='Numero Sucursal' value={pedido.NombreSucursal} onChange={handleChange} name="id_Sucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero de Empleado">
                        <FormControl type='text' placeholder='Numero Empleado' value={pedido.NombreCompletoEmpleado} onChange={handleChange} name="id_Empleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Fecha">
                        <FormControl type='text' placeholder='Fecha' value={pedido.fechaDetallePedido} onChange={handleChange} name="fechaDetallePedido" />
                        </Tooltip>
                        <br />
                      
                    </FormGroup>
                    <Button type='submit'className='btn btn-danger mx-2'>Actualizar Pedido</Button>
                    <Link to={'/pedidos'} className='btn text-white bg-danger '>Volver a Pedidos</Link>

                </Form>
            </div>
        </div>
    )
}

export default EditPedido

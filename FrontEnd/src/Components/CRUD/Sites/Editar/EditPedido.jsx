import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO, URL_PEDIDO_EDITAR } from '../../../../Constats/endpoints'

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
                        <FormControl type='text' placeholder='Numero Producto' value={pedido.NombreProducto} onChange={handleChange} name="id_Producto" />
                        <br />
                        <FormControl type='text' placeholder='Numero Cliente' value={pedido.NombreCompletoCliente} onChange={handleChange} name="id_Cliente" />
                        <br />
                        <FormControl type='text' placeholder='Numero Sucursal' value={pedido.NombreSucursal} onChange={handleChange} name="id_Sucursal" />
                        <br />
                        <FormControl type='text' placeholder='Numero Empleado' value={pedido.NombreCompletoEmpleado} onChange={handleChange} name="id_Empleado" />
                        <br />
                        <FormControl type='text' placeholder='Fecha' value={pedido.fechaDetallePedido} onChange={handleChange} name="fechaDetallePedido" />
                        <br />
                      
                    </FormGroup>
                    <Button type='submit'>Actualizar Pedido</Button>
                </Form>
            </div>
        </div>
    )
}

export default EditPedido

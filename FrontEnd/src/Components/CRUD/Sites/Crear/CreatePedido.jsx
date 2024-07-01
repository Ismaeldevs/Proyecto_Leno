import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO_CREAR } from '../../../../Constats/endpoints'

const CreatePedido = () => {

    const navigate = useNavigate()

    const initialState = {
        id_producto: "",
        id_cliente: "",
        id_sucursal: "",
        id_empleado: "",
        fecha: ""
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [pedido, setPedido] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_PEDIDO_CREAR}`, {
                id_producto: pedido.id_producto,
                id_cliente: pedido.id_cliente,
                id_sucursal: pedido.id_sucursal,
                id_empleado: pedido.id_empleado,
                fecha: pedido.fecha,
            })
            if (response.status === 200) {
                alert("Detalle Creado!")
                navigate('/pedidos')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        setPedido({
            ...pedido, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className="p-5 text-white text-center">CREAR PEDIDO</h1>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControl type='number' placeholder='Numero Producto' onChange={handleChange} name="id_producto" />
                        <br />
                        <FormControl type='number' placeholder='Numero Cliente' onChange={handleChange} name="id_cliente" />
                        <br />
                        <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="id_sucursal" />
                        <br />
                        <FormControl type='number' placeholder='Numero Empleado' onChange={handleChange} name="id_empleado" />
                        <br />
                        <FormControl type='text' placeholder='Fecha' onChange={handleChange} name="fecha" />
                        <br />
                    </FormGroup>
                    <Button type='submit'>Crear Detalle</Button>
                </Form>
            </div>
        </div>
    )
}

export default CreatePedido

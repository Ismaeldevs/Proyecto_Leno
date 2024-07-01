import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO, URL_PEDIDO_EDITAR } from '../../../../Constats/endpoints'

const EditPedido = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_producto: "",
        id_cliente: "",
        id_sucursal: "",
        id_empleado: "",
        fecha: ""
    }

    const [pedido, setPedido] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.put(`${URL_PEDIDO_EDITAR}${id}`, {
                id_producto: pedido.id_producto,
                id_cliente: pedido.id_cliente,
                id_sucursal: pedido.id_sucursal,
                id_empleado: pedido.id_empleado,
                fecha: pedido.fecha
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
                        <FormControl type='number' placeholder='Numero Producto' value={pedido.id_producto} onChange={handleChange} name="id_producto" />
                        <br />
                        <FormControl type='number' placeholder='Numero Cliente' value={pedido.id_cliente} onChange={handleChange} name="id_cliente" />
                        <br />
                        <FormControl type='number' placeholder='Numero Sucursal' value={pedido.id_sucursal} onChange={handleChange} name="id_sucursal" />
                        <br />
                        <FormControl type='number' placeholder='Numero Empleado' value={pedido.id_empleado} onChange={handleChange} name="id_empleado" />
                        <br />
                        <FormControl type='text' placeholder='Fecha' value={pedido.fecha} onChange={handleChange} name="fecha" />
                        <br />
                      
                    </FormGroup>
                    <Button type='submit'>Actualizar Pedido</Button>
                </Form>
            </div>
        </div>
    )
}

export default EditPedido

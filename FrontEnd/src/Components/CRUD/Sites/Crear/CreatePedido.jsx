import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO_CREAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const CreatePedido = () => {

    const navigate = useNavigate()

    const initialState = {
           id_Producto: "",
           id_Cliente: "",
           id_Sucursal:"",
           id_Empleado:"",
           fechaDetallePedido: "",
           activoDetallePedido: 0
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [pedido, setPedido] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_PEDIDO_CREAR}`, {
<<<<<<< HEAD
                     id_Producto: pedido.id_Producto,
                     id_Cliente: pedido.id_Cliente,
                     id_Sucursal:pedido.id_Sucursal,
                     id_Empleado:pedido.id_Empleado,
                     fechaDetallePedido: pedido.fechaDetallePedido,
                    activoDetallePedido: pedido.activoDetallePedido
=======
                id_Producto: pedido.id_Producto,
                id_Cliente: pedido.id_Cliente,
                id_Sucursal: pedido.id_Sucursal,
                id_Empleado: pedido.id_Empleado,
                fechaDetallePedido: pedido.fechaDetallePedido,
>>>>>>> main
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
<<<<<<< HEAD
                        <FormControl type='number' placeholder='Numero Producto' onChange={handleChange} name="id_Producto" />
                        <br />
                        <FormControl type='number' placeholder='Numero Cliente' onChange={handleChange} name="id_Cliente" />
                        <br />
                        <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="id_Sucursal" />
                        <br />
                        <FormControl type='number' placeholder='Numero Empleado' onChange={handleChange} name="id_Empleado" />
                        <br />
                        <FormControl type='text' placeholder='Fecha' onChange={handleChange} name="fechaDetallePedido" />
=======
                        <Tooltip title="Numero de Producto">
                            <FormControl type='number' placeholder='Numero Producto' onChange={handleChange} name="id_Producto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero del Cliente">
                            <FormControl type='number' placeholder='Numero Cliente' onChange={handleChange} name="id_Cliente" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero de Sucursal">
                            <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="id_Sucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero del Empleado">
                            <FormControl type='number' placeholder='Numero Empleado' onChange={handleChange} name="id_Empleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Fecha">
                            <FormControl type='date' placeholder='Fecha' onChange={handleChange} name="fechaDetallePedido" />
                        </Tooltip>
>>>>>>> main
                        <br />
                    </FormGroup>
                    <Button type='submit'className='btn btn-danger mx-2'>Crear Detalle</Button>
                    <Link to={'/pedidos'} className='btn text-white bg-danger '>Volver a Pedidos</Link>
                </Form>
            </div>
        </div>
    )
}

export default CreatePedido

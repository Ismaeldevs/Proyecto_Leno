import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO_CREAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const CreateEmployee = () => {

    const navigate = useNavigate()

    const initialState = {
        id_Sucursal: null,
        nombreEmpleado: "",
        apellidoEmpleado:"",
        cuilEmpleado: "",
        telefonoEmpleado: "",
        mailEmpleado: "",
        direccionEmpleado: "",
        activoEmpleado:0
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [employee, setEmployee] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${URL_EMPLEADO_CREAR}`, {
                id_Sucursal: employee.id_Sucursal,
                nombreEmpleado: employee.nombreEmpleado,
                apellidoEmpleado: employee.apellidoEmpleado,
                cuilEmpleado: employee.cuilEmpleado,
                telefonoEmpleado: employee.telefonoEmpleado,
                mailEmpleado: employee.mailEmpleado,
                direccionEmpleado: employee.direccionEmpleado
            })

            if (response.status === 200) {
                alert("Empleado Creado!")
                navigate('/empleados')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className="p-5 text-white text-center">CREAR EMPLEADO</h1>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>

                    <Tooltip title="Numero Sucursal">
                        <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="id_Sucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Nombre del Cliente">
                        <FormControl type='text' placeholder='Nombre Empleado' onChange={handleChange} name="nombreEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Nombre del Cliente">
                        <FormControl type='text' placeholder='Apellido Empleado' onChange={handleChange} name="apellidoEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="CUIL Empleado">
                        <FormControl type='text' placeholder='CUIL' onChange={handleChange} name="cuilEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono Empleado">
                        <FormControl type='text' placeholder='TELEFONO' onChange={handleChange} name="telefonoEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="MAIL Empleado">
                        <FormControl type='text' placeholder='MAIL' onChange={handleChange} name="mailEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion Empleado">
                        <FormControl type='text' placeholder='DIRECCION' onChange={handleChange} name="direccionEmpleado" />
                        </Tooltip>
                        <br />
                        <Button type='submit'>Crear Empleado</Button>
                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Crear Empleado</Button>
                    <Link to={'/empleados'} className='btn text-white bg-danger '>Volver a Empleados</Link>
                </Form>
            </div>
        </div>
    )
}

export default CreateEmployee

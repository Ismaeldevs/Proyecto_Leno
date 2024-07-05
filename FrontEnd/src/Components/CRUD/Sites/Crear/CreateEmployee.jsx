import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO_CREAR } from '../../../../Constats/endpoints'

const CreateEmployee = () => {

    const navigate = useNavigate()

    const initialState = {
        id_Sucursal: "",
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

            const response = await axios.post('http://localhost:8000/empleados/create', {
                id_Sucursal: employee.id_Sucursal,
                nombreEmpleado: employee.nombreEmpleado,
                apellidoEmpleado: employee.apellidoEmpleado,
                cuilEmpleado: employee.cuilEmpleado,
                telefonoEmpleado: employee.telefonoEmpleado,
                mailEmpleado: employee.mailEmpleado,
                direccionEmpleado: employee.direccionEmpleado,
                activoEmpleado:employee.activoEmpleado
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
                        <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="id_Sucursal" />
                        <br />
                        <FormControl type='text' placeholder='Nombre' onChange={handleChange} name="nombreEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='Apellido' onChange={handleChange} name="apellidoEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='CUIL' onChange={handleChange} name="cuilEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='TELEFONO' onChange={handleChange} name="telefonoEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='MAIL' onChange={handleChange} name="mailEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='DIRECCION' onChange={handleChange} name="direccionEmpleado" />
                        <br />
                        <Button type='submit'>Crear Empleado</Button>
                    </FormGroup>
                    
                </Form>
            </div>
        </div>
    )
}

export default CreateEmployee

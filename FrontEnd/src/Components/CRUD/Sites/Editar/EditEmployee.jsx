import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO, URL_EMPLEADO_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const EditEmployee = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_Sucursal: "",
        nombreEmpledo: "",
        apellidoEmpleado: "",
        cuilEmpleado: "",
        telefonoEmpleado: "",
        mailEmpleado: "",
        direccionEmpleado: ""
    }

    const [employee, setEmployee] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.put(`${URL_EMPLEADO_EDITAR}${id}`, {
                id_sucursal: employee.id_Sucursal,
                nombreEmpleado: employee.nombreEmpleado,
                apellidoEmpleado: employee.apellidoEmpleado,
                cuil: employee.cuilEmpleado,
                telefono: employee.telefonoEmpleado,
                mail: employee.mailEmpleado,
                direccion: employee.direccionEmpleado
            })
            if (response.status === 200) {
                alert("Empleado Actualizado!")
                navigate('/empleados')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async () => {
        const response = await axios.get(`${URL_EMPLEADO}/${id}`)
        console.log(response.data)
        setEmployee(response.data[0])


    }

    const handleChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (


        <div>
            <h2 className="p-5 text-white text-center">EDITAR CLIENTE</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Tooltip title="Numero Sucursal">
                        <FormControl type='number' placeholder='Numero Sucursal' value={employee.id_Sucursal} onChange={handleChange} name="id_Sucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Nombre del Empledado">
                        <FormControl type='text' placeholder='Nombre Empledado' value={employee.nombreEmpleado} onChange={handleChange} name="nombreEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Apellido del Empledado">
                        <FormControl type='text' placeholder='Nombre Completo' value={employee.apellidoEmpleado} onChange={handleChange} name="apellidoEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="CUIL del Empledado">
                        <FormControl type='text' placeholder='CUIL' value={employee.cuilEmpleado} onChange={handleChange} name="cuilEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono del Cliente">
                        <FormControl type='text' placeholder='Telefono' value={employee.telefonoEmpleado} onChange={handleChange} name="telefonoEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Mail del Cliente">
                        <FormControl type='text' placeholder='Mail' value={employee.mailEmpleado} onChange={handleChange} name="mailEmpleado" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion del Cliente">
                        <FormControl type='text' placeholder='Direccion' value={employee.direccionEmpleado} onChange={handleChange} name="direccionEmpleado" />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Actualizar Empleado</Button>
                    <Link to={'/empleados'} className='btn text-white bg-danger '>Volver a Empleados</Link>

                </Form>
            </div>
        </div>
    )
}

export default EditEmployee

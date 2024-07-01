import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO_CREAR } from '../../../../Constats/endpoints'

const CreateEmployee = () => {

    const navigate = useNavigate()

    const initialState = {
        id_sucursal: "",
        nombreCompleto: "",
        cuil: "",
        telefono: "",
        mail: "",
        direccion: ""
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [employee, setEmployee] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_EMPLEADO_CREAR}`, {
                id_sucursal: employee.id_sucursal,
                nombreCompleto: employee.nombreCompleto,
                cuil: employee.cuil,
                telefono: employee.telefono,
                mail: employee.mail,
                direccion: employee.direccion
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
                        <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="id_sucursal" />
                        <br />
                        <FormControl type='text' placeholder='Nombre Completo' onChange={handleChange} name="nombreCompleto" />
                        <br />
                        <FormControl type='text' placeholder='CUIL' onChange={handleChange} name="cuil" />
                        <br />
                        <FormControl type='text' placeholder='TELEFONO' onChange={handleChange} name="telefono" />
                        <br />
                        <FormControl type='text' placeholder='MAIL' onChange={handleChange} name="mail" />
                        <br />
                        <FormControl type='text' placeholder='DIRECCION' onChange={handleChange} name="direccion" />
                        <br />
                    </FormGroup>
                    <Button type='submit'>Crear Empleado</Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateEmployee

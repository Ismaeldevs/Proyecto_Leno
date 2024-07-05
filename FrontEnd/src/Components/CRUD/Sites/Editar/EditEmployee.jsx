import { useState, useEffect } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  URL_SUCURSALES,
  URL_EMPLEADO,
  URL_EMPLEADO_EDITAR,
} from "../../../../Constats/endpoints";
import { Tooltip } from "@mui/material";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id_Sucursal: null,
    nombreEmpledo: "",
    apellidoEmpleado: "",
    cuilEmpleado: "",
    telefonoEmpleado: "",
    mailEmpleado: "",
    direccionEmpleado: "",
  };

  const [employee, setEmployee] = useState(initialState);
  const [local, setLocal] = useState([]);

  const getLocal = async () => {
    const response = await axios.get(URL_SUCURSALES);
    setLocal(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(employee);
      let response = await axios.put(`${URL_EMPLEADO_EDITAR}${id}`, {
        id_Sucursal: employee.id_Sucursal,
        nombreEmpleado: employee.nombreEmpleado,
        apellidoEmpleado: employee.apellidoEmpleado,
        cuilEmpleado: employee.cuilEmpleado,
        telefonoEmpleado: employee.telefonoEmpleado,
        mailEmpleado: employee.mailEmpleado,
        direccionEmpleado: employee.direccionEmpleado,
      });
      if (response.status === 200) {
        alert("Empleado Actualizado!");
        navigate("/empleados");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    const response = await axios.get(`${URL_EMPLEADO}/${id}`);
    console.log(response.data);
    setEmployee(response.data[0]);
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getData();
    getLocal();
  }, []);

  return (
    <div>
      <br />
      <div className="container-CRUD">
        <br />
        <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">EDITA UN EMPLEADO</p>
          <FormGroup>
            <Tooltip title="Numero Sucursal">
              <FormControl
                as="select"
                className="crud input"
                onChange={handleChange}
                name="id_Sucursal"
                required
              >
                <option hidden>Selecciona la Sucursal</option>
                {local.map((sucursal) => (
                  <option
                    key={sucursal.id_Sucursal}
                    name="id_Sucursal"
                    value={sucursal.id_Sucursal}
                  >
                    {sucursal.nombreSucursal}
                  </option>
                ))}
              </FormControl>
            </Tooltip>
            <br />
            <Tooltip title="Nombre del Empledado">
              <FormControl
                type="text"
                placeholder="Nombre Empledado"
                value={employee.nombreEmpleado}
                className="crud input"
                onChange={handleChange}
                name="nombreEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Apellido del Empledado">
              <FormControl
                type="text"
                placeholder="Nombre Completo"
                value={employee.apellidoEmpleado}
                className="crud input"
                onChange={handleChange}
                name="apellidoEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="CUIL del Empledado">
              <FormControl
                type="text"
                placeholder="CUIL"
                value={employee.cuilEmpleado}
                className="crud input"
                onChange={handleChange}
                name="cuilEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Telefono del Cliente">
              <FormControl
                type="text"
                placeholder="Telefono"
                value={employee.telefonoEmpleado}
                className="crud input"
                onChange={handleChange}
                name="telefonoEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Mail del Cliente">
              <FormControl
                type="text"
                placeholder="Mail"
                value={employee.mailEmpleado}
                className="crud input"
                onChange={handleChange}
                name="mailEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Direccion del Cliente">
              <FormControl
                type="text"
                placeholder="Direccion"
                value={employee.direccionEmpleado}
                className="crud input"
                onChange={handleChange}
                name="direccionEmpleado"
                required
              />
            </Tooltip>
            <br />
          </FormGroup>
          <div>
          <Button type="submit" className="btnCRUD">
            Actualizar Empleado
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/empleados'} className='text-decoration-none text-white'>Volver a Empleados</Link></button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditEmployee;

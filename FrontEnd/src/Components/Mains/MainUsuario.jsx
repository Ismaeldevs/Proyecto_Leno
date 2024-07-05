import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_USUARIO, URL_USUARIO_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'
import Buscador from '../Layouts/Buscador'

const MainUsuario = () => {

  const [data,setData] = useState([])
  const [dataFiltrada, setDataFiltrada] = useState([]);


  const getData = async () => {
   const response = await axios.get(URL_USUARIO)
   console.log(response.data)
  setData(response.data)
  setDataFiltrada(response.data);
  }

  const filtrarDatos = (terminoBusqueda) => {
    const busqueda = data.filter(
      (datum) =>
        datum.usuario.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.rol.toString().toLowerCase().trim().includes(terminoBusqueda) 
    );
    setDataFiltrada(busqueda);
  };


  const handleChange = async (id_Usuario) => {

    const response = await axios.delete(`${URL_USUARIO_ELIMINAR}${id_Usuario}`)
    if(response) {
      alert("Usuario Eliminado!")
      getData()
    }
  }

useEffect(() => {
  getData()
}, [])


  return (
    <div>
      <h1 className="text-center text-white p-5">MODIFICA EL USUARIO</h1>
      <Buscador filtrarDatos={filtrarDatos} />

      
      <Link to={`/usuarios/create`} className='btn text-white bg-success m-5'>CREAR USUARIO</Link>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Usuario</th>
          <th>Contraseña</th>
          <th>Administrador</th>
          <th>Acciones</th>
         
        </tr>
      </thead>
      <tbody>
      {dataFiltrada.map((usuario) =>
                <tr key={usuario.id_Usuario}>
                <td>{usuario.id_Usuario}</td>
                <td>{usuario.usuario}</td>
                <td>{usuario.clave}</td>
                <td>{usuario.rol == 1 ? "Si" : "No"}</td>
               
                
                <td>
                  {<Link to={`/usuarios/view/${usuario.id_Usuario}`}>
                  <i className="me-3 text-primary fa-solid fa-eye">
                    </i>
                    </Link>}

                  {<Link to={`/usuarios/edit/${usuario.id_Usuario}`}>

                 
                  <i className="me-3 text-warning fa-solid fa-pen-to-square">
                    
                  </i>
                
                  </Link>}


                  {<button onClick={() => handleChange(usuario.id_Usuario)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    <div className='d-flex justify-content-center'>
    <Link to={'/select'} className= " btn btn-danger w-25 mb-5 mt-3 " >Volver a inicio</Link>
    </div>
    </div>
  )
}

export default MainUsuario
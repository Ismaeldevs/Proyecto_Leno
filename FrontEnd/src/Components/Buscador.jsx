import "../CSS/Mains/Buscador.css";
import { useState } from "react";
import axios from "axios";

const Buscador = () => {
  const [cliente, setCliente] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.get(`http://localhost:8000/clientes`);
    console.log(response.data);
    
  };

  return (
    <div>
      <nav className=" buscador navbar navbar-light bg-body-tertiary">
        <form  onSubmit={handleSubmit} className="d-flex  input-group w-50" >
          <input
            type="search"
            onChange={(e) => setCliente(e.target.value)}
            className="form-control rounded"
            placeholder="Buscar"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        <button  type="submit" className="boton btn btn-primary">
          <i> Buscar📥</i>
        </button>
        </form>
      </nav>
        
    </div>
  );
};

export default Buscador;

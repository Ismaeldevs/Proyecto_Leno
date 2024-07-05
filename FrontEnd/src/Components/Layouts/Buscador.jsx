import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../../CSS/buscador.css'

const Buscador = ({filtrarDatos}) => {
const [terminoBusqueda, setTerminoBusqueda] = useState('');

const handelInputChange=(event)=>{
    const termino = event.target.value.toLowerCase().trim()
    setTerminoBusqueda(termino)
}

const handleSubmit=(e)=>{
    e.preventDefault()  
    filtrarDatos(terminoBusqueda)
}

    return (
        <div className='w-100 d-flex buscador'>
            <form action="" className='mx-auto' onSubmit={handleSubmit}>
                <input onChange={handelInputChange} type="text" name='terminoBusqueda'></input>
                <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
            </form>
        </div>
    );
};

export default Buscador;
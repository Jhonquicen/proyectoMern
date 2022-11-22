import React, {useState} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
// import styles from "./guia.module.css";


const menu = { //lista de diccionario de cada atributo

    
}

const Guia = () => {
    
    const [categoria, setCategoria] = useState('');
    const [pueblo, setPueblo] = useState('');
    const [respuesta, setRespuesta] = useState({})//para recibir la respuesta de la api


    const crearGuia = e => {
        e.preventDefault();
        console.log(categoria);
        let url="" //falta ingresar la url
        console.log(url)
        url += categoria + "/" + pueblo;
        console.log(url)

        axios.get(url)
        .then(result => result.data)
        .then(result => {
            console.log(result)
            setRespuesta(result)
        }

        )
    }


    return(
        <div className='container'>
            <form onSubmit={crearGuia}>
                <div className='container'>
                <h1>hola</h1>
                <Link to={"/pueblo"}className='btn btn-primary'>pueblo</Link>
                <Link to={"/ensayo"}className='btn btn-secondary'>ensayo</Link>
                </div>
            </form>
        </div>
    )
}


export default Guia;
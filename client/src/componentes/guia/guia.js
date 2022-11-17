import React, {useState} from 'react';

import axios from 'axios';
// import styles from "./guia.module.css";
// import  '~antd/dist/antd.variable.min.css' ;

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

                </div>
            </form>
            <div className='border border-dark border border-5 rounded-3 p-3 mb-2'>
                {
                    categoria!== ""? //operador ternario, si categoria es diferente a vacio, osea esta lleno
                    menu[categoria].map((opcion) =>  //entre menu y map va la posicion del estado, opcion muestra cada uno de los atributos y el num muestra el numero de la posicion y pondriamos {num} en el <h5> para mostrar ese numero
                        <h5>{opcion} : {respuesta[opcion]}</h5>) // respuesta "respuesta" en la posicion "opcion"
                        
                        : null
                        
                        
                    }
                
                    
                
            </div>
        </div>
    )
}


export default Guia;
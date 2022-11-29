import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import styles from "./TodosPueblos.module.css";
// import { useHistory } from "react-router-dom";

const TodosPueblos = () => {

    const [pueblo, setPueblo] = useState([]);



    // const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/guias")

            .then(res => setPueblo(res.data))

            .catch(err => console.log(err));
    }, [])



    const borrarpueblo = id => {
        axios.delete("http://localhost:8000/api/guias/" + id)
            .then(res => {
                //Actualizamos lista a través de filter
                let nuevaLista = pueblo.filter(ciudad => ciudad._id !== id);
                setPueblo(nuevaLista);
                console.log(setPueblo)
            })
    }

    return (
        <div className={`container ${styles.container}`}>
            <table className="table table-hover">
                <tbody>


                    {
                        pueblo.map((ciudad, index) => (
                            <tr key={index}>
                                <td>
                                <div className="border border-dark border border-5 rounded-3 p-3 mb-2">
                                    <div className={`container ${styles.nombre}`}>
                                        <h3>Nombre del pueblo: {ciudad.nombre}</h3>

                                    </div>
                                    <div>
                                        <div>
                                            <p><b>Url de imagen:</b> {ciudad.imagen}</p>
                                        </div>
                                        <div className={`container ${styles.imagen}`}>
                                            <img src={ciudad.imagen} className="img-fluid" alt="pueblo"></img>
                                        </div>

                                    </div>
                                    <div>
                                        <p>{ciudad.descripcion}</p>

                                    </div>
                                    <div>
                                        <p><b>Gastronomia:</b> {ciudad.gastronomia}</p>

                                    </div>

                                    <div>
                                        <p><b>Fiesta:</b> {ciudad.fiesta}</p>

                                    </div>


                                    <div>
                                        <p><b>Atracciones:</b> {ciudad.atraccion}</p>

                                    </div>
                                    <div>
                                        <p><b>Gentilicio:</b> {ciudad.gentilicio}</p>

                                    </div>

                                    <div>
                                        <p><b>Economia:</b> {ciudad.economia}</p>

                                    </div>
                                    <div>
                                    
                                    
                                        <button className="btn btn-danger" onClick={() => borrarpueblo(ciudad._id)}>eliminar</button>
                                        <Link to={"/crear"} className='btn btn-primary'>crearpueblo</Link>
                                        <Link to={`/editar/${ciudad._id}`} className='btn btn-warning'>Editar</Link>
                                    </div>
                                </div>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    )

}


export default TodosPueblos;
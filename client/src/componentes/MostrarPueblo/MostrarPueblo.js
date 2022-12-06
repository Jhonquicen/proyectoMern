import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./MostrarPueblo.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const MostrarPueblo = () => {


    const { id } = useParams();
    const [pueblo, setPueblo] = useState([]);





    // const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/guias/" + id)

            .then(res => setPueblo(res.data))

            .catch(err => console.log(err))
    }, [id])




    return (
        <div className={`container ${styles.container}`}>
            <div>
                <div>
                    <div className={`container ${styles.nombre}`}>
                        <h2><b>{pueblo.nombre}</b></h2>
                    </div>

                    <div className={`container ${styles.imagen}`}>
                        <img src={pueblo.imagen} className="img-fluid" alt="pueblo"></img>
                    </div>

                    <div>
                        <p>{pueblo.descripcion}</p>
                    </div>

                    <div>
                        <p><b>Gastronomia: </b>{pueblo.gastronomia}</p>
                    </div>

                    <div>
                        <p><b>Fiesta: </b>{pueblo.fiesta}</p>
                    </div>

                    <div>
                        <p><b>Atracciones: </b>{pueblo.atraccion}</p>
                    </div>

                    <div>
                        <p><b>Gentilicio:</b> {pueblo.gentilicio}</p>
                    </div>

                    <div>
                        <p><b>Economia:</b> {pueblo.economia}</p>
                    </div>
                    <div className={`container ${styles.icono}`}>
                        <div className={`container ${styles.pulse}`}>

                            <Link to="/colombia" className='btn btn-outline-info'>regresar</Link>
                        </div>
                        <div className={`container ${styles.pulse}`}>
                            <Link to="/" className='material-symbols-outlined'>home</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default MostrarPueblo;
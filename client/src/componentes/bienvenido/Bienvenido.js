import React, {} from "react";

import {Link } from "react-router-dom";
import styles from "./Bienvenido.module.css";

const Bienvenido = () => {
    
    

    return(
        <div className={`container ${styles.container}`}>
            <div>
                <h1>Bienvenido a su guia turistico</h1>
            </div>
            <div>
                <p>Conozca los tesoros que tiene antioquia. Explore, descubra y</p>
                <p>planifique viajes a estos espectaculares lugares.</p>
                <p>Aca va a encontrar las distintas fiestas que realizan</p>
                <p>los pueblos del departamento</p>
            </div>
            <Link to="/guia" className="btn btn-outline-primary" >Guia</Link>
        </div>
    )

}

export default Bienvenido;
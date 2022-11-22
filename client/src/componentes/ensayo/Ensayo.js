import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Ensayo.module.css";
import {Link } from "react-router-dom";

const Ensayo = () => {

    
    
    const [pueblo, setPueblo] = useState([]);
    
    
    
    // const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/guias")
            
            .then(res => setPueblo(res.data) )
            
            .catch(err => console.log(err))
    }, [])

    



    

    return (
        <div className={`container ${styles.container}`}>
            

            <div>
                <div>

                    {
                        
                    }
                    <h1>{pueblo.nombre}</h1>
                    <img src={pueblo.imagen} alt="guia" className="img-fluid" />
                    
                </div>
                <div>
                    <div>
                        <p>Fiestas:{pueblo.fiesta}</p>
                    </div>
                    <p>Gastronomia:{pueblo.gastronomia}</p>
                    <p>Atracciones turisticas:{pueblo.atraccion}</p>
                    <p>Clima:{pueblo.clima}</p>
                    
                    <Link to={"/pueblo"}className='btn btn-primary'>pueblo</Link>
                    <Link to={"/ensayo"}className='btn btn-secondary'>ensayo</Link>
                    <Link to="/mapa"className='btn btn-success'>Mapa</Link>
                </div>
            </div>

        </div>
    )

}

export default Ensayo;
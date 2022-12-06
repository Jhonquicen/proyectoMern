import React, { } from "react";

import { Link } from "react-router-dom";
import styles from "./Bienvenido.module.css";

const Bienvenido = () => {



    return (
        <div className={`container ${styles.container}`}>
            <div>
                <h1>Bienvenido a su guia turistico</h1>

            </div>
            <div className={`container ${styles.mensaje}`}>
                <p>Conoce los tesoros que tiene antioquia. Explore, descubra y</p>
                <p>planifique sus viajes a estos espectaculares lugares.</p>
                <p>Encontraras sorprendentes escenarios con una belleza</p>
                <p> inigualable que no conocias.</p>
            </div>




            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://revistacompensar.b-cdn.net/wp-content/uploads/2021/08/A-rodar-por-Antioquia.jpg" className="d-block w-100" alt="piedra" />

                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.semana.com/resizer/ZVlfE-eek63eT8oThAEGswxKeS8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BKOBKA4YWFG7LCD2ZBL3LLOCR4.jpg" className="d-block w-100" alt="medellin" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.sitiosturisticoscolombia.com/wp-content/uploads/iglesia-jardin-antioquia.jpg" className="d-block w-100" alt="iglesia" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="http://4.bp.blogspot.com/-a2-fK9YkoJg/UiegdnLA0XI/AAAAAAAAALs/wi8Y0NQ5ZIU/s1600/collage.jpg" className="d-block w-100" alt="departamento" />
                    </div>
                </div>
                
            </div>

            <div className={`container ${styles.separador}`}>
                <div className={`container ${styles.bienvenido}`}>

                    <Link to="/colombia" className="btn btn-outline-primary" >Bienvenido</Link>
                </div>
                <div className={`container ${styles.login}`}>

                    <Link to="/login" >login</Link>
                </div>
            </div>
        </div>
    )

}

export default Bienvenido;
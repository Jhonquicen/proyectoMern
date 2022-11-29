import React, { useState } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./CrearPueblo.module.css";


const PuebloAntioquia = () => {


    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [gastronomia, setGastronomia] = useState("");
    const [fiesta, setFiesta] = useState("");
    const [atraccion, setAtraccion] = useState("");
    const [gentilicio, setGentilicio] = useState("");
    const [economia, setEconomia] = useState("");
    const [coordinates, setCoordinates] = useState("");

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarGuia = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/guias", {
            nombre,
            imagen,
            descripcion,
            gastronomia,
            fiesta,
            atraccion,
            gentilicio,
            economia,
            coordinates

        })
            .then(res => history.push("/pueblos"))
            .catch(err => setErrors(err.response.data.errors))
    }


    return (
        <div className={`container ${styles.container}`}>
            <div>
                <div className="row">
                    <div>
                        <h1> Ingresar Pueblo</h1>
                    </div>
                    <div>
                        <Link to="/" className="btn btn-primary">Regresar</Link>

                    </div>
                </div>
                <div>
                    <form onSubmit={guardarGuia}>
                        <div>

                            <div>
                                <label htmlFor="nombre">Nombre de la ciudad:</label>
                                <input type="text" id="nombre" name="nombre" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
                                {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}

                            </div>
                            <div>
                                <label htmlFor="imagen">Url de imagen:</label>
                                <input type="text" id="imagen" name="imagen" className="form-control" value={imagen} onChange={e => setImagen(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="gentilicio">Gentilicio:</label>
                                <input type="text" id="gentilicio" name="gentilicio" className="form-control" value={gentilicio} onChange={e => setGentilicio(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="coordinates">Coordenadas:</label>
                                <input type="text" id="coordinates" name="coordinates" placeholder="longitud,latitud" className="form-control" value={coordinates} onChange={e => setCoordinates(e.target.value)} />
                            </div>
                            {/* <div>
                                    <label htmlFor="gastronomia">Gastronomia:</label>
                                    <input type="text" id="gastronomia" name="gastronomia" value={gastronomia} onChange={e => setGastronomia(e.target.value)} />
                                </div> */}
                            <div>
                                <p>Gastronomia:</p>
                                
                                <textarea className="form-control" value={gastronomia} onChange={e => setGastronomia(e.target.value)}>Descripcion</textarea>

                            </div>

                            {/* <div>
                                    <label htmlFor="fiesta">Fiesta:</label>
                                    <input type="text" id="fiesta" name="fiesta" value={fiesta} onChange={e => setFiesta(e.target.value)}  />
                                </div> */}
                            <div>
                                <p>Fiesta:</p>
                                <textarea className="form-control" value={fiesta} onChange={e => setFiesta(e.target.value)}>Descripcion</textarea>

                            </div>


                            {/* <div>
                                    <label htmlFor="atraccion">Atracciones:</label>
                                    <input type="text" id="atraccion" name="atraccion" value={atraccion} onChange={e => setAtraccion(e.target.value)} />
                                </div> */}
                            <div>
                                <p>Atracciones:</p>
                                <textarea className="form-control" value={atraccion} onChange={e => setAtraccion(e.target.value)}>Descripcion</textarea>

                            </div>
                            {/* <div>
                                    <label htmlFor="economia">Economia:</label>
                                    <input type="text" id="economia" name="economia" value={economia} onChange={e => setEconomia(e.target.value)} />
                                </div> */}
                            <div>
                                <p>Economia:</p>
                                <textarea className="form-control" value={economia} onChange={e => setEconomia(e.target.value)}>Descripcion</textarea>

                            </div>
                            <div>
                                <p>Digitar la descripcion</p>
                                <textarea className="form-control" value={descripcion} onChange={e => setDescripcion(e.target.value)}>Descripcion</textarea>

                            </div>
                            <input type="submit" className="btn btn-success" value="Guardar" />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )

}
export default PuebloAntioquia;

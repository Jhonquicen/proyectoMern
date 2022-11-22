import React, {useState} from "react";
import axios from "axios";
import {Link, } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./Pueblos.module.css";


const PuebloAntioquia = () => {

    
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [gastronomia, setGastronomia] = useState("");
    const [fiesta, setFiesta] = useState("");
    const [atraccion, setAtraccion] = useState("");
    const [clima, setClima] = useState("");
    const [coordinates, setCoordinates] = useState("");

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarGuia = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/guias", {
            nombre,
            imagen,
            gastronomia,
            fiesta,
            atraccion,
            clima,
            coordinates
            
        })
            .then(res => history.push("/ensayo/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    
    return(
        <div className={`container ${styles.container}`}>
            <div>
                <div>
                    <div className="col-6">
                        <h1> Ingresar Pueblo</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/" className="btn btn-primary">Regresar</Link> 
                        
                    </div>
                </div>
                <div>
                    <form onSubmit={guardarGuia}>
                        <div>
                            
                                <div>
                                    <label htmlFor="nombre">Nombre del pueblo:</label>
                                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)}  />
                                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span>: null} 

                                </div>
                                <div>
                                    <label htmlFor="imagen">Url de imagen:</label>
                                    <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)}  />
                                </div>
                                <div>
                                    <label htmlFor="gastronomia">gastronomia:</label>
                                    <input type="text" id="gastronomia" name="gastronomia" value={gastronomia} onChange={e => setGastronomia(e.target.value)} />
                                </div>
                            
                            <div>
                                    <label htmlFor="fiesta">Fiesta:</label>
                                    <input type="text" id="fiesta" name="fiesta" value={fiesta} onChange={e => setFiesta(e.target.value)}  />
                                </div>
                            
                                
                            <div>
                                    <label htmlFor="atraccion">Atracciones:</label>
                                    <input type="text" id="atraccion" name="atraccion" value={atraccion} onChange={e => setAtraccion(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="clima">Clima:</label>
                                    <input type="text" id="clima" name="clima" value={clima} onChange={e => setClima(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="coordinates">Coordenadas:</label>
                                    <input type="text" id="coordinates" name="coordinates" value={coordinates} onChange={e => setCoordinates(e.target.value)} />
                                </div>
                                <input type="submit" className="btn btn-success" value="Guardar" />
                            </div>
                        
                    </form>
                    <Link to={"/pueblo"}className='btn btn-primary'>pueblo</Link>
                    <Link to={"/ensayo"}className='btn btn-secondary'>ensayo</Link>
                    <Link to="/mapa"className='btn btn-success'>Mapa</Link>
                </div>
            </div>
        </div>
    )

}
export default PuebloAntioquia;

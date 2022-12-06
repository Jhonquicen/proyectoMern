import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";


const Editar = () => {

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

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/guias/" + id)
            
            .then(res => {
                setNombre(res.data.nombre);
                setImagen(res.data.imagen);
                setDescripcion(res.data.descripcion);
                setGastronomia(res.data.gastronomia);
                setFiesta(res.data.fiesta);
                setAtraccion(res.data.atraccion);
                setGentilicio(res.data.gentilicio);
                setEconomia(res.data.economia);
                setCoordinates(res.data.coordinates);
            })
            .catch(err => history.push('/'));
            console.log("")
    }, [id, history])

    const updatePueblo = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/guias/" + id,{
            nombre,
            imagen,
            descripcion,
            gastronomia,
            fiesta,
            atraccion,
            gentilicio,
            economia,
            coordinates
        }, {withCredentials: true})
            .then(res => history.push('/pueblos'))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <h1>Editar Pueblo</h1>
            <form onSubmit={updatePueblo}>
                <div>
                    <div>
                        <label htmlFor="nombre">Nombre del pueblo:</label>
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
                        <label htmlFor="coordinates" placeholder="longitud,latitud">Coordenadas:</label>
                        <input type="text" id="coordinates" name="coordinates" className="form-control" value={coordinates} onChange={e => setCoordinates(e.target.value)} />
                    </div>
                    
                    <div>
                        <p>Gastronomia:</p>
                        <textarea className="form-control" value={gastronomia} onChange={e => setGastronomia(e.target.value)}>Descripcion</textarea>

                    </div>

                    <div>
                        <p>Fiesta:</p>
                        <textarea className="form-control" value={fiesta} onChange={e => setFiesta(e.target.value)}>Descripcion</textarea>

                    </div>

                    <div>
                        <p>Atracciones:</p>
                        <textarea className="form-control" value={atraccion} onChange={e => setAtraccion(e.target.value)}>Descripcion</textarea>

                    </div>
                    
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
    )

}

export default Editar;
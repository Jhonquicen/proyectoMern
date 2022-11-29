import {
    ComposableMap,
    
    Geographies,
    Geography,
    
    Marker
} from "react-simple-maps";

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory} from "react-router-dom";
import styles from "./map.module.css";




const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/colombia/colombia-departments.json";


// const markers = [
//     {
//         markerOffset: -30,
//         name: "Medellin",
//         coordinates: [-75.567, 6.217]
//     },
//     // { markerOffset: 15, name: "Bogota", coordinates: [-74.08175, 4.60971] },
//     // { markerOffset: 15, name: "Bucaramanga", coordinates: [-73.1198, 7.11392] },
    
//     // { markerOffset: 15, name: "Cali", coordinates: [-76.5205, 3.42158] },
    
// ];


const MapChart = () => {

    const [pueblos, setPueblos] = useState([])
    const history= useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/guias") 

                .then(response => response.data)
                .then(data => {
                    
                    setPueblos(data);
                
                })
    })

    return (
        
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                center:[-75,7], //para centrar el mata [arriba o abajo, derecha o izquierda]
                scale: 8000 //para el tamaño del mata
                
            }} className={`container ${styles.container}`} 
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                            />
                            ))
                        }
                </Geographies>
                
                        
                {pueblos.map(({ nombre, coordinates, _id}) => ( //pueblos.map para mapear los pueblos, 
                    <Marker key={nombre} 
                    coordinates={[parseFloat(coordinates.split(",")[0]),parseFloat(coordinates.split(",")[1])]}//perseFloat(coordinates.split(",")[0] y coordinates.split(",")[1])) esto lo realizamos para ingresar las coordenadas en forma de string en la base de datos 
                    //usamos en onClick para seleccionar el pueblo, con history.push lo traemos a la ruta ("/pueblo"+_id)
                    onClick={(e)=> history.push("/ensayo/"+_id)} > 
                        <g
                            fill="none"
                            stroke="#FF5533"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                            
                        >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                        <text
                            textAnchor="middle"
                            y={15}
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                            
                        >
                            {nombre}
                        </text>
                    </Marker>
                ))}
            
        </ComposableMap>
        
        
    );
    
};

export default MapChart;
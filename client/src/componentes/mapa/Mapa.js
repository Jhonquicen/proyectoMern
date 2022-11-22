import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import styles from "./Mapa.module.css";
import {Link } from "react-router-dom";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const Mapa = () => {
    return (
        <div className={`container ${styles.container}`}>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
                <Link to={"/pueblo"}className='btn btn-primary'>pueblo</Link>
                <Link to={"/ensayo"}className='btn btn-secondary'>ensayo</Link>
        </div>
    )

}

export default Mapa;
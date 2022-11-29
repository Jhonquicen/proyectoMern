import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bienvenido from './componentes/bienvenido/Bienvenido';


// import Mapa from './componentes/mapa/Mapa';
import MapChart from './componentes/mapChart/MapChart';
import PuebloAntioquia from './componentes/CrearPueblo/CrearPueblo';
import MostrarPueblo from './componentes/MostrarPueblo/MostrarPueblo';
import TodosPueblos from './componentes/TodosPueblos/TodosPueblos';
import Login from './componentes/login/Login';
import Editar from './componentes/editar';




const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
      
        <Switch>
          <Route path="/" exact render={()=> <Bienvenido />} />
          
          
          <Route path="/crear" exact render={(pathParams)=><PuebloAntioquia {...pathParams}/>} />
          <Route path="/ensayo/:id" exact render={(pathParams)=> <MostrarPueblo {...pathParams} />} /> 
          <Route path="/editar/:id" exact render={(pathParams)=> <Editar {...pathParams} />} /> 
          <Route path="/colombia" render={()=> <MapChart />} /> 
          <Route path="/pueblos" exact render={()=><TodosPueblos/>} />
          <Route path="/login" exact render={()=><Login/>} />
        </Switch>
    
      </BrowserRouter>
    </div>
  )
}

export default App;

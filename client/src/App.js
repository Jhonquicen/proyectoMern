import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bienvenido from './componentes/bienvenido/Bienvenido';
import Ensayo from './componentes/ensayo/Ensayo';
import Guia from './componentes/guia/guia';
import Mapa from './componentes/mapa/Mapa';
import MapChart from './componentes/mapChart/MapChart';
import PuebloAntioquia from './componentes/pueblos/Pueblos';




const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
      
        <Switch>
          <Route path="/" exact render={()=> <Bienvenido />} />
          
          <Route path="/guia" exact render={()=> <Guia />} /> 
          <Route path="/pueblo" exact render={(pathParams)=><PuebloAntioquia {...pathParams}/>} />
          <Route path="/ensayo" render={(pathParams)=> <Ensayo {...pathParams}/>} /> 
          <Route path="/mapa" exact render={()=> <Mapa />} /> 
          <Route path="/colombia" exact render={()=> <MapChart />} /> 
        </Switch>
    
      </BrowserRouter>
    </div>
  )
}

export default App;

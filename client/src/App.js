import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bienvenido from './componentes/bienvenido/Bienvenido';
import Guia from './componentes/guia/guia';




const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <Bienvenido />} />
          {/* <Route path="/estado/:id" exact render={(routeProps)=> <EstadoJugador {...routeProps}/>} /> */}
          <Route path="/guia" exact render={()=> <Guia />} /> 
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

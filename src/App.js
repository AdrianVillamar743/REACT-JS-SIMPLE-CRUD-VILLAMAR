import logo from './logo.svg';
import './App.css';
/*Importaremos el componente */
import ComponenteMostrarCategorias from './categorias/listadoCategorias';
import ComponenteMostrarTareas from './categorias/tareas';
import ComponenteEditarCategoria from './categorias/editar';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link
} from "react-router-dom";
import ComponenteCrearCategorias from './categorias/crear';
function App() {
  return (
    <div className="App">
     
      <Router>
                <Routes>
                  <Route path='/' 
                  element={ <ComponenteMostrarCategorias/>}></Route>

                  <Route path='/crear' 
                  element={ <ComponenteCrearCategorias/>}></Route>

                   <Route path='/editar/:id' 
                  element={ <ComponenteEditarCategoria/>}></Route>
              
                      

                </Routes>

                
      </Router>
     
       <ComponenteMostrarTareas></ComponenteMostrarTareas>
    
    </div>
  );
}

export default App;

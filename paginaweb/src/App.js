import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//Paginas del Sitio Web
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Productos from './components/productos/Productos';
import Contactos from './components/contactos/Contactos';

class App extends React.Component{ 
  

  render(){
    
    return(
      <React.Fragment>
          <Router>
            <Routes>
                <Route exact path='/paginaweb' element={<Home/>} />                 
                <Route exact path="/paginaweb/nosotros" element={<Nosotros />}/>                                
                <Route exact path="/paginaweb/productos" element={<Productos />}/>
                <Route exact path="/paginaweb/contactos" element={<Contactos />}/> 
            </Routes>      
          </Router>
      </React.Fragment>
    );
  
  }
}
export default App;


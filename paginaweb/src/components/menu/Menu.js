import React from "react";
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    constructor(props){
        super(props);

        this.cerrarSesion = this.cerrarSesion.bind(this);
    }

    state = {
        existe: false
    };

   
    cerrarSesion = () =>{
       localStorage.removeItem('Token');
       window.location.href = './';
        
     }

     inicioSesion = () =>{
        window.location.href = './login';
     }
    render(){

        if(localStorage.getItem('Token') !== null){
            this.setState.existe = true;
        }
        console.log( this.setState.existe)

        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                 <Link to="/paginaweb" className="navbar-brand" >Mi Proyecto</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/paginaweb" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/paginaweb/nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/paginaweb/productos" className="nav-link">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/paginaweb/contactos" className="nav-link">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/paginaweb/clientes" className="nav-link">Clientes</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                    <span className="mt-2 mt-md-0">
                    {this.state.existe === true &&
                       <button className="bbtn btn-outline-success my-2 my-sm-0" onClick={() => this.cerrarSesion()}> Salir</button>
                    }

                    {this.state.existe === false &&
                       <button className="bbtn btn-outline-success my-2 my-sm-0" onClick={() => this.inicioSesion()}> Iniciar</button>
                    }
                    </span>
                 </div>
            </nav>
        );
    }
}

export default Menu;
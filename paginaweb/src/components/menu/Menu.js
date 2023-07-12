import React from "react";
import { Link } from 'react-router-dom';
import BotonLogIn from "./BotonLogIn";
import BotonLogoout from "./BotonLogout";

class Menu extends React.Component{
    constructor(props){
        super(props);
       this.state = {islogin: false};
    }

    componentDidMount(){
        if(localStorage.getItem('Token') === null){
           this.setState({islogin:false});
        }
        else{
            this.setState({islogin:true});
        }
    }
   
    cerrarSesion = () =>{  
       localStorage.clear();    
       this.setState({islogin:false});  
       window.location.href = './';
     }

     inicioSesion = () =>{
        this.setState({islogin:true});
        window.location.href = './login';
     }

    render(){   
        const estalogueado = this.state.islogin;
        let button;

        if(estalogueado){
            button =<BotonLogoout onClick={this.cerrarSesion} />
        }
        else{
            button = <BotonLogIn onClick={this.inicioSesion}/>
        }
       
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
                   {button}
                 </div>
            </nav>
        );
    }
}

export default Menu;
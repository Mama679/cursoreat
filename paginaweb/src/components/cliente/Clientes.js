import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

class Clientes extends React.Component{

    componentDidMount(){
         if(localStorage.getItem('Token') === null){
             window.location.href = './login';
         }
     }

    render(){
        return(
            <>
            <Menu/>
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="container">
                    <h2>Listado de Clientes</h2>
                </div>
            </main>
            <Footer/>
            </>
        );
    }
}

export default Clientes;
import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import ClienteService from "../../servicio/cliente-service";


class Clientes extends React.Component{

    constructor(props){
        super(props);
       
    }  

    componentDidMount(){
         if(localStorage.getItem('Token') === null){
             window.location.href = './login';
         }
         else
         {
            this.retrieveClientes();
         }
         
     }

     

     retrieveClientes() {
        ClienteService.getAllClientes
        .then(response => {
            
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
         
      }
    
    

    render(){
        return(
            <>
            <Menu/>
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="container">
                    <h2>Listado de Clientes</h2>
                    <div class="table-responsive">
                       
                    </div>
                </div>
            </main>
            <Footer/>
            </>
        );
    }
}

export default Clientes;
import React from "react";
import axios from 'axios';
import {ApiUrl} from '../../servicio/ApiRest';

class Login extends React.Component{
    state = {
        form:{
            Usuario:"",
            Clave:""
        },
        error: "",
        mensaje:""
    }

    componentDidMount(){
        if(localStorage.getItem('Token') !== null){
            window.location.href = './clientes';
        }
    }

    manejadorTexto = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
    }

    botonClick = async() =>{
        let url = ApiUrl + "acceso/ValidarUsuario";
        let hasError = false;

        if(this.state.form.Usuario === "" || this.state.form.Clave ===""){
            hasError = true;
        } 

        if(hasError){
           
            await this.setState({
                error:hasError,
                mensaje: "Nombre de usuario / Password incorrecto."
            });
        } 
        else{

            axios.post(url,this.state.form)
                 .then(response => {
                   
                    if(response.data.resultado === 200){
                        localStorage.setItem('Token',response.data.dato);    
                       this.setState({
                         error:false,
                         mensaje: response.data.mensaje
                       });
                       window.location.href = './clientes';
                     }else{
                         this.setState({
                             error:true,
                             mensaje:response.data.mensaje
                         });
                     }
                 })
                 .catch(error =>{
                    this.setState({
                        error:false,
                        mensaje:error
                });
            });           
        }       
    }
    
    render(){

        return(
            <div className="col-md-4 mx-auto" style={{paddingTop: "10%"}}>
                <div className="card">
                    <div className="card-header">
                        <h2>Ingresar</h2>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="mb-3">
                                <label  className="form-label">Usuario</label>
                                <input type="text" name="Usuario" className="form-control" placeholder="Usuario" onChange={this.manejadorTexto} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input type="password" name="Clave" className="form-control" placeholder="contraseña" onChange={this.manejadorTexto}/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary" onClick={this.botonClick}>Ingresar</button>
                        </div> 

                        {this.state.error === true &&
                             <div className="alert alert-danger" role="alert">
                                 {this.state.mensaje}
                            </div>
                        }

                        {this.state.error === false &&
                             <div className="alert alert-success" role="alert">
                                 {this.state.mensaje}
                            </div>
                        }      
                       
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
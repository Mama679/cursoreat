import React from "react";

class Tabla extends React.Component{
    render(){
      return(  <>
            <table className="table table-striped table-bordered nowrap">
                <thead align="center">
                    <tr>
                        <th>Identificación</th>
                        <th>Tipo Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Celular</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>);
    }
}

export default Tabla;
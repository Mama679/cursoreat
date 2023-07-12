import http from "../http-common";

const API_URL = 'cliente/';

class ClienteService{
    
    getAllClientes(){
        return http.get(API_URL + 'GetClientes')
    }
}

export default ClienteService;
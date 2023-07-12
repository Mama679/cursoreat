import axios from "axios";
import AuthHeader from "./servicio/Auth-Headers";

export default axios.create({
    baseURL:"http://10.168.46.6:3200/api/",
    headers:{
        "Content-type": "application/json",
        "Authorization":AuthHeader()
    }
});
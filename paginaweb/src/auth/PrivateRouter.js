import React from "react";
import {Redirec, Route} from 'react-router-dom';

const PrivateRouter = (props) =>{
    const token = localStorage.getItem("Authorization");
    return(<>
        {token ? <Route{...props}/> :<Redirec to="/login"/>}
    </>);
}

export default PrivateRouter;
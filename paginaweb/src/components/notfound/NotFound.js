import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import NotfoundImg from "../../assets/img/404.png";
import "../../assets/css/error.css";

class NotFound extends React.Component{
    render(){
        return(
            <>
            <Menu/>
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="text-center">
                    <h1 className="Error_Text">Error: 404 Page Not Found</h1>    
                    <img src={NotfoundImg} alt="404 NotFound" className="Error_Image" />
                </div>
            </main>
            <Footer/>
            </>
        );
    }
}

export default NotFound;
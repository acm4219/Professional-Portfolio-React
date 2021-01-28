import React from "react";
import { Link } from "react-router-dom";
import "../styles/jumbotron.css"

function Jumbotron(){
        return(
        <div>
            
            <div className="container">
            <img src={process.env.PUBLIC_URL + "/codingstock.JPG"} alt="entrypic" style={{width:"100%", height:"93.8vh"}}/>
            <div className="jumbotron jumbotron-center" >
                <h1 className="display-4">Alexander McDonald Portfolio</h1>
                <hr />
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <Link className="btn btn-primary btn-lg" to="/Professional-Portfolio-React/home">Check it out!</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Jumbotron;
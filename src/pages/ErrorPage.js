import React from "react";
import {Link } from 'react-router-dom';

function ErrorPage() {
    return (

        <div class = "big-container">

            <div class="header">            
                <h1>HÅKNÄS HÄSTBRUK </h1>                   
                <h2>-Hästäventyr för hela familjen!</h2>                   
            </div>

            <div class="ikon"> 
                <img class = "horsie" src={require("../img/hastikon.jpeg")} alt="Ikon föreställande en tecknad häst"/>               
            </div>  

            <div class="meny">
                <ul>
                    <Link to="/"> Start </Link>
                    <br/> 
                    <Link to="/om"> Om </Link> 
                    <br/>
                    <Link to="/Aktiviteter"> Aktiviteter </Link> 
                    <br/>
                    <Link to="/Hitta"> Hitta hit </Link>
                    <br/>
                    <Link to="/Kontakt"> Kontakt </Link>
                </ul>    
            </div>
            

            <div class="grid-container">

                <div> 
                    <h4>Sidan hittas inte, en tjäder har nog skrämt iväg innehållet... </h4> 
                </div>
                    
            </div>

        </div>

    )
}

export default ErrorPage;
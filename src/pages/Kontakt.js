import React from "react";
import {Link } from 'react-router-dom';

class Kontakt extends React.Component {
    render() {
        return (

            <div class = "big-container-kontakt">

                <div class="header">            
                    <h1>HÅKNÄS HÄSTBRUK </h1>                   
                    <h2>-Hästäventyr för hela familjen!</h2>                   
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

                <div class="ikon"> 
                    <img class = "horsie" src={require("../img/hastikon.jpeg")} alt="Ikon föreställande en tecknad häst"/>               
                </div> 
            
                <div class="grid-container-kontakt">

                    <div class="textBoka"> 
                        <h4 style={{textAlign: "center", fontSize: "20px"}}> Kontakta oss här! </h4>
                        <p> Beskriv ditt ärende i meddelanderutan samt fyll i dina kontkatuppgifter. 
                            <br/>
                            Vi återkommer
                            till dig så snart som möjligt! 
                            <br/>
                            Du kommer få ett bekräftelsemail på att vi
                            mottagit ditt meddelande. 
                            <br/>
                            <br/>
                            Det går även bra att ringa oss.
                            <br/> 
                            Telefon: +46 70 255 07 88
                        </p>
                    </div>

                    <div class="form"> 

                        <form action="#">

                            <label for="subject"> Meddelande: </label>
                            <textarea id="subject" name="subject" placeholder="Gnägg! Skriv ditt meddelande här!">
                            </textarea>

                            <br/><br/>
                            <label for="fornamn"> Förnamn: </label>
                            <input type="text" id="fornamn" name="fornamn"/>
                            <br/><br/>
                            <label for="efternamn"> Efternamn: </label>
                            <input type="text" id="efternamn" name="efternamn"/>
                            <br/><br/>
                            <label for="mail"> Mailadress: </label>
                            <input type="text" id="mail" name="mail"/>
                            <br/><br/>
                            <label for="telefon"> Telefonnummer: </label>
                            <input type="text" id="telefon" name="telefon"/>
                            <br/><br/>
                            <input type="submit" value="Skicka"/>

                        </form>

                    </div>

                    <div class="bildBoka">
                        <img class="bildBoka" src={require("../img/studenttur.jpeg")} alt="Hästar drar studenter på litet flak"/>
                    </div>

                    <div class="bildBoka2">
                        <img class="bildBoka" src={require("../img/jultur.jpeg")} alt="Jultur med häst med tomten"/>
                    </div>

                </div>

            </div>

        )
    }
}

export default Kontakt;
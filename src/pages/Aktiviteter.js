import React from "react";
import {Link } from 'react-router-dom';

class Aktiviteter extends React.Component {
    render() {
        return (

            <div class = "big-container-aktiviteter">

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

        

                <div class="grid-container-aktiviteter">
                    
                    <div class="bildTur">
                        <img class="bildTur" src={require("../img/vintertur.jpeg")} alt="Hästar på vintertur"/>  
                    </div>

                    <div class = "textTur">                                            
                        <h3> Turer  </h3>
                        
                        <p>
                            Ta en ridtur i den norrländska naturen och upplev årstidernas växlingar från hästryggen.
                        </p> 
                        <br/>
                        <p style={{fontWeight: "bolder"}}> Halvdagstur: </p>

                        <p>Turen tar ca 4 timmar, inkl. fikapaus som vi tar vid en liten vacker sjö i skogen.
                        </p>
                        <p style={{fontWeight: "bolder"}} > Heldagstur: </p>
                        <p>Turen tar ca 7 timmar, inkl. pauser för lunch och fika.
                        </p>
                        <br/>
                        <p style={{fontStyle: "italic"}}> Halv- och Heldagsturen förutsätter viss ridvana - dvs. att man kan rida lätt och
                            hänga med i trav och galopp.
                        </p>
    
                    </div>    
                    
                    <div class="bildTur2">
                        <img class="bildTur2" src={require("../img/sommartur.jpeg")} alt="Sommartur med hästar"/>  
                    </div>

                    <div class = "textTur2"> 
                        <h3> Gruppturer  </h3>
                        <p>
                            Bjud medarbetarna på en oförglömlig upplevelse
                            tillsammans med våra nordsvenska hästar i de norrländska skogarna.
                            Turen kombineras med vagn/släde och några ridhästar. 
                            Alla som vill kan prova på att färdas till häst. 
                            Gruppturer passar för grupper mellan 10–25 personer.
                        </p>
                        <br/>
                        <p style={{fontWeight: "bolder"}}>Slädturer: </p>
                        <p>
                            Ta med hela familjen på vinteräventyr, nerbäddade 
                            i renskinn i den norrländska naturen.
                            Med häst och släde åker vi mellan snötyngda träd
                            efter skogsvägar. Hemma på gården väntar kaffe, 
                            varm choklad och mackor i Lillstugan. 
                            Passar tre vuxna eller två vuxna och två barn.
                            Fika tillkommer med 40 kr/person.    
                        </p> 
                    </div>  

                    <div class="tabell">
                        <h4 style={{textAlign: "center", fontSize: "18px"}} >Priser</h4>

                        <table>
                            <tr>
                                <th>Tur</th>
                                <th>Tid</th>
                                <th>Pris per person</th>
                            </tr>
                            <tr>
                                <td>Prova på</td>
                                <td>1 h </td>
                                <td>220 kr</td>
                            </tr>
                            <tr>
                                <td>Halvdag</td>
                                <td>4 h </td>
                                <td>680 kr</td>
                            </tr>
                            <tr>
                                <td>Heldag</td>
                                <td>7 h </td>
                                <td>1 240 kr</td>
                            </tr>
                            <tr>
                                <td>Grupptur</td>
                                <td>2 h </td>
                                <td>320 kr</td>
                            </tr>
                            <tr>
                                <td>Slädtur</td>
                                <td>2 h </td>
                                <td>480 kr</td>
                            </tr>

                        </table>

                    </div>

                    <div class="bokningsKnapp"> 
                        <h5> Hör av dig för att boka en tur! </h5> 
                        
                        <Link to="/Kontakt" class = "button"> KONTAKTA OSS! </Link>
                            
                    </div>

                </div>

            </div>

        )
    }
}

export default Aktiviteter;
import React from "react";
import {Link } from 'react-router-dom';


class Om extends React.Component { 
    render() {
        return (

            <div class = "big-container-om">

                <div class="header">             
                    <h1>HÅKNÄS HÄSTBRUK</h1> 
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

                <div class="grid-container-om">
                    
                    <div class="bildMariaOm" >
                        <img class="bildMariaOm" src={require("../img/sommar.jpeg")} alt="Sommartur med flera hästar"/>  
                    </div>

                    <div class = "textMariaOm">                                              
                        <h3> Det här är Håknäs Hästbruk!  </h3>
                        <p> Håknäs Hästbruk ordnar turridning i den norrländska naturen.
                            Vi rider efter skogsvägar och stigar. Ridningen sker på nordsvenska
                            brukshästar, vilka passar till både vana och ovana ryttare.
                            Turridningen hålls året om.  
                            Vår och höst hålls ridlektioner på nordsvenskar där vi 
                            blandar uteritter med träning på vår belysta rid- och körbana 
                            när mörkret faller på. Vi håller även helgkurser: 
                            introduktionskurser i körning, skogskörning, brukskörning, 
                            dressyr, parkörning och inkörning.              
                        </p>                     
                    </div>                 
                    
                    <div class="textHorseOm">
                        <h3> Hästarna  </h3>
                        <p>
                            Här är dom alla gosarna!! Åhh vad gosiga dom är. Jag förstår
                            att du vill veta mer om alla. Är det någon speciell du vill 
                            veta mer om? 
                            Klicka på bilden i så fall. Det är dock en funktion som är under
                            uppbyggnad så det kanske inte fungerar på direkten haahahah.
                            Men om du vill kan jag berätta mer. En skulle kunna tro att det är
                            Jeff som styr Bruket men faktiskt är det Jeff Jr! Vem hade kunnat tro. 
                            <br/>
                            Det finns så mycket att säga om hästarna. Alla är verkligen sin egna
                            karaktär och det finns någon som passar alla.                       
                        </p> 
                    </div>   
                    
                    <div class="polaroid">
                        <img class="bildLo" src={require("../img/lo.jpeg")} alt="Hästen Lo"/>
                        
                            <p>Lo </p>
                            <h6> En riktig queen, Håknäs drottning! </h6>
                        
                    </div>

                    <div class="polaroid">
                        <img class="bildHelge" src={require("../img/helge.jpeg")} alt="Hästen Helge"/>                
                            <p>Helge</p>
                            <h6> Döpt efter skogens konung. 
                            </h6>                   
                    </div>

                    <div class="polaroid">
                        <img class="bildHorse1" src={require("../img/hastar1.jpeg")} alt="Hästarna Jeff och Barnabas"/>                    
                            <p>Jeff och Barnabas</p>
                            <h6> Här är grabbarna, ansiktena lite gömda i bild pga GDPR.
                                No paparazzi. 
                            </h6> 
                        
                    </div>

                    <div class = "sluttext"> 
                        <h4>
                            Gnägg!! Vill du läsa mer om hästar som djur? Ja det är klart! 
                            <br/>
                            <a href="https://www.arla.se/49a07a/globalassets/old/global/aktuellt/minior/290/hastboken_low.pdf">     
                            Kolla in det här häftet! </a>
                            </h4>

                            {/* <p> Visste du att det finns ett Memory med alla godingar på gården?
                                <br/>
                                Klicka <a href="./shuffle.html">här</a> för att komma dit direkt eller 
                                klicka på knappen nedan för en liten teaser.
                            </p> */}

                            {/* <div class = "knappTeaser"> 
                                <button> TEASER </button>
                            </div>

                            <div class="memBild"> 
                                <img src={require("../img/memory.png")}/>
                            </div> */}

                    </div>

                </div>

            </div>

            

            
        )

    }
}

export default Om;

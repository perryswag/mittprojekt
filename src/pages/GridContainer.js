import React from "react";

class GridContainer extends React.Component {
    render() {
        return (
            
            <div class="grid-container">
                   
                <div class="bildMaria">
                    <img class="bildMaria" src={require("../img/familj.jpeg")} alt="En stor häst, ett föl och två barn" />  
                </div>

                <div class = "textMaria">  
                                               
                        <h3> Välkommen till Håknäs hästbruk!  </h3>
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
                        <h4>
                            Är du intresserad av att veta mer om 
                            den spännande historien bakom bruket?
                            <br/>
                            <a href="./om.html"> Följ denna länk om du törs!! </a>
                        </h4>
                                      
                </div>                 
 
                <div class="textAktiviteter">
                                             
                        <h3> Aktiviteter  </h3>
                        <p> Bjud medarbetarna på en oförglömlig upplevelse 
                            tillsammans med våra nordsvenska hästar i de norrländska
                            skogarna. Turen kombineras med vagn/släde och några ridhästar.
                            Alla som vill kan prova på att färdas till häst. 
                            Gruppturer passar för grupper mellan 10-25 personer.
                            Alla turer sker på stabila och trygga nordsvenska brukshästar, som passar till
                            ryttare på alla nivåer.
                        </p>    
                            
                            <h4> Sugen på en vintertur i släde med Barnabas?
                                <br/>
                                <a href="./aktiviteter.html"> 
                                    Läs mer om våra aktiviteter här! </a>
                            </h4>
                        
                 
                </div> 
                
                <div class="bildAktivitet">
                    <img class="bildMaria" src={require("../img/vintertur2.jpeg")} alt="Hästar på vintertur"/>
                </div>

                
                <div class="textHorse">
                                   
                        <h3> Hästarna  </h3>
                        <p>
                            Hästarna är många på gården. Lo, Helge, Barnabas, Jeff, Melgot,
                            Måns, Lillemor, Stitch, Tallulah-Phoebe, Flisan, Greger och Mozart!
                            Sen ska vi ju självklart inte glömma ponny-gänget: 
                            Miha, hamburgarenas, Annicha, Anncha, Moah, Ricky, Ritva, Lennie, Ortega, Lukky Starr,
                            Eleoniore, Samanta, Kenneth, Zebben, Ronny, Pirogen, Billy, Bill, Åkhe och Jeff Jr.
                            Olika hästar passar olika personer och här på Bruket finns någon för alla!
                            Behandla hästarna som du själv vill bli behandlad.
                        </p> 

                           <h4> Är Jeff och Jeff Jr ens släkt?  
                            <br/>                        
                             <a href="./om.html"> 
                                Ta reda på mer om hästarna här! </a>
                            </h4>
                            
                        
                </div>       

                <div class="bildHorse">
                    <img class="bildMaria" src={require("../img/lo2.jpeg")} alt="Hästen Lo"/>
                </div>

                <div class="bokningsKnapp"> 
                    <h5> Är du intresserad av att göra något på bruket? Sugen på att surra? </h5> 
                    <a href="./kontakt.html" class = "button"> 
                        KONTAKTA OSS!
                    </a>
                </div>

            </div>


        )
    }
}

export default GridContainer;
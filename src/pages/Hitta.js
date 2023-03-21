import React from "react";
import {Link } from 'react-router-dom';

class Hitta extends React.Component {
    render() {
        return (

         
            <div class = "big-container-hitta">
            
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
                        <Link to="/Hitta"> Hitta </Link>
                        <br/>
                        <Link to="/Kontakt"> Kontakt </Link>  
                    </ul>    
                </div>

            <div class="ikon"> 
                <img class = "horsie" src={require("../img/hastikon.jpeg")} alt="Ikon föreställande en tecknad häst"/>               
            </div> 

            <div class="grid-container-hitta">           
                <div class="karta"> 

                    <div class = "textHitta">
                        <h3 style={{ color:"rgb(124,60,28)", textAlign: "center"}}> Hitta hit! </h3> 
                        <p>                          
                            Adress: Håknäs 7,                            
                            911 93 Vännäs
                            <br/>
                            <br/>
                            Telefon: +46 70 255 07 88
                            <br/>
                            <br/>
                        </p>
                        
                    </div>
              
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112466.25235537914!2d19.849837685785765!3d63.86788801547746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c63e53d73e8e5%3A0xb2403904e3f815f5!2zSMOFS07DhFMgNywgOTExIDkzIFbDpG5uw6Rz!5e0!3m2!1ssv!2sse!4v1676377770670!5m2!1ssv!2sse" 
                    title="Kartan"  
                    width={600} height={450}
                    allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>

                    
                    

                    <p> <br/>
                        Vi vill varna för tjädrar på vägen under deras speltider! 
                        Med start i den sena våren och ända in mot juni tinar tjädrarna fram och har sin speltid.
                        I vårt fina län Västerbotten kan det finnas tjädrar lite varstans och
                        när ni transporterar er mot Håknäs vill vi varna för aktiva tjädrar.
                        Stanna inte bilen för att försöka få kontakt med tjädern! Åk istället vidare
                        till oss på det trygga Bruket. 
                        <br/>
                        <br/>
                        Så här kan det bli om ni inte passar er:
                        <br/>
                        <br/>
                    </p>

                    <iframe width={560} height={315} src="https://www.youtube.com/embed/rUx8ZH2GJcs?start=76" 
                    title="Tjäderattack!!" allow="accelerometer; 
                    autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowfullscreen> </iframe>
                       

                </div>

            </div>
            
        </div>

        )
    }
}

export default Hitta;
import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <div class="meny">
            
                <ul>
                    <li><a href="./index.html">START</a></li>
                    <li><a href="./om.html">OM</a></li>
                    <li><a href="./kontakt.html">KONTAKT</a></li>
                    <li><a href="./aktiviteter.html">AKTIVITETER</a></li>
                    <li><a href="./hitta_hit.html">HITTA HIT</a></li>
                    <li><a href="./shuffle.html">MEMORY</a></li>                               
                </ul>     
                     
            </div>

        )
    }
}

export default Menu;
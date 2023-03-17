import React from "react";

class Ikon extends React.Component {
    render() {
        return (
            <div class="ikon"> 
                <img class = "horsie" src={require("../img/hastikon.jpeg")} alt="Ikon föreställande en tecknad häst"/>               
            </div>  

        )
    }
}

export default Ikon;
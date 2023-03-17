import React from "react";
import { useNavigate } from "react-router-dom";

function Profile2() {
    let navigate = useNavigate();

    return (
        <div> 
            Profilsidan 

            <button
                onClick={() => {
                    navigate("/about");
                
                }}
            > 

                {" "}
                Gå till about-sidan
            </button>

        </div>
    
    );
}

export default Profile2;
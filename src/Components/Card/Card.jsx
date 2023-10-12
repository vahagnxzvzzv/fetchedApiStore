import React from "react";
import './Card.css' 

function Card(props) {
    return (
        <div>
           <div >
            <h1>{props.product}</h1> 
           </div>     
        </div>
    )
}

export default Card;
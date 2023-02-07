import React from "react";

const Card = (props) => {
    return(
        <div className={`card shadow-2xl ${props.style}`}>
            <figure><img src={props.image} /></figure>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card;
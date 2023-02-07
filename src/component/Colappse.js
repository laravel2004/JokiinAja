import React from "react";

const Collapse = (props) => {
    return (
        <div tabIndex={0} className={`collapse collapse-arrow border border-base-300 rounded-box ${props.style}`}>
            <div className="collapse-title text-xl font-medium">
                {props.title}
            </div>
            <div className="collapse-content"> 
                <p>{props.des}</p>
            </div>
        </div>
    )
}

export default Collapse;
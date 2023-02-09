import React from "react";

const Modals = (props) => {
    return(
        <div className="mt-2">
            <a href="#my-modal-2" onClick={props.onClick} className="rounded-md shadow-lg p-3 px-5 hover:shadow-gray-900 hover:border-slate-50 border hover:bg-transparent">{props.title}</a>
            <div className="modal text-slate-800" id="my-modal-2">
                <div className="modal-box">
                   {props.children} 
                    <div className="modal-action">
                        <a href="#" className="btn bg-secondary">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modals;
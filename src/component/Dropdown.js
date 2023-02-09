import React, { useState } from "react";

const Dropdown = (props) => {

    const [pilih, setPilih] = useState('Pilih')

    const handleClick = (e, items) => {
        e.preventDefault()
        setPilih(items.name)
    }

    return(
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1">{pilih}</label>
            <ul tabIndex={0} className="text-slate-800 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {props.menu.map(items => <li onClick={(e) => handleClick(e, items)} key={items.id}><a>{items.name}</a></li>)}
            </ul>
        </div>
    )
}

export default Dropdown;
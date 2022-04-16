import React from "react";
import './Sidebar.css'


const Sidebar = () => {
    return(
        <div className={"sidebar"}>
            <ul>
                <li className={"sidebar__item"}>Home</li>
                <li className={"sidebar__item"}>Contacts</li>
                <li className={"sidebar__item"}>About us</li>
                <li className={"sidebar__item"}>Cart</li>

            </ul>
            </div>
        )
}

export default Sidebar
import React from "react";
import './Header.css';


const Header = () => {
    return(
    <header className={"App-header"}>
        <navBar className={"navBar"}>
            <div className={"App-logo"}>
                <img className={"App-logo"} src={"./logo192.png"}/>
            </div>
        </navBar>
    </header>
    )
}
export default Header
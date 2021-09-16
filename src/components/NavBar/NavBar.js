import React from 'react';
import { Menu } from 'semantic-ui-react';
import "./navBar.css";

const NavBar = () => {
    return (
        <Menu className="navbar" borderless size={"tiny"} ><Menu.Item >Spacestagram</Menu.Item></Menu>
    );
}

export default NavBar;

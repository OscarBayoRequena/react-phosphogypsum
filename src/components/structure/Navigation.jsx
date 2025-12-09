import React from "react";
import { Link } from "react-router";

import "./../../assets/css/Navigation.css"

function Navigation (){

    const navItems = [
        {
            section:"Home",
            route: "/"
        },
        {
            section:"Sources",
            route: "/sources"
        },
        {
            section:"Contact",
            route: "/contact"
        },
        {
            section:"Authors",
            route: "/authors"
        }
    ]

    return(

        <nav>
            {navItems.map((value,index) =>
                    <Link className="nav-item" key={`nav-item-${index}`} to={value.route}>{value.section}</Link>
            )}
        </nav>

    )

}

export default Navigation;
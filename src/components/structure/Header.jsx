import React from "react";

import Logo from "./Logo.jsx"
import Navigation from "./Navigation.jsx"


function Header (){

    return(

        <header>

            <Logo />
            <Navigation />
           {/*  
           Future immplementations

           Work done previosly would try to keep them in mind
           <ThemeToggle />
            <LangSelector /> 
            
            */}

        </header>

    )

}

export default Header;
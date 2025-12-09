import React from "react";

import Logo from "./Logo.jsx"
import Navigation from "./Navigation.jsx"


function Header ({lang}){

    return(

        <header>

            <Logo lang={lang} />
            <Navigation lang={lang} />
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
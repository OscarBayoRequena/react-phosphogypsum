import React from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";

import "./../../assets/css/pages/Home.css"

import Logo from "../structure/Logo";
import Index from "../elements/Index";

function Home (){

    return(

        <>
            <Header />
            
            <div className="main-container">

                <Logo />
                <div className="logo-slogan">Spreading scientific data about phosphogypsum stacks. Connecting people, science, and sustainable business.</div>

                <h1>Contents</h1>
                <Index />

                <h1>What are phosphogypsums?</h1>
                    

                <h1>Consecuences</h1>
                    <h2>Terrain impact</h2>
                    <h2>Hydrogeological impact</h2>
                    <h2>Visual impact</h2>

                <h1>Current state</h1>
                    <h2>Restored zones</h2>
                    <h2>Management</h2>

                <h1>Longterm solutions</h1>
                    <h2>Can phosphogypsum be recycled and valorized?</h2>
                        <h3>Phosphogypsum use cases</h3>
                        <h3>Phosphogypsum based companies</h3>
                            <h4>Prayon</h4>
                            <h4>CapturaCO2</h4>
                                <h5>Patents</h5>
                                <h5>Pilot plants</h5>
                        <h3 id="sample">University of Huelva studies</h3>

                {/* 
                Logo  X
                Contents
                    What are phosphogypsums?
                    Consecuences
                    Current state
                    Longterm solutions
                
                */}

            </div>

            <Footer />
        </>

    )

}

export default Home;
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

                <h1 id="section-1">What are phosphogypsums?</h1>
                    

                <h1 id="section-2">Consecuences</h1>
                    <h2 id="section-2-1">Terrain impact</h2>
                    <h2 id="section-2-2">Hydrogeological impact</h2>
                    <h2 id="section-2-3">Visual impact</h2>

                <h1 id="section-3">Current state</h1>
                    <h2 id="section-3-1">Restored zones</h2>
                    <h2 id="section-3-2">Management</h2>
                        <h3 id="section-3-2-1">Cases in other places</h3>
                        <h3 id="section-3-2-2">Case of Huelva</h3>

                <h1 id="section-4">Longterm solutions</h1>
                        <h2 id="section-4-1">Phosphogypsum use cases</h2>
                        <h2 id="section-4-2">Phosphogypsum based companies</h2>
                            <h3 id="section-4-2-1">Prayon</h3>
                            <h3 id="section-4-2-2">CapturaCO2</h3>
                                <h4 id="section-4-2-2-1">Patents</h4>
                                <h4 id="section-4-2-2-2">Pilot plants</h4>
                        <h2 id="section-4-3">University of Huelva studies</h2>

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
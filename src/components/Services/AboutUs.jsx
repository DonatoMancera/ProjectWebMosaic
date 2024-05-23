import React from "react";
import Donato from "./Donato/Donato";
import Andres from "./Andres/Andres";
import Lizbeth from "./Lizbeth/Lizbeth";
import FirstSectionAboutUs from "./FistSectionAboutUs/FirstSectionAboutus";

function AboutUs(){
    return(
        <>
            <FirstSectionAboutUs/>
            <Donato/>
            <Lizbeth/>
            <Andres/>
        </>
    )
}

export default AboutUs;
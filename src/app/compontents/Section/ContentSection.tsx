import React from "react";
import {Card, TechAndTools, Experience, Creations} from "../ComponentIndex";

export default function ContentSection(){
    return(
        <>
        <div className="grid justify-start justify-items-start md:grid-cols-[35%_50%] lg:grid-cols-1 xl:grid-cols-[35%_50%] md:gap-7 xl:gap-1 min-h-screen gap-y-4 snap-start" id="About">
            <Card/>
            <div className="grid grid-cols-1 gap-y-4">
                <TechAndTools/>
                <Experience/>
                <Creations/>
            </div>
        </div>
        
        </>     

    )
}
import React from "react";
import {Card, TechAndTools, Experience} from "../ComponentIndex";

export default function ContentSection(){
    return(
        <div className="grid justify-start justify-items-start md:grid-cols-[30%_50%] lg:grid-cols-1 xl:grid-cols-[30%_50%] md:gap-5 xl:gap-1 min-h-[100vh] gap-y-4 snap-start" id="About">
            <Card/>
            <TechAndTools/>
            <Experience/>
        </div>

    )
}
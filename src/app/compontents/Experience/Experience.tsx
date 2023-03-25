import React from "react";
import Card from "./Card";
import Technologies from "./Technologies";
import Creations from "./Creations";

export default function Experience(){
    return(
        <div className="grid justify-start justify-items-start md:grid-cols-[30%_50%] lg:grid-cols-1 xl:grid-cols-[30%_50%] md:gap-5 xl:gap-1 min-h-[100vh] gap-y-4">
            <Card/>
            <Technologies/>
        </div>

    )
}
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Header(){
    return(
        <div className="space-y-5 py-20 min-h-[100vh]">
            <h1 className="sm:leading-tight lg:leading-tight sm:text-[70px] md:text-[80px] lg:text-[85px] sm:text-4xl font-semibold">hi 👋, migs here.</h1>
            <h1 className="md:text-4xl sm:text-lg mb-5">bringing my imagination to life.</h1>
            <p className="flex md:text-[22px] sm:text-[15px] text-justify max-w-[60%]">I'm a javascript developer based in The Philippines. 
            I have great interest in full-stack development and machine learning.</p>
            <p className="md:text-lg sm:text-sm mb-5">Come say hi at <a className="underline" href={`mailto:lpawaon@gmail.com`}>lpawaon@gmail.com</a></p>
        </div>
    )
}
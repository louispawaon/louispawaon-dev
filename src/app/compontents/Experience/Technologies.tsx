/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {FaReact} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiNextdotjs,SiTailwindcss,SiNodedotjs,SiExpress,SiMysql,SiPostgresql,SiFirebase,SiPrisma} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

export default function Technologies(){
    return(
        <div className="space-y-4" >
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold">About Me</h1>
                <p className="text-justify flex flex-col text-base">What's up! I'm Migs. I'm currently at my 3rd Year of College taking up Bachelor of Science Major in Computer Science Degree at 
                Ateneo de Davao University.</p>
            </div>
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold">Tech Stack and Tools</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(26,127,55,.1)] text-[#1a7f37]">Frontend Frameworks</span>
                    <div className="pt-3 space-x-4 flex flex-row">
                        <SiJavascript className="w-[30px] h-[30px]"/>
                        <SiTypescript className="w-[30px] h-[30px]"/>
                        <FaReact className="w-[30px] h-[30px]"/>
                        <SiNextdotjs className="w-[30px] h-[30px]"/>
                        <SiTailwindcss className="w-[30px] h-[30px]"/>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(211,78,128,.1)] text-[#d34e80]">Backend Frameworks</span>
                    <div className="pt-3 space-x-4 flex flex-row">
                        <SiNodedotjs className="w-[30px] h-[30px]"/>
                        <SiExpress className="w-[30px] h-[30px]"/>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(9,105,218,.1)] text-[#0969da]">Database Management Systems</span>
                    <div className="pt-3 space-x-4 flex flex-row">
                        <SiMysql className="w-[30px] h-[30px]"/>
                        <SiPostgresql className="w-[30px] h-[30px]"/>
                        <SiFirebase className="w-[30px] h-[30px]"/>
                        <SiPrisma className="w-[30px] h-[30px]"/>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(9,105,218,.1)] text-[#0969da]">Miscellaneous</span>
                    <div className="pt-3 space-x-4 flex flex-row">
                        <BsGit className="w-[30px] h-[30px]"/>
                        <SiPostgresql className="w-[30px] h-[30px]"/>
                        <SiFirebase className="w-[30px] h-[30px]"/>
                    </div>
                </div>
            </div>
        </div>

    )
}
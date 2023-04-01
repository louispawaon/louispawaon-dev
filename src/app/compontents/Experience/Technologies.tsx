/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {FaReact} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiNextdotjs,SiTailwindcss,SiNodedotjs,SiExpress,SiMysql,SiPostgresql,SiFirebase,SiPrisma,SiGithub} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import Creations from "./Creations";

export default function Technologies(){
    return(
        <div className="space-y-[4rem] snap-start" id="About">
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">About Me</h1>
                <p className="text-justify flex flex-col text-base">What's up! I'm Louis Miguel Pawaon. I'm currently at my 3rd Year of College taking up a Bachelor of Science Major in Computer Science Degree at 
                Ateneo de Davao University.</p>
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">Technologies and Tools</h1>
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(26,127,55,.1)] text-[#1a7f37]">Frontend Frameworks</span>
                    <div className="pt-3 space-x-4 flex flex-wrap">
                        <SiJavascript className="w-[30px] h-[30px]" title="JavaScript"/>
                        <SiTypescript className="w-[30px] h-[30px]" title="TypeScript"/>
                        <FaReact className="w-[30px] h-[30px]" title="ReactJS"/>
                        <SiNextdotjs className="w-[30px] h-[30px]" title="Next.js"/>
                        <SiTailwindcss className="w-[30px] h-[30px]" title="TailwindCSS"/>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(211,78,128,.1)] text-[#d34e80]">Backend Frameworks</span>
                    <div className="pt-3 space-x-4 flex flex-row">
                        <SiNodedotjs className="w-[30px] h-[30px]" title="Node.js"/>
                        <SiExpress className="w-[30px] h-[30px]" title="Express"/>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(9,105,218,.1)] text-[#0969da]">Database Management Systems</span>
                    <div className="pt-3 space-x-4 flex flex-wrap">
                        <SiMysql className="w-[30px] h-[30px]" title="MySQL"/>
                        <SiPostgresql className="w-[30px] h-[30px]" title="PostgreSQL"/>
                        <SiFirebase className="w-[30px] h-[30px]" title="Firebase"/>
                        <SiPrisma className="w-[30px] h-[30px]"  title="Firestore"/>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-sm p-1 bg-[rgba(9,105,218,.1)] text-[#0969da]">Version Control</span>
                    <div className="pt-3 space-x-4 flex flex-row">
                        <BsGit className="w-[30px] h-[30px]"  title="Git"/>
                        <SiGithub className="w-[30px] h-[30px]" title="Github"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="space-y-3" id="Experience">
                <h1 className="text-2xl font-semibold">Experience</h1>
                <div>
                    <a href="https://www.facebook.com/SAMAHANSysDev" className="flex items-center gap-6 ">
                        <img src="/SamahanSysDev.svg" className="rounded-xl h-[80px] w-[80px] flex items-center" alt="Inappropriate"/>
                        <div>
                            <h1 className="font-[650] text-lg">SAMAHAN Systems Development</h1>
                            <h1 className="font-semibold">Director <span className="text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">April 2023 - Present</span></h1>
                            <h1 className="font-normal text-sm">Backend Developer Head <span className="text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">Feb 2023 - March 2023</span></h1>
                            <h1 className="font-normal text-sm">Member <span className="text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">April 2022 - Present</span></h1>
                        </div>
                    </a>
                </div>
                <div>
                    <ul className="list-disc text-sm space-y-3">
                        <li>Designed and implemented backend infrastructure and database management for the organization projects delegated by the SAMAHAN Student Government using <span className="font-semibold">TypeScript, JavaScript, Next, Express, Firebase and Firestore</span>.</li>
                        <li>Collaborated with Frontend Developers and Designers to define project requirements, scope and timelines to ensure that the backend architecture aligned with the overall vision and goals of the project.</li>
                        <li>Aided in organization workshops for Frontend Development, Backend Development and UI/UX Fundamentals with over <span className="font-semibold">200 participants</span>.</li>
                        <li>Spearheaded the planning and execution of the organization's roadmap, aligning it with the overall project goals and timelines, and ensuring that all deliverables were completed on time and within budget.</li>
                        <li>Fostered a collaborative and inclusive team culture, encouraging open communication, sharing of ideas, and mutual support, and promoting a positive and respectful work environment.</li>
                    </ul>
                </div>
            </div>
            <div className="space-y-3" id="Projects">
                <Creations/>
            </div>
        </div>

    )
}
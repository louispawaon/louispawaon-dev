/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Card(){
    return(
        <aside className=" md:sticky inline-block top-28 self-start bg-[#f6f8fa] p-4 border-2 border-[#d0d7de] border-solid rounded-xl row-span-2">
            <div className="flex flex-col items-center mb-4 ml-4 space-y-2 ">
                <div className="items-center">
                    <img src="/profpic.jpg" className="rounded-full h-[112px] w-[112px] flex items-center" alt="Inappropriate"/>
                </div>
                <div className="items-center text-sm font-medium">
                    <h2>Louis Pawaon</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid auto-cols-fr gap-2">
                    <a href="/Pawaon_Resume.pdf"><AccountBoxIcon/> Download Resume</a>
                    <a href={`mailto:lpawaon@gmail.com`}><EmailIcon/> Send Email</a>
                    <a href="https://twitter.com/miggy_pawaon"><TwitterIcon/> Follow Twitter</a>
                    <a href="https://www.linkedin.com/in/louispawaon/"><LinkedInIcon/> Connect LinkedIn</a>
                    <a href="https://github.com/louispawaon/"><GitHubIcon/> Follow Github</a>
                </div>
            </div>
        </aside>
    )
}
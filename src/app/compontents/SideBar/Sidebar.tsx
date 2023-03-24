import React from "react";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Sidebar(){
    return(
       <div className='flex flex-col justify-end right-0 bottom-[10%] pr-[5%] fixed space-y-5 z-50'>
         <div className=" flex flex-col text-right"> 
            <a href="#Top">introduction</a>
            <a href="#About">get to know migs</a>
            <a href="#Experience">experience</a>
            <a href="#Projects">projects</a>
         </div>
         <div className="text-right space-x-2">
            <a href="https://github.com/louispawaon/">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/miggy_pawaon">
                <TwitterIcon/>
            </a>
            <a href="https://www.linkedin.com/in/louispawaon/">
                <LinkedInIcon/>
            </a>
         </div>
       </div>
    )
}
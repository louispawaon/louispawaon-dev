import React from "react";

export default function Sidebar(){
    return(
       <div className='flex flex-col justify-end right-0 bottom-[10%] pr-[5%] fixed space-y-5 z-50 sm:invisible md:visible'>
         <div className=" flex flex-col text-right"> 
            <a href="https://drive.google.com/uc?export=download&id=1Is5Wtdn5zyJAdm_UL-KCdriQAG02Z8Fk"><span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              hover:before:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">download resume</span></a>

            <a href="#About"><span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              hover:before:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">get to know migs</span></a>

            <a href="#Experience"><span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              hover:before:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">experience</span></a>

            <a href="#Projects"><span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              hover:before:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">projects</span></a>
         </div>
         {/* <div className="text-right space-x-2">
            <a href="https://github.com/louispawaon/">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/miggy_pawaon">
                <TwitterIcon/>
            </a>
            <a href="https://www.linkedin.com/in/louispawaon/">
                <LinkedInIcon/>
            </a>
         </div> */}
       </div>
    )
}
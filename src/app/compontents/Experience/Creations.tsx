/* eslint-disable react/no-unescaped-entities */
import React from "react";


/* */
export default function Creations(){
    return(
        <div className="snap-start">
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">Projects</h1>
                <p>These are some of the personal and academic projects that I have taken part of over the course of my career.</p>
                <div>
                    <div className="flex justify-center">
                        <img src="/ConstiWebsite.png" className="rounded-xl w-[290px] h-[170px] flex items-center bg-[#39398D] rounded-xl p-4" alt="ConstiWeb"/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-3">
                        <h1 className="font-semibold text-lg"><span className="italic">SAMAHAN Voting Website </span><span className="inline-block text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">Jan 2023 - Feb 2023</span></h1>
                        <div className="inline space-x-2"> 
                            <span className="font-semibold text-sm p-1 bg-[rgba(211,78,128,.1)] text-[#d34e80]">Backend Developer</span>
                            <span className="font-semibold text-sm p-1 bg-[rgba(9,105,218,.1)] text-[#0969da]">Database Administrator</span>
                        </div>
                        <p className="text-sm text-justify">The Voting Website for the ratification of the proposed amendment of the changes in the 2020 SAMAHAN Constitution. I Developed the Backend Framework and Database Management using <span className="font-semibold">JavaScript, Firebase and Firestore.</span></p>
                        <p className="text-sm text-justify">With about <span className="font-semibold">3000 successful voting entries</span>, the changes of the 2020 SAMAHAN Constitution has been ratified.</p>
                    </div>
                    <a href="https://visionary-peony-079a58.netlify.app/" className="bg-[#f6f8fa] font-[#424a53] p-2 rounded-[10px] border-[rgba(27,31,35,.15)] border-solid border-[1px] flex items-center justify-center ">Visit Website</a>
                </div>
                <div>
                    <div className="flex justify-center ">
                        <img src="/GSTA Enrollment System.svg" className="rounded-xl w-[290px] h-[170px] flex items-center bg-[#5AC387] rounded-xl p-4" alt="GSTASystem"/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-3">
                        <h1 className="font-semibold text-lg"><span className="italic">GSTA Enrollment System </span><span className="inline-block text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">Jun 2022 - Oct 2022</span></h1>
                        <div className="inline space-x-2"> 
                            <span className="font-semibold text-sm p-1 bg-[rgba(211,78,128,.1)] text-[#d34e80]">Backend Developer</span>
                            <span className="font-semibold text-sm p-1 bg-[rgba(9,105,218,.1)] text-[#0969da]">Database Administrator</span>
                        </div>
                        <p className="text-sm text-justify">An Enrollment System for a Security Training Center which is part of our Software Engineering 1&2 Courseware Overall Project. I Developed the Backend Framework and Database Management using <span className="font-semibold">TypeScript, Node, Express and PostgreSQL.</span>I also used <span className="font-semibold">Prisma</span>, an ORM Framework to bridge between the databse and the api endpoints to perform complex CRUD Operations.</p>
                        <p className="text-sm text-justify">It was evaluated as a successful project with a final average grade of <span className="font-semibold">A (92%-100%)</span>.</p>
                    </div>
                    <a href="https://github.com/louispawaon/goncar-enrollment-system-backend" className="bg-[#f6f8fa] font-[#424a53] p-2 rounded-[10px] border-[rgba(27,31,35,.15)] border-solid border-[1px] flex items-center justify-center">Visit Repository</a>
                </div>
                <div>
                    <div className="flex justify-center">
                        <img src="/SakugaBooru.png" className="rounded-xl w-[290px] h-[170px] flex items-center bg-[#565657] rounded-xl p-4" alt="SakugaBot"/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-3">
                        <h1 className="font-semibold text-lg"><span className="italic">SakugaBooru </span><span className="inline-block text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">Dec 2022</span></h1>
                        <div className="inline space-x-2"> 
                            <span className="font-semibold text-sm p-1 bg-[rgba(211,78,128,.1)] text-[#d34e80]">Developer</span>
                        </div>
                        <p className="text-sm text-justify">As an avid fan of anime, I created SakugaBooru as my way of showing my love for animation as a whole. This is a Twitter Bot dedicated for sakuga animation that posts videos of Sakuga Animation every 45 Minutes. </p>
                        <p className="text-sm text-justify">I developed the Scrapper and WebCrawler system using Python Libraries - <span className="font-semibold">BeautifulSoup and Pybooru</span>. I also used Twitter's API through the <span className="font-semibold">Tweepy Python Library</span> to post tweets with attached media in a specific duration. </p>
                        <p className="text-sm text-justify">It generated over <span className="font-semibold">27,000 impressions</span> based on Twitter Analytics over the course of its lifetime.</p>
                    </div>
                    <a href="https://twitter.com/BotSakuga" className="bg-[#f6f8fa] font-[#424a53] p-2 rounded-[10px] border-[rgba(27,31,35,.15)] border-solid border-[1px] flex items-center justify-center">Visit Twitter Page</a>
                </div>
                <div>
                    <div className="flex justify-center">
                        <img src="/chammie.png" className="rounded-xl w-[290px] h-[170px] flex items-center bg-[#4A2170] rounded-xl p-4" alt="Chammie"/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-3">
                        <h1 className="font-semibold text-lg"><span className="italic">Chammie Theme </span><span className="inline-block text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">Jun 2021 - Present</span></h1>
                        <div className="inline space-x-2"> 
                            <span className="font-semibold text-sm p-1 bg-[rgba(211,78,128,.1)] text-[#d34e80]">Developer</span>
                        </div>
                        <p className="text-sm text-justify">A dark purple VS Code theme inspired by the colors of the Computer Studies Cluster of Ateneo de Davao University College. This academic year, Chammie encourages you to "Show Your Colors", where we must uncover who we are and what potentials we have as we navigate our college experience.</p>
                        <p className="text-sm text-justify">I developed the theme with VSCode's <span className="font-semibold">Yeoman Extension Generator </span>to craft the theme with updates every new Academic Year.</p>
                        <p className="text-sm text-justify">It garnered over <span className="font-semibold">157 installs</span> and satisfactory reviews and feedback from users.</p>
                    </div>
                    <a href="https://marketplace.visualstudio.com/items?itemName=tremor6916.chammie-theme" className="bg-[#f6f8fa] font-[#424a53] p-2 rounded-[10px] border-[rgba(27,31,35,.15)] border-solid border-[1px] flex items-center justify-center">Visit VSCode Marketplace</a>
                </div>
            </div>
        </div>
    )

    
}
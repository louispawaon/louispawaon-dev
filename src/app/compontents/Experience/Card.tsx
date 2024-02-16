import React from "react";
import Image from "next/image";
import { MdAccountCircle, MdEmail  } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Card(){
    return(
        <aside className="sm:w-[100%] custom1:w-[100%] md:sticky lg:static xl:sticky inline-block top-28 self-start bg-[#f6f8fa] p-4 border-2 border-[#d0d7de] border-solid rounded-xl row-span-2">
            <div className="flex flex-col items-center mb-4 ml-4 space-y-2 flex-shrink-0">
                <div className="items-center">
                    <Image src="/profile.png" width={120} height={120} className="rounded-full w-[120px] h-[120px] flex items-center object-cover" alt="My Graduation Photo for my Senior High School" title="My Graduation Photo for my Senior High School" blurDataURL="|BCF#jWC00tR}hV@ENV[t7RwtQo%IVtAxuV@bEX80?Rk}-t79sWB%LRkV@InofxbV@t3WWNIt7xDNFWAxBt7NNWC%1WANI$.f8R+oeR}WAoIs;WTW7fiS1jat8WXWFt6j^bxWBnit7WCaeX3RkjXw|t6NGM{%1t6IWkCxa" placeholder="blur"/>
                </div>
                <div className="items-center text-sm font-medium">
                    <h2>Louis Pawaon</h2>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="gap-3 gap-x-2 flex flex-col">
                    <div className="flex items-center">
                        <MdAccountCircle/>
                        <a href="/Pawaon_Resume.pdf" className="ml-2">Download Resume</a>
                    </div>
                    <div className="flex items-center">
                        <MdEmail/>
                        <a href="mailto:lpawaon@gmail.com" className="ml-2">Send Email</a>
                    </div>
                    <div className="flex items-center">
                        <FaTwitter/>
                        <a href="https://twitter.com/miggy_pawaon" className="ml-2">Follow Twitter</a>
                    </div>
                    <div className="flex items-center">
                        <FaLinkedin/>
                        <a href="https://www.linkedin.com/in/louispawaon/" className="ml-2">Connect LinkedIn</a>
                    </div>
                    <div className="flex items-center">
                        <FaGithub/>
                        <a href="https://github.com/louispawaon/" className="ml-2">Follow Github</a>
                    </div>
                </div>
            </div>
        </aside>
    )
}
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Card() {
  return (
    <aside
      className="sm:w-[100%] custom1:w-[100%] md:sticky lg:static xl:sticky inline-block top-28 self-start bg-[#f6f8fa] p-4 border-2 border-[#d0d7de] border-solid rounded-xl row-span-2"
    >
      <div className="flex flex-col items-center mb-4 ml-4 space-y-2 flex-shrink-0">
        <div className="items-center">
          <Image
            src="/profile.png"
            width={120}
            height={120}
            className="rounded-full w-[120px] h-[120px] flex items-center object-cover"
            alt="My College Graduation Photo"
            title="My College Graduation Photo"
            blurDataURL="|BCF#jWC00tR}hV@ENV[t7RwtQo%IVtAxuV@bEX80?Rk}-t79sWB%LRkV@InofxbV@t3WWNIt7xDNFWAxBt7NNWC%1WANI$.f8R+oeR}WAoIs;WTW7fiS1jat8WXWFt6j^bxWBnit7WCaeX3RkjXw|t6NGM{%1t6IWkCxa"
            placeholder="blur"
          />
        </div>
        <div className="items-center text-sm font-medium">
          <h2>Louis Pawaon</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid auto-cols-fr gap-2">
          <a href="/Pawaon_Resume.pdf">
            <span className="flex items-center gap-2">
              <MdAccountCircle /> Download Resume
            </span>
          </a>
          <a href={`mailto:lpawaon@gmail.com`}>
            <span className="flex items-center gap-2">
              <MdEmail /> Send Email
            </span>
          </a>
          <a href="https://twitter.com/miggy_pawaon">
            <span className="flex items-center gap-2">
              <FaXTwitter /> Follow Twitter
            </span>
          </a>
          <a href="https://www.linkedin.com/in/louispawaon/">
            <span className="flex items-center gap-2">
              <FaLinkedin /> Connect LinkedIn
            </span>
          </a>
          <a href="https://github.com/louispawaon/">
            <span className="flex items-center gap-2">
              <FaGithub /> Follow Github
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
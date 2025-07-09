import React from "react";
import Image from "next/image";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Card() {
  return (
    <aside className="sm:w-full custom1:w-full md:sticky lg:static xl:sticky inline-block top-28 self-start bg-[#f6f8fa] border-2 border-[#d0d7de] border-solid rounded-xl row-span-2 overflow-hidden">
      <div className="relative h-24 bg-linear-to-r from-blue-500 to-purple-600">
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <Image
            src="/profile.png"
            width={150}
            height={150}
            className="border-4 border-white rounded-full shadow-lg"
            alt="My College Graduation Photo"
            title="My College Graduation Photo"
          />
        </div>
      </div>
      <div className="pt-20 pb-6 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Louis Miguel Pawaon</h2>
        <p className="mt-2 text-sm text-gray-600">Full-Stack Developer</p>
      </div>
      <div className="px-4 pb-4">
        <div className="grid auto-cols-fr gap-2">
          <a href="https://drive.google.com/uc?export=download&id=1Is5Wtdn5zyJAdm_UL-KCdriQAG02Z8Fk" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <MdAccountCircle /> Download Resume
          </a>
          <a href={`mailto:lpawaon@gmail.com`} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <MdEmail /> Send Email
          </a>
          <a href="https://twitter.com/miggy_pawaon" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <FaXTwitter /> Follow Twitter
          </a>
          <a href="https://www.linkedin.com/in/louispawaon/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <FaLinkedin /> Connect LinkedIn
          </a>
          <a href="https://github.com/louispawaon/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <FaGithub /> Follow Github
          </a>
        </div>
      </div>
    </aside>
  );
}
import React from "react";
import Image from "next/image";
import { projects } from "@/data/Projects";

const Creations = () => {
  return (
    <div className="snap-start" id="Projects">
      <div className="space-y-3 mb-10 md:mb-5 xl:mb-10">
        <h1 className="text-2xl font-semibold">Highlighted Projects</h1>
        <p>
          These are some of the personal and academic projects that I have taken part of over the course of my career. More of my projects are available for viewing in{" "}
          <a href="https://github.com/louispawaon/">
            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
              Github.
            </span>
          </a>
        </p>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <Image src={project.image} width={290} height={170} className="rounded-xl w-[290px] h-[170px] flex items-center" alt={project.alt} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-3">
              <h1 className="font-semibold text-lg">
                <span className="italic">{project.title}{' '}</span>
                <span className="inline-block text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">{project.date}</span>
              </h1>
              <div className="inline space-x-2">
                {project.roles.map((role, index) => (
                  <span key={index} className={`font-semibold text-sm p-1 ${role.color} text-[${role.textColor}]`}>
                    {role.name}
                  </span>
                ))}
              </div>
              {project.description.map((desc, index) => (
                <p key={index} className="text-sm text-justify">
                  {desc}
                </p>
              ))}
              <a href={project.link} className="bg-[#f6f8fa] font-[#424a53] p-2 rounded-[10px] border-[rgba(27,31,35,.15)] border-solid border-[1px] flex items-center justify-center">
                {project.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creations;
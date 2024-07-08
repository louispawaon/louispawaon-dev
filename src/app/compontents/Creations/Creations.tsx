import React from "react";
import { projects } from "@/data/Projects";
import { ProjectCard } from "../ComponentIndex";

const Creations: React.FC = () => {
  return (
    <div className="snap-start" id="Projects">
      <div className="space-y-3 mb-10 md:mb-5 xl:mb-10">
        <h1 className="text-2xl font-semibold">Highlighted Projects</h1>
        
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
    </div>
  );
};

export default Creations;
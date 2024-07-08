import React from 'react'
import { technologies } from '@/data/Technologies'

const TechAndTools = () => {
  return (
    <div className="space-y-3 mb-10 md:mb-5 xl:mb-10">
      <h1 className="text-2xl font-semibold">Technologies and Tools</h1>
      <div className="grid grid-cols-1 gap-4">
        {technologies.map((tech, index) => (
          <div key={index}>
            <span
              className={`font-semibold text-sm p-1 ${tech.color} ${tech.textColor}`}
            >
              {tech.title}
            </span>
            <div className="pt-3 flex flex-wrap justify-start">
              {tech.items.map((item, index) => (
                <item.icon
                  key={index}
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] mx-2"
                  title={item.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechAndTools;
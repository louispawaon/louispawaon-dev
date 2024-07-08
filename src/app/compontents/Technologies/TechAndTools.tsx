import React from 'react'
import { technologies } from '@/data/Technologies'
import { motion } from 'framer-motion';

const TechAndTools = () => {
  return (
    <div className="space-y-3 mb-10 md:mb-5 xl:mb-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h1 className="text-2xl font-bold">Technologies and Tools</h1>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-4">
        {technologies.map((tech, index) => (
          <motion.div key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }} >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechAndTools;
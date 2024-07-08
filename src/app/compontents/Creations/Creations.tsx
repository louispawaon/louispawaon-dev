import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/Projects";
import { ProjectCard } from "../ComponentIndex";

const Creations: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <div className="snap-start" id="Projects">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3 mb-10 md:mb-5 xl:mb-10"
      >
        <h1 className="text-2xl font-bold">Highlighted Projects</h1>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 mt-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }} >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Creations;
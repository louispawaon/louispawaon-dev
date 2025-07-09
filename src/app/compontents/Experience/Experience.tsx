import React from 'react';
import Image from 'next/image';
import { experiences } from '@/data/Experience';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10" id="Experience">
      <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Experience</h1>
      </motion.div>
      
      {experiences.map((experience) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <Image 
                src={experience.logo} 
                width={64} 
                height={64} 
                className="rounded-lg object-cover w-16 h-16" 
                alt={`${experience.company} logo`} 
              />
              <div className="grow">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{experience.company}</h2>
                <a 
                  href={experience.company === 'SAMAHAN Systems Development' ? 'https://www.facebook.com/SAMAHANSysDev' : 'https://mugna.tech/'}
                  className="text-blue-600 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {experience.roles.map((role, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-gray-700 text-sm sm:text-base">{role.title}</h3>
                  <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-sm mt-1 sm:mt-0">{role.duration}</span>
                </div>
              ))}
            </div>
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-xs sm:text-sm">{achievement.text}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
import Image from 'next/image';
import { experiences } from '@/data/Experience';

const Experience = () => {
  return (
    <div className="space-y-6 mb-10 md:mb-5 xl:mb-10" id="Experience">
      <h1 className="text-2xl font-semibold">Experience</h1>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <a
            href={experience.company === 'SAMAHAN Systems Development' ? 'https://www.facebook.com/SAMAHANSysDev' : 'https://mugna.tech/'}
            className="flex items-center gap-6"
          >
            <Image src={experience.logo} width={80} height={80} className="rounded-xl h-[80px] w-[80px] flex items-center" alt="Inappropriate" />
            <div>
              <h1 className="font-[650] text-lg">{experience.company}</h1>
              {experience.roles.map((role) => (
                <h1 key={role.title} className="font-semibold text-base">
                  {role.title} <span className="text-thin text-xs gap-4 bg-[#f6f8fa] text-[#424a53] rounded-[0.2rem]">{role.duration}</span>
                </h1>
              ))}
            </div>
          </a>
          <div>
            <ul className="list-disc text-sm space-y-3 text-justify">
              {experience.achievements.map((achievement) => (
                <li key={achievement.text}>{achievement.text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
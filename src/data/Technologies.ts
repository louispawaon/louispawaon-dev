import {FaReact} from 'react-icons/fa'
import {
  SiTypescript,SiJavascript,SiNextdotjs,
  SiTailwindcss,SiNestjs,SiNodedotjs,SiExpress,
  SiMysql,SiPostgresql,SiFirebase,SiPrisma,
  SiGithub,SiDjango,SiSupabase,SiPostman,SiInsomnia, SiJest, SiVitest, SiTestinglibrary} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import { TechnologyType } from 'lib/types/TechnologiesType';

export const technologies: TechnologyType[] = [
    {
      title: 'Frontend Frameworks',
      color: 'bg-[rgba(26,127,55,.1)]',
      textColor: 'text-[#1a7f37]',
      items: [
        { icon: SiJavascript, title: 'JavaScript' },
        { icon: SiTypescript, title: 'TypeScript' },
        { icon: FaReact, title: 'ReactJS' },
        { icon: SiNextdotjs, title: 'Next.js' },
        { icon: SiTailwindcss, title: 'TailwindCSS' },
      ],
    },
    {
      title: 'Backend Frameworks',
      color: 'bg-[rgba(211,78,128,.1)]',
      textColor: 'text-[#d34e80]',
      items: [
        { icon: SiNodedotjs, title: 'Node.js' },
        { icon: SiNestjs, title: 'Nest.js' },
        { icon: SiExpress, title: 'Express' },
        { icon: SiDjango, title: 'Django' },
      ],
    },
    {
      title: 'Database Management Systems',
      color: 'bg-[rgba(9,105,218,.1)]',
      textColor: 'text-[#0969da]',
      items: [
        { icon: SiPostgresql, title: 'PostgreSQL' },
        { icon: SiMysql, title: 'MySQL' },
        { icon: SiFirebase, title: 'Firebase' },
        { icon: SiPrisma, title: 'Prisma' },
        { icon: SiSupabase, title: 'Supabase' },
        
      ],
    },
    {
      title: 'Version Control',
      color: 'bg-[rgba(9,105,218,.1)]',
      textColor: 'text-[#0969da]',
      items: [
        { icon: BsGit, title: 'Git' },
        { icon: SiGithub, title: 'Github' },
      ],
    },
    {
      title: 'Testing',
      color: 'bg-[rgba(218,122,9,.1)]',
      textColor: 'text-[#da7a09]',
      items: [
        { icon: SiPostman, title: 'Postman' },
        { icon: SiInsomnia, title: 'Insomnia' },
        { icon: SiJest, title: 'Jest' },
        { icon: SiVitest, title: 'Vitest' },
        { icon: SiTestinglibrary, title: 'Testing Library' },
      ],
    },
  ];
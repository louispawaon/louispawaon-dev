import {FaReact} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiNextdotjs,SiTailwindcss,SiNestjs,SiNodedotjs,SiExpress,SiMysql,SiPostgresql,SiFirebase,SiPrisma,SiGithub,SiDjango,SiSupabase} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

export const technologies = [
    {
      title: 'Frontend Frameworks',
      color: 'rgba(26,127,55,.1)',
      textColor: '#1a7f37',
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
      color: 'rgba(211,78,128,.1)',
      textColor: '#d34e80',
      items: [
        { icon: SiNodedotjs, title: 'Node.js' },
        { icon: SiNestjs, title: 'Nest.js' },
        { icon: SiExpress, title: 'Express' },
        { icon: SiDjango, title: 'Django' },
      ],
    },
    {
      title: 'Database Management Systems',
      color: 'rgba(9,105,218,.1)',
      textColor: '#0969da',
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
      color: 'rgba(9,105,218,.1)',
      textColor: '#0969da',
      items: [
        { icon: BsGit, title: 'Git' },
        { icon: SiGithub, title: 'Github' },
      ],
    },
  ];
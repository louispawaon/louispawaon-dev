import { ExperienceType } from "lib/types/ExperienceType";

export const experiences: ExperienceType[] = [
  {
    id: 2,
    company: 'Mugna Technologies Inc.',
    logo: '/ExperienceAssets/MugnaTech.jpg',
    roles: [
      {
        title: 'Junior Software Engineer',
        duration: 'Aug 2024 - Present',
      },
      {
        title: 'Backend Developer Intern',
        duration: 'Apr 2023 - Jun 2023',
      },
    ],
    achievements: [
      {
        text: 'Maintaining & optimizing legacy project codebases.',
      },
      {
        text: 'Researching the latest frameworks, techniques, best practices, and workflow improvements for the team.',
      },
      {
        text: 'Applied Python and Django skills to develop a web application, leveraging knowledge gained from relevant trainings.',
      },
      {
        text: 'Collaborated with a team of developers to deliver a functional and user-friendly web application.',
      },
      {
        text: 'Participated in the full software development lifecycle, including requirements gathering, design, development, and testing.',
      },
    ],
  },
    {
      id: 1,
      company: 'SAMAHAN Systems Development',
      logo: '/ExperienceAssets/SamahanSysDev.jpg',
      roles: [
        {
          title: 'Director',
          duration: 'Apr 2023 - May 2024',
        },
        {
          title: 'Backend Developer Head',
          duration: 'Feb 2023 - Mar 2023',
        },
        {
          title: 'Member',
          duration: 'Apr 2022 - May 2024',
        },
      ],
      achievements: [
        {
          text: 'Designed and implemented backend infrastructure and database management for the organization projects delegated by the SAMAHAN Student Government using TypeScript, JavaScript, Next, Express, Firebase and Firestore.',
        },
        {
          text: 'Collaborated with Frontend Developers and Designers to define project requirements, scope and timelines to ensure that the backend architecture aligned with the overall vision and goals of the project.',
        },
        {
          text: 'Aided in organization workshops for Frontend Development, Backend Development and UI/UX Fundamentals with over 200 participants.',
        },
        {
          text: 'Spearheaded the planning and execution of the organization\'s roadmap, aligning it with the overall project goals and timelines, and ensuring that all deliverables were completed on time and within budget.',
        },
        {
          text: 'Fostered a collaborative and inclusive team culture, encouraging open communication, sharing of ideas, and mutual support, and promoting a positive and respectful work environment.',
        },
      ],
    },

  ];
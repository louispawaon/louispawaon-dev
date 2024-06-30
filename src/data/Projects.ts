import { ProjectType } from "lib/types/ProjectType";
import ConstiWebsite from '../../public/ProjectAssets/ConstiWebsite.png'
import GSTA from '../../public/ProjectAssets/GSTAEnrollmentSystem.jpg'
  
  export const projects: ProjectType[] = [
    {
      image: ConstiWebsite,
      alt: "ConstiWeb",
      title: "SAMAHAN Consti Natin 'To Voting Website",
      date: "Jan 2023 - Feb 2023",
      roles: [
        { name: "Backend Developer", color: "bg-[rgba(211,78,128,.1)]", textColor: "#d34e80" },
        { name: "Database Administrator", color: "bg-[rgba(9,105,218,.1)]", textColor: "#0969da" },
      ],
      description: [
        "The Voting Website for the ratification of the proposed amendment of the changes in the 2020 SAMAHAN Constitution. I Developed the Backend Framework and Database Management using JavaScript, Firebase and Firestore.",
        "With about 3000 successful voting entries, the changes of the 2020 SAMAHAN Constitution has been ratified.",
      ],
      link: "https://visionary-peony-079a58.netlify.app/",
      linkText: "Visit Website",
    },
    {
      image: GSTA,
      alt: "GSTASystem",
      title: "GSTA Enrollment System",
      date: "Jun 2022 - Oct 2022",
      roles: [
        { name: "Backend Developer", color: "bg-[rgba(211,78,128,.1)]", textColor: "#d34e80" },
        { name: "Database Administrator", color: "bg-[rgba(9,105,218,.1)]", textColor: "#0969da" },
      ],
      description: [
        "An Enrollment System for a Security Training Center which is part of our Software Engineering 1&2 Courseware Overall Project. I Developed the Backend Framework and Database Management using TypeScript, Node, Express and PostgreSQL. I also used Prisma, an ORM Framework to bridge between the database and the api endpoints to perform complex CRUD Operations.",
        "It was evaluated as a successful project with a final average grade of A (92%-100%).",
      ],
      link: "https://github.com/louispawaon/goncar-enrollment-system-backend",
      linkText: "Visit Repository",
    },
  ];
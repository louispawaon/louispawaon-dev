import { ProjectType } from "lib/types/ProjectType";
  
  export const projects: ProjectType[] = [
    {

      title: "SmartCampus",
      roles: [
        { name: "Backend Developer", color: "bg-[rgba(211,78,128,.1)]", textColor: "#d34e80" },
        { name: "Dataabse Administrator", color: "bg-[rgba(9,105,218,.1)]", textColor: "#0969da" },
      ],
      description: [
        "One-Stop Shop Facility Reservation Mobile Application for Students, Teachers and School Staff"
      ],
      technologies: ["NestJS", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
      link: "https://github.com/louispawaon/smartcampus-backend",
    },
    {

      title: "heic-to-jpg",
      roles: [
        { name: "Developer", color: "bg-[rgba(218,122,9,.1)]", textColor: "#da7a09" },
      ],
      description: [
        "A Convenient Way To Convert Bulk .heic Files to .jpg Files"
      ],
      technologies: ["Python"],
      link: "https://github.com/louispawaon/heic-to-jpg",
    },
    {

      title: "PulseCheck",
      roles: [
        { name: "Developer", color: "bg-[rgba(26,127,55,.1)]", textColor: "#1a7f37" },
      ],
      description: [
        "Your go-to destination for effortlessly checking the online pulse of Ateneo de Davao University (AdDU)."
      ],
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
      link: "https://pulsecheck.vercel.app/",
    },
    {

      title: "Sikwati AI",
      roles: [
        { name: "Backend Developer", color: "bg-[rgba(211,78,128,.1)]", textColor: "#d34e80" },
      ],
      description: [
        "Mobile Application for detecting local cacao pod diseases with the EfficientNetB0 CNN Model"
      ],
      technologies: ["Python", "Flask"],
      link: "https://github.com/louispawaon/sikwati-ai-backend",
    },
  ];
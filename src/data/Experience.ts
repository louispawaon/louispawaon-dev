import type { ExperienceType } from 'lib/types/ExperienceType';
import Mugna from 'public/ExperienceAssets/MugnaTech.jpg'
import SysDev from 'public/ExperienceAssets/SamahanSysDev.jpg'

export const MugnaExperience: ExperienceType[] = [{
    companyName: "Mugna Tech",
    position: "Backend Developer Intern",
    date: "Apr 2023 - Jun 2023",
    description: [
        "Applied Python and Django skills to develop a web application, leveraging knowledge gained from relevant trainings.",
        "Collaborated with a team of developers to deliver a functional and user-friendly web application",
        "Participated in the full software development lifecycle, including requirements gathering, design, development, and testing"
    ],
    imageUrl: Mugna
}]

export const SysDevExperience: ExperienceType[] = [{
    companyName: "SAMAHAN Systems Development",
    position: "Director",
    date: "Apr 2023 - Present",
    description: [
        "Designed and implemented backend infrastructure and database management for the organization projects delegated by the SAMAHAN Student Government using TypeScript, JavaScript, Next, Express, Firebase and Firestore.",
        "Collaborated with Frontend Developers and Designers to define project requirements, scope and timelines to ensure that the backend architecture aligned with the overall vision and goals of the project.",
        "Aided in organization workshops for Frontend Development, Backend Development and UI/UX Fundamentals with over 200 participants.",
        "Spearheaded the planning and execution of the organization's roadmap, aligning it with the overall project goals and timelines, and ensuring that all deliverables were completed on time and within budget.",
        "Fostered a collaborative and inclusive team culture, encouraging open communication, sharing of ideas, and mutual support, and promoting a positive and respectful work environment."
    ],
    imageUrl: SysDev
}]
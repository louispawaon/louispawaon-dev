import type { StaticImageData } from "next/image";

export type ExperienceType = {
    companyName: string;
    position: string;
    date: string;
    description: string[];
    imageUrl?: StaticImageData
}
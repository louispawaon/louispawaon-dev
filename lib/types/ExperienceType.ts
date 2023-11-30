import type { StaticImageData } from "next/image";

export type ExperienceType = {
    company: string;
    position: string;
    date: string;
    description: string;
    imageUrl?: StaticImageData
}
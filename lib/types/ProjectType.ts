import type { StaticImageData } from "next/image";

export type ProjectType = {
    projName: string;
    duration: string;
    role: string[];
    description: string;
    websiteUrl: string;
    imageUrl?: StaticImageData
}
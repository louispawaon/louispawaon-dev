import type { StaticImageData } from "next/image";

export type ProjectType =  {
    image: StaticImageData;
    alt: string;
    title: string;
    date: string;
    roles: {
      name: string;
      color: string;
      textColor: string;
    }[];
    description: string[];
    link: string;
    linkText: string;
  }
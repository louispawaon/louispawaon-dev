export interface Role {
    title: string;
    duration: string;
  }
  
  export interface Achievement {
    text: string;
  }
  
  export type ExperienceType = {
    id: number;
    company: string;
    logo: string;
    roles: Role[];
    achievements: Achievement[];
  }
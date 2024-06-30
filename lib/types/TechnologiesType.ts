export interface TechnologyItem {
    icon: any;
    title: string;
  }
  
  export type TechnologyType =  {
    title: string;
    color: string;
    textColor: string;
    items: TechnologyItem[];
  }
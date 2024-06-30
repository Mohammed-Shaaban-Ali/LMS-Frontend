// types.ts
export interface Link {
    title: string;
    url: string;
  }
  
  export interface ContentSection {
    videoUrl: string;
    title: string;
    videoSection: string;
    description: string;
    links: Link[];
    suggestion?: string;  // Ensure this is always a string
  }
  
  // Define the type for course information
  export interface CourseInfo {
    name: string;
    description: string;
    price: string;
    estimatedPrice: string;
    tags: string;
    level: string;
    demoUrl: string;
    thumbnail: string;
  }
  
  // Define the type for a benefit or prerequisite
  export interface Item {
    title: string;
  }
export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  libraries: string[];
  responsibilities: string[];
  interestingCases: string[];
  previewImages: string[]; // paths to images in public/
  allImages: string[]; // all project images
  projectType: Array<'frontend' | 'mobile'>;
}
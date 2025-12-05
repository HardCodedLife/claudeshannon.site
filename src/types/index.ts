export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
};

export interface ContactForm{
  name: string;
  email: string;
  message: string;
};
